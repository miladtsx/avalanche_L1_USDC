import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { hooks, metaMask } from '../connectors/metaMask'
import { Chains } from '../utils/types';
import { Blockchains } from '../utils/blockchains';
import { Native } from '../hooks/Native';
import { USDC } from '../hooks/TokenUSDC';
interface IWalletContextProps {
    isActive: boolean;
    account: string | null;
    balance: number;
    usdcBalance: number;
    selectedChain: number;
    isConnected: boolean;
    connectWallet: (chain: number) => void;
    disconnectWallet: () => void;
    setSelectedChain: (chain: number) => void;
    refreshBalances: () => void;
}

const WalletContext = createContext<IWalletContextProps | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [account, setAccount] = useState<string | null>(null);
    const [balance, setBalance] = useState<number>(0);
    const [usdcBalance, setUsdcBalance] = useState<number>(0);
    const [selectedChain, setSelectedChain] = useState<number>(0);
    const [isConnected, setIsConnected] = useState(false);

    const {
        useAccounts,
        useIsActive,
        useProvider,
        useChainId
    } = hooks
    const { getNativeBalance } = Native();
    const { getBalanceOf } = USDC();
    const provider = useProvider()
    const accounts = useAccounts();
    const isActive = useIsActive();
    const chainId = useChainId();


    const refreshBalances = async () => {
        if (provider && accounts?.length) {
            try {
                const _bal = await getNativeBalance();
                setBalance(_bal);
            } catch (err) {
                console.error(err);
            }

            if (account && selectedChain === Chains.CChain) {
                try {
                    const _usdcBal = await getBalanceOf(account);
                    setUsdcBalance(_usdcBal);
                } catch (err) {
                    setUsdcBalance(0);
                    console.error(err);
                }
            } else {
                setUsdcBalance(0);
            }

        }
    };

    useEffect(() => {
        refreshBalances();  // Automatically refresh on load
    }, [provider, chainId]);

    useEffect(() => {
        if (accounts?.length) {
            setAccount(accounts[0])
        }
    }, [accounts]);

    useEffect(() => {
        // there is no USDC token in L1; so only check usdc balance in CChain
        if (account && selectedChain === Chains.CChain) {
            getBalanceOf(account).then(
                (_bal: number) => {
                    setUsdcBalance(_bal);
                }).catch(err => {
                    setUsdcBalance(0);
                    console.log(err);
                })
        } else {
            setUsdcBalance(0);
        }

    }, [account, chainId]);


    const connectWallet = (chain: Chains) => {

        const selectedChain: any = Blockchains[chain];
        try {
            // metaMask.connectEagerly();
            metaMask.activate(selectedChain);
            setSelectedChain(chain);
            setIsConnected(true);
        } catch (error) {
            console.error(error);
        }
    };

    const disconnectWallet = () => {
        window.location.reload()
    };

    return (
        <WalletContext.Provider value={
            {
                isActive,
                account,
                balance,
                usdcBalance,
                selectedChain,
                isConnected,
                connectWallet,
                disconnectWallet,
                setSelectedChain,
                refreshBalances
            }
        }>
            {children}
        </WalletContext.Provider>
    )
}

export const useWallet = () => {
    const context = useContext(WalletContext);

    if (!context) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
}