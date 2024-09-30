import React, { useEffect, useState } from 'react';
import { Chains } from '../utils/types';
import { useWallet } from '../contexts/WalletContext';
import { OnRamp } from '../components/ThirdWebOnRamp';

const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);

    const {
        isActive,
        account,
        connectWallet,
        disconnectWallet
    } = useWallet();


    const handleConnectClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };


    useEffect(
        () => {
            if (account) {
                setIsConnecting(false);
            }
        }, [account]
    );

    return (
        <header className="flex justify-between p-4 bg-blue-600 text-white shadow-lg">
            <h1 className="text-xl sm:text-md md:text-xl xl:text-2xl font-bold flex items-center space-x-2">
                <img src="/avalanche_custom_blockchain/svg/avalanche.svg" alt='avalanche logo' height={25} width={25} />
                <span>Avalanche Bridge</span>
            </h1>
            <div className='flex flex-col relative'>
                {isActive && account ? (
                    <div className=''>
                        <button
                            onClick={disconnectWallet}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded transition "
                        >
                            Disconnect
                        </button>

                        <OnRamp />
                    </div>
                ) : (
                    <button
                        onClick={handleConnectClick}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded transition text-sm sm:text-sm"
                    >
                        {
                            isConnecting ?
                                <div className='spinner'></div>
                                :
                                "Connect Wallet"
                        }
                    </button>
                )}
                {isModalOpen && (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="bg-blue-600 rounded shadow-lg px-4 flex gap-2" onClick={handleModalClose}>
                            <button
                                onClick={() => {
                                    setIsConnecting(true);
                                    connectWallet(Chains.CChain)
                                }}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                            >
                                Fuji CChain
                            </button>
                            <button
                                onClick={() => connectWallet(Chains.L1)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            >
                                L1
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
