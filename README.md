# Custom Avalanche L1 Blockchain with USDC Bridging and Gas payment

## What?
```
An Avalanche L1 is a custom blockchain with its own rules for membership, token economics, and how transactions are executed. It operates with a subset of Avalanche validators working together to reach consensus on the blockchain's state. These validators can participate in multiple Avalanche L1s, ensuring scalability and flexibility.

Avalanche supports multiple interconnected L1 blockchains. Each L1 operates independently but can communicate with others. All validators also belong to a broader L1 network called the Primary Network.

```

In the custom L1 I built, I changed the Native coin (also the gas payment coin).

[Read more about Avalanche L1s](https://academy.avax.network/course/avalanche-fundamentals/03-multi-chain-architecture-intro/02-subnet).

## Overview
This app is a Progressive Web Application (PWA), meaning it offers features like offline functionality, push notifications, and the ability to install it on your device, while still being built with standard web technologies. The app allows you to test full L1 blockchain integration with the Fuji-CChain.

### Current Functionalities:
- Shows the balance of both Circle $USDC and the custom L1 coin.
- Bridging functionality:
  - Bridge Circle [$USDC](0x5425890298aed601595a70AB815c96711a31Bc65) to the L1, receiving the native coin.
  - Bridge L1 native coin back to Fuji-CChain and receive the Circle $USDC.

#### Are there 2 USDC's?
No, there is only 1 official [$USDC](0x5425890298aed601595a70AB815c96711a31Bc65), which is issued by Circle. In this app, you can bridge the Circle $USDC (ERC20) into my custom L1 blockchain, where it will be represented as the L1's native coin. 

In this example, I named the L1's native coin "USDC" to indicate its 1-to-1 mapping with Circle's $USDC. You can see $USDC as the native gas token in MetaMask when interacting with this L1. If you create your own L1 blockchain, you can choose any name for your native coin or any  other ERC20 token than Circle $USDC to be bridged.


In summary, you can transfer Circle $USDC from Fuji-CChain to this L1, and receive <i>L1 $USDC (the native coin)</i> which is the L1's native coin, and can be used for gas payments for transactions.

## Example Scenario with more technical details
Here's an example: 
I sent 1 Circle [$USDC](0x5425890298aed601595a70AB815c96711a31Bc65) to the L1 (to another address). That receiver then returns back 0.99 $USDC from L1 to Fuji-CChain, as some of the L1 $USDC is used for gas fees.

[Check out the test transaction demonstrating details](./EXAMPLE_TX.md)


## Replicate this PWA for your own L1
To replicate this PWA for your own L1, update the following constants in the [constants.tsx](./src/utils/constants.tsx) file. Replace them with the <b>values for your custom L1 blockchain</b>:
- TOKEN_USDC
- TOKEN_HOME
- TOKEN_REMOTE
- L1_BLOCKCHAIN_ID

```
yarn install --frozen-lockfile

yarn start
```


# How to build a new Avalanche L1
To build your own L1 blockchain on the Avalanche Fuji-CChain Testnet as I did, follow these steps:
1. Set up a Virtual Private Server (VPS) to host your node and validator. The node is necessary to participate in consensus, while the validator helps secure the network.
2. Follow the detailed instructions [here](./How_To.md).