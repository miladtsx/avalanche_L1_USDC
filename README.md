# a Custom Avalanche L1 Blockchain

## What?
```
An Avalanche L1 is a network with its own set of rules regarding membership, token economics, and execution layer. It is composed of a Subset of Avalanche validators collaborating to achieve consensus on the state of one or more blockchains. Validators can be members of numerous Avalanche L1s.

Avalanche enables multiple interconnected Avalanche L1s. Each Avalanche L1 is independent while maintaining the capacity to communicate with other Avalanche L1s. All validators are part of the Avalanche L1 known as the Primary Network.
```
[read more about Avalanche L1s](https://academy.avax.network/course/avalanche-fundamentals/03-multi-chain-architecture-intro/02-subnet).


## Overview
This app is a Progressive Web Application (can offer features like offline use, push notifications, and installation on your device, while still being built with web technologies) that lets you test a full L1 integration with Fuji-CChain.


### Current Functionalities:
- Shows balances of Circle $USDC and the Native coin
- Bridging 
    - <i>Circle [$USDC](0x5425890298aed601595a70AB815c96711a31Bc65)</i> to the L1 and receive the custom Native coin (<i>L1 $USDC</i>)
    - <i>L1 $USDC</i> to the Fuji-CChain and receive <i>Circle $USDC</i>

So to summarize, you can transfer Circle $USDC from Fuji-CChain to this L1, and receive <i>L1 $USDC</i> which is the L1's native coin, and we can use it as the gas for our transactions.

## Example Scenario in details
Below is an example scenario: you send 1 [$USDC](0x5425890298aed601595a70AB815c96711a31Bc65) to the L1 (to a different address), and that address returns 0.99 USDC (since some USDC.Native is spent as gas).

[Check out the test transaction demonstrating details](./EXAMPLE_TX.md)

# How to build a new Avalanche L1
In order to have your own L1 in Avalanche Fuji-CChain Testnet, we need a Virtual Private Server to act as the Node and Validator. other than this, we only need to follow the instructions [here](./How_To.md).