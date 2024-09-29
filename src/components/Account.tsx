// src/components/BalanceDisplay.tsx
import React from 'react';

interface BalanceDisplayProps {
    balance: number;
}

const Account: React.FC<BalanceDisplayProps> = ({ balance }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md m-4">
            <h2 className="text-lg font-semibold">Balance: <span className="font-bold">{balance} USDC</span></h2>
        </div>
    );
};

export default Account;
