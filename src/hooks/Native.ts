import { utils } from "ethers";
import { hooks } from '../connectors/metaMask'

export const Native = () => {
    const {
        useProvider,
        useAccount
    } = hooks;
    const account = useAccount();
    const provider = useProvider();

    const getNativeBalance = async (): Promise<number> => {

        if (provider && account) {
            const balance = await provider.getBalance(account)

            const parsedBalance = parseFloat(utils.formatEther(balance.toString())).toFixed(3);
            return parseFloat(parsedBalance)
        }
        throw Error("No Provider to check Native Balance");
    };

    return {
        getNativeBalance
    }
}

