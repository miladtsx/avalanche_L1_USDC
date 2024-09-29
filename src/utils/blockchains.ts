import { Chains } from "./types";

export const Blockchains = {
    [Chains.CChain]: {
        rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
        chainId: 43113,
        nativeCurrency: {
            decimals: 18,
            name: "AVAX Token",
            symbol: "AVAX"
        },
        chainName: "C-Chain",
    },
    [Chains.L1]: {
        rpcUrls: ["http://98.81.80.191:9650/ext/bc/2GpgDQ8H7guWxiyJUjhjXrQQR68MN3UpVhWP8gs2Rz9CYREGQP/rpc"],
        chainId: 9876,
        nativeCurrency: {
            decimals: 18,
            name: "USDC Native",
            symbol: "USDC"
        },
        chainName: "L1",
    }
}



export const supportedNetworks = [
    { label: 'Fuji C-Chain', value: Chains.CChain },
    { label: 'Custom Layer 1', value: Chains.L1 },
];