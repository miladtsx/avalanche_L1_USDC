import React, { useEffect, useState } from 'react';
import { Chains } from '../utils/types';
import { useWallet } from '../contexts/WalletContext';
import { ellipsify } from '../utils/common';


const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        isActive,
        isConnecting,
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

    return (
        <header className="flex justify-between p-4 bg-red-500 text-white shadow-lg">
            <h1 className="text-xl font-bold flex items-center space-x-2">
                <img src="/avalanche_custom_blockchain/svg/avax.svg" alt="USDC" className={`xs:w-60 sm:w-40 md:w-80`} height={24} />
                {/* <img src="/avalanche_custom_blockchain/svg/avalanche.svg" alt='avalanche logo' height={25} width={25} /> */}
                <span>CorssNet</span>
            </h1>
            <div className='flex flex-col relative'>
                {isActive && account ? (
                    <button
                        onClick={disconnectWallet}
                        className="hover:bg-red-700 text-white font-bold py-1 px-2 rounded transition "
                    >
                        {
                            ellipsify(account)
                        }
                    </button>
                ) : (
                    <button
                        onClick={handleConnectClick}
                        className="
                        hover:bg-gray-700 text-white font-bold py-4  rounded transition 
                        xs:text-lg
                        sm:text-lg
                        "
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
                        <div className="flex-col bg-red-500 rounded space-y-4 px-1" onClick={handleModalClose}>
                            <span>Choose Network</span>
                            <div className="flex space-x-4">
                                <button
                                    onClick={() => connectWallet(Chains.CChain)}
                                    className="flex-1 bg-white hover:bg-gray-500 text-black font-bold py-2"
                                >
                                    Fuji
                                </button>
                                <button
                                    onClick={() => connectWallet(Chains.L1)}
                                    className="flex-1 bg-white hover:bg-gray-500 text-black font-bold py-2"
                                >
                                    L1
                                </button>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </header>
    );
};

export default Header;
