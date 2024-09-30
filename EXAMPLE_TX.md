[< Back](./README.md)

# What is it?
A test transaction demonstrating how USDC is bridged from C-Chain to the L1 with the teleporter message.

##### Constants addresses:
```
TOKEN_HOME : "0x7c7678a90D79746bB2D7407c4Ae19012DEE3768E";

TOKEN_REMOTE : "0x8592968E01A9a0838038baBE731627d01B606f03";

L1_BLOCKCHAIN_ID : "0xa79f33e7ce02b98ffe67a59a66a8ac5c194ef83a25d2b39fcf2c4c6c77548a43";
```

## Fuji-CChain to L1 | [$USDC] to [Native USDC]
Transferring $USDC token from Fuji-CChain to our custom L1

<b>From</b>: 0xE2087BCC11F6518E5c6f06b1eEf97473E1d3B7Fb

<b>To</b>: 0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC

[Transaction Link](https://testnet.snowtrace.io/tx/0x5e018c0bf96aa4680f845ecc92f87ddf5c4231e5aa13796c79d2183ffcb1fabf?chainid=43113)

### Relayer Logs for this tx:
The relayer is deployed on our Node and is responsible to set up a connection between our L1 and the Fuji-CChain:
```
09:37:15 | c-chain | Unpacked warp message:
   - Destination Address: 0x8592968E01A9a0838038baBE731627d01B606f03
   - Destination Blockchain: L1
   - Origin Sender: 0x7c7678a90D79746bB2D7407c4Ae19012DEE3768E
   - Source Blockchain: c-chain
   - Warp Message ID: 3VfVLjJ2WzHqrj12KDKs2xRUdgnH72XYW7wuLCuzVVrazBMTV

09:37:16 | c-chain | Created signed message:
   - Source Blockchain: c-chain
   - Warp Message ID: 3VfVLjJ2WzHqrj12KDKs2xRUdgnH72XYW7wuLCuzVVrazBMTV

09:37:16 | L1      | Sending message to destination chain:
   - Destination Blockchain: L1
   - Teleporter Message ID: UKVri8QKS8ZHMZDwCiYJJzxy1RqeoNvS7ZMsdumkPFkF51qHR
   - Warp Message ID: 3VfVLjJ2WzHqrj12KDKs2xRUdgnH72XYW7wuLCuzVVrazBMTV

09:37:16 |         | Sent transaction:
   - TxID: 0x69eb88e20ce588f0239ee56dfbd21c1e13b5e1aa68794df103146b6fd41cf532

09:37:16 | L1      | Delivered message to destination chain:
   - Destination Blockchain: L1
   - Teleporter Message ID: UKVri8QKS8ZHMZDwCiYJJzxy1RqeoNvS7ZMsdumkPFkF51qHR
   - TxHash: 0x69eb88e20ce588f0239ee56dfbd21c1e13b5e1aa68794df103146b6fd41cf532
   - Warp Message ID: 3VfVLjJ2WzHqrj12KDKs2xRUdgnH72XYW7wuLCuzVVrazBMTV

09:37:16 | L1      | Finished relaying message:
   - Destination Blockchain: L1
   - TxHash: 0x69eb88e20ce588f0239ee56dfbd21c1e13b5e1aa68794df103146b6fd41cf532
```

# Native to USDC
#### Transferring 0.99 $USDC from L1 to Circle $USDC ERC20 token in Fuji-CChain

<b>From</b>: 0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC

<b>To</b>: 0xE2087BCC11F6518E5c6f06b1eEf97473E1d3B7Fb

[Transaction Link](https://testnet.snowtrace.io/tx/0x3f654c28ce0ed6ff11ff4eb8fe65ccd3c15dcc1ded5bb68e6e08f2cb2fb58cef?chainid=43113)

```
09:43:51 | L1      | Unpacked warp message
           - Destination Address: 0x7c7678a90D79746bB2D7407c4Ae19012DEE3768E
           - Destination Blockchain ID: c-chain
           - Origin Sender Address: 0x8592968E01A9a0838038baBE731627d01B606f03
           - Source Blockchain ID: L1
           - Warp Message ID: vRMTmkErmYiKUnfHWqx1NhrEzghmW4svhqDBHFWJywBDY1Gsy

09:43:52 | L1      | Created signed message
           - Source Blockchain ID: L1
           - Warp Message ID: vRMTmkErmYiKUnfHWqx1NhrEzghmW4svhqDBHFWJywBDY1Gsy

09:43:52 | c-chain | Sending message to destination chain
           - Destination Blockchain ID: c-chain
           - Teleporter Message ID: fY5y2zV15VVwqCtJo8HYDoojR8EGNGUVxCmXcm2MoNyMnFNxz
           - Warp Message ID: vRMTmkErmYiKUnfHWqx1NhrEzghmW4svhqDBHFWJywBDY1Gsy

09:43:52 |         | Sent transaction
           - TX ID: 0x3f654c28ce0ed6ff11ff4eb8fe65ccd3c15dcc1ded5bb68e6e08f2cb2fb58cef

09:43:54 | c-chain | Delivered message to destination chain
           - Destination Blockchain ID: c-chain
           - Teleporter Message ID: fY5y2zV15VVwqCtJo8HYDoojR8EGNGUVxCmXcm2MoNyMnFNxz
           - TX Hash: 0x3f654c28ce0ed6ff11ff4eb8fe65ccd3c15dcc1ded5bb68e6e08f2cb2fb58cef
           - Warp Message ID: vRMTmkErmYiKUnfHWqx1NhrEzghmW4svhqDBHFWJywBDY1Gsy

09:43:54 | c-chain | Finished relaying message to destination chain
           - Destination Blockchain ID: c-chain
           - TX Hash: 0x3f654c28ce0ed6ff11ff4eb8fe65ccd3c15dcc1ded5bb68e6e08f2cb2fb58cef

```



[< Back](./README.md)