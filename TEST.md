[< Back](./README.md)

## How can I test this app?

1. **Get Test Tokens**  
   You need some **AVAX** and **USDC** to use the app. Visit this [Faucet](https://test.core.app/tools/testnet-faucet/?subnet=c&token=c) and claim them.

2. **Connect Your Wallet**  
   Head to [this website](https://miladtsx.github.io/avalanche_custom_blockchain/) and install [Core](https://chromewebstore.google.com/detail/core-crypto-wallet-nft-ex/agoakfejjabomempkjlepdflaleeobhb).
   Click the top right button `Connect Wallet` and select **Fuji CChain** as your network.

3. **Make a Transfer**  
   - Enter any recipient address (use your own wallet address for simplicity).  
   - Enter the amount of USDC to transfer (e.g., 0.123 USDC).  
   - Your balance is displayed below the `Amount` input (1 AVAX and 1 USDC).

4. **Bridge Circle $USDC into L1**  
   - Click `Bridge USDC`.  
   - Approve the 2 transactions in Core Wallet (`Approve` and `Bridge or Contract Interaction`).  

5. **Check Your L1 Balance**  
   - Select the network from **Fuji** to **L1** using the `From Network` dropdown.  
   - Your **Native balance** should now show **0.123 USDC**.

6. **Bridge $USDC back into Fuji-CChain**  
   - Ensure `From Network` is set to **L1**.  
   - Set your (or any other) wallet address as the recipient.  
   - Enter an amount less than **0.123 USDC** (to leave some for gas fees).  
   - Transactions on this custom L1 network use **USDC** for gas.

That's it! You've successfully bridged your USDC from Fuji CChain to an Avalanche custom L1 blockchain.

[< Back](./README.md)