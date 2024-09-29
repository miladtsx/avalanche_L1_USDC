import { Contract, utils } from "ethers";
import { hooks } from '../connectors/metaMask'
import {
    ADDRESS_ZERO,
    C_CHAIN_BLOCKCHAIN_ID_HEX,
    TOKEN_HOME,
    TOKEN_REMOTE,
} from '../utils/constants';
import TOKEN_REMOTE_ABI from '../utils/nativeTokenRemoteAbi.json';

export const useL1ToCChain = () => {
    const {
        useProvider,
        useAccount
    } = hooks;

    const account = useAccount();
    const provider = useProvider();
    const signer = provider?.getSigner(account);

    const getTokenRemoteContract = () => {
        if (!provider || !signer) {
            throw Error("Provider or signer is not available for Remote token!");
        }

        const tokenRemoteContract = new Contract(
            TOKEN_REMOTE,
            TOKEN_REMOTE_ABI.abi,
            signer
        );

        return tokenRemoteContract;
    };

    const transferNativeToUSDCOnCChain = async (
        receiverAddress: string,
        amountInEther: number // The amount of Ether to transfer
    ) => {
        const contract = getTokenRemoteContract();
        if (!contract) throw Error("No Remote Contract!");

        // Convert Ether amount to wei
        const value = utils.parseEther(amountInEther.toString());

        const tx = await contract.send(
            [
                C_CHAIN_BLOCKCHAIN_ID_HEX,  // bytes32 C-Chain blockchain ID
                TOKEN_HOME,                 // address token on the home chain
                receiverAddress,            // address receiving tokens on C-Chain
                ADDRESS_ZERO,               // address for native asset transfer (0x0)
                0,                          // amount to transfer (USDC specific: 0)
                0,                          // fees (0 for this example)
                250000,                     // gas limit
                ADDRESS_ZERO                // address for native asset if needed
            ],
            { value } // Include Ether value in the transaction
        );

        console.log("Transaction sent:", tx.hash);
        const waitResult = await tx.wait(); // Wait for the transaction to be confirmed
        console.log("Transaction confirmed:", tx.hash);

        return waitResult;
    };

    return {
        transferNativeToUSDCOnCChain
    };
};
