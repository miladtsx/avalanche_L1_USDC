import React from 'react';
import './App.css';
import Header from './components/Header';
import Bridge from './components/Bridge';
import Footer from './components/Footer'; // Adjust the path as necessary
import { useCChainToL1 } from './hooks/TokenHome'
import { useL1ToCChain } from './hooks/TokenNativeRemote'
import { USDC } from './hooks/TokenUSDC'
import { TOKEN_HOME } from './utils/constants';
import { constants } from 'ethers';
import { useWallet } from './contexts/WalletContext';
import { Chains } from './utils/types';

const App: React.FC = () => {
  const { transferToL1 } = useCChainToL1();
  const { transferNativeToUSDCOnCChain } = useL1ToCChain();
  const { checkAndApproveUSDC } = USDC();


  const { selectedChain, refreshBalances } = useWallet();


  const handleBridge = async (
    recipient: string,
    amount: number
  ) => {

    try {
      if (selectedChain == Chains.L1) {
        await transferNativeToUSDCOnCChain(
          recipient,
          amount
        )
      } else if (selectedChain == Chains.CChain) {

        await checkAndApproveUSDC(
          TOKEN_HOME,
          amount
        );
        await transferToL1(
          amount,
          recipient
        )
      } else {
        throw Error("Unsupported chain!");
      }
      refreshBalances();
    }
    catch (err) {
      console.error("Error in transfer:", err);
    }
  };

  return (
    <div className="App">
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <Bridge onBridge={handleBridge} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
