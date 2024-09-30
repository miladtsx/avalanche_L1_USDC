import { Contract, utils } from "ethers";
import { hooks } from '../connectors/metaMask'
import { TOKEN_USDC } from '../utils/constants';
import ERC20_ABI from '../utils/erc20abi.json';
import { log } from "../utils/logger";

export const USDC = () => {
    const {
        useProvider,
        useAccount
    } = hooks;
    const account = useAccount();
    const provider = useProvider();
    const signer = provider?.getSigner(account);



    const approveUSDC = async (spenderAddress: string, amount: number) => {
        const usdcContract = getUSDCContract();
        if (!usdcContract) throw Error("No USDC Contract!");

        try {
            const amountToApprove = utils.parseUnits(amount.toString(), 6);
            const approveTx = await usdcContract.approve(
                spenderAddress,
                // ethers.constants.MaxUint256,
                amountToApprove
            );
            console.log("Approve transaction sent:", approveTx.hash);
            await approveTx.wait(); // Wait for approval confirmation
            console.log("Approval confirmed:", approveTx.hash);
        } catch (error: any) {
            log(`Error in approval: ${error.message}`);
            throw error; // Rethrow to prevent further execution
        }
    };


    const checkAndApproveUSDC = async (spenderAddress: string, transferAmount: number) => {
        const usdcContract = getUSDCContract();
        if (!usdcContract) throw Error("No USDC contract!");

        try {
            const account = await signer?.getAddress();
            const rawCurrentAllowance = await usdcContract.allowance(account, spenderAddress);

            const currentAllowance = parseFloat(utils.formatUnits(rawCurrentAllowance, 6));

            console.log(`Current allowance: ${currentAllowance} USDC`);

            // If allowance is less than the transfer amount, approve
            if (currentAllowance < transferAmount) {
                console.log("Allowance is less than transfer amount, approving...");
                await approveUSDC(spenderAddress, transferAmount);
            } else {
                console.log("Sufficient allowance is already granted.");
            }
        } catch (error) {
            log(`Error in checking allowance: ${error}`);
        }
    };


    const getUSDCContract = () => {

        // Check if the provider is available
        if (!signer) {
            throw Error("Signer is not available for USDC contract!"); // Or handle the absence of the provider appropriately
        }
        const tokenContract = new Contract(
            TOKEN_USDC,
            ERC20_ABI.abi,
            signer
        );
        return tokenContract;
    }

    const getBalanceOf = async (address: string): Promise<number> => {
        const balance = await getUSDCContract().balanceOf(address);
        const parsedBalance = Number(balance) / 1e6;
        return parseFloat((parsedBalance).toFixed(2));
    }

    return {
        getUSDCContract,
        approveUSDC,
        checkAndApproveUSDC,
        getBalanceOf
    }
}

