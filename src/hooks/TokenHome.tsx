import { Contract, utils } from "ethers";
import { hooks } from '../connectors/metaMask'
import {
    ADDRESS_ZERO,
    TOKEN_HOME,
    L1_BLOCKCHAIN_ID,
    TOKEN_REMOTE,
} from '../utils/constants';
import TOKEN_HOME_ABI from '../utils/tokenHomeAbi.json';


export const useCChainToL1 = () => {
    const {
        useProvider,
        useAccount
    } = hooks;

    const account = useAccount();
    const provider = useProvider();
    const signer = provider?.getSigner(account);

    const getTokenHomeContract = () => {
        // Ensure provider and signer are available
        if (!provider || !signer) {
            console.error("Provider or signer is not available");
            return null;
        }

        const tokenHomeContract = new Contract(
            TOKEN_HOME,
            TOKEN_HOME_ABI.abi,
            signer
        );

        return tokenHomeContract;
    };

    const transferToL1 = async (
        amount: number,
        receiverAddress: string,
    ) => {
        const contract = getTokenHomeContract();
        if (!contract) throw Error("No Home Contract!");

        const tx = await contract.send(
            [
                L1_BLOCKCHAIN_ID,        // bytes32 L1 blockchain ID
                TOKEN_REMOTE,            // address token on remote chain
                receiverAddress,          // address receiving tokens on L1
                TOKEN_HOME,              // address token on L1
                0,                       // amount to transfer (0 for this example)
                0,                       // fees (0 for this example)
                250000,                  // gas limit
                ADDRESS_ZERO // address for native asset if needed
            ],
            utils.parseUnits(amount.toString(), 6) //"1000000" Amount to transfer in USDC (assuming 6 decimals)
        );

        console.log("Transaction sent:", tx.hash);
        await tx.wait(); // Wait for the transaction to be confirmed
        console.log("Transaction confirmed:", tx.hash);
    };

    return {
        transferToL1
    };
};
