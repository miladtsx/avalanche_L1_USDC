// src/components/Bridge.tsx
import React, { useEffect, useState } from 'react';
import { useWallet } from '../contexts/WalletContext';
import { supportedNetworks } from '../utils/blockchains';
import { Chains } from '../utils/types';
interface BridgeProps {
    onBridge: (recipient: string, amount: number) => Promise<void>;
}

const Bridge: React.FC<BridgeProps> = ({ onBridge }) => {

    const {
        isConnected,
        balance,
        usdcBalance,
        connectWallet
    } = useWallet();


    const [recipient, setRecipient] = useState<string>();
    const [amount, setAmount] = useState<string | undefined>();
    const [fromNetwork, setFromNetwork] = useState<number>(Chains.CChain);
    const [toNetwork, setToNetwork] = useState<number>(Chains.L1);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    // Enforce the From <-> To network rule
    useEffect(() => {
        if (isConnected && fromNetwork) {
            if (fromNetwork === Chains.CChain) {
                alert("Please check MetaMask: approve Changing the source chain to Fuji-CChain");
                connectWallet(Chains.CChain);
            } else if (fromNetwork === Chains.L1) {
                alert("Please check MetaMask: approve Changing the source chain to L1");
                connectWallet(Chains.L1);
            }
        }
    }, [fromNetwork]);

    const handleBridgeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (recipient && amount && fromNetwork && toNetwork) {
            setIsLoading(true)
            onBridge(
                recipient,
                parseFloat(amount)
            ).finally(() => {
                setIsLoading(false);
            })
        }
    };

    if (!isConnected) {
        return (
            <div className="flex justify-center items-center text-center sm:text-xl md:text-lg lg:text-4xl text-gray-600 mt-60 pb-32 space-x-2">
                <span>Please connect your</span>
                <img src="/avalanche_custom_blockchain/svg/mm.svg" alt='MetaMask logo' height={25} width={25} />
                <span>wallet to use the bridge functionality.</span>
            </div>

        );
    }
    return (
        <form onSubmit={handleBridgeSubmit} className="pt-4 bg-gray-50 rounded-lg shadow-lg space-y-6">
            <div className="p-4 bg-white rounded-lg shadow-md m-4 mb-10 flex justify-center">
                <h2 className="text-lg font-semibold flex items-center space-x-2">
                    <span className="flex items-center space-x-2">
                        <span>Transfer</span>
                        <span className="flex items-center">
                            <img src="/avalanche_custom_blockchain/svg/usdc.svg" alt="USDC" width={24} height={24} /><sup>$USDC</sup>
                        </span>
                        <span>across chains</span>
                    </span>
                </h2>
            </div>

            {/* Network Selection */}
            <div className="grid grid-cols-2 gap-6 mx-2">
                <div className="flex flex-col">
                    <label className="text-xs md:text-sm font-bold mb-2 text-gray-600">From Network</label>
                    <select
                        value={fromNetwork}
                        onChange={(e) => setFromNetwork(Number(e.target.value) as Chains)}
                        className="border rounded p-3 bg-white text-sm"
                    >
                        {supportedNetworks.map((network) => (
                            <option key={network.value} value={network.value}>
                                {network.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-xs md:text-sm font-bold mb-2 text-gray-600">To Network</label>
                    <select
                        value={toNetwork}
                        onChange={(e) => setToNetwork(Number(e.target.value) as Chains)}
                        disabled
                        className="border rounded p-3 bg-white text-sm opacity-40"
                    >
                        {supportedNetworks.map((network) => (
                            <option key={network.value} value={network.value}>
                                {network.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>


            {/* Recipient Address */}
            <div className="flex flex-col mx-2">
                <label className="text-xs md:text-sm font-bold mb-2 text-gray-600">Recipient Address</label>
                <input
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="border rounded p-3"
                    placeholder="0xRecipientAddress..."
                    required
                />
            </div>

            {/* Amount Field */}
            <div className="flex flex-col mx-2">
                <label className="text-xs md:text-sm font-bold mb-2 text-gray-600">Amount (USDC)</label>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border rounded p-3"
                    placeholder="Amount in USDC"
                    required
                />
                {/* USDC Balance */}
                <div className="mt-1 text-xs md:text-sm text-gray-500 text-left">
                    {
                        '$Native'
                    } {" "}
                    Balance: {balance}
                </div>
                <div className="mt-1 text-xs md:text-sm text-gray-500 text-left">
                    {'$USDC'} {" "}
                    Balance: {usdcBalance}
                </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pb-20">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg
                       hover:bg-blue-600 transition duration-200"
                >
                    {isLoading ? (<div className="spinner"></div>) : ("Bridge USDC")}
                </button>
            </div>
        </form>

    );
};

export default Bridge;
