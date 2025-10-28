require('dotenv').config();

const { ethers, parseEther, formatEther } = require('ethers');

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = process.env.RPC_URL;

async function sendNativeAsset(recipientAddress, amountInEth) {
    if (!PRIVATE_KEY || !RPC_URL) {
        console.error("Error: PRIVATE_KEY and RPC_URL must be provided in the .env file.");
        return;
    }

    try {
        const provider = new ethers.JsonRpcProvider(RPC_URL);
        const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

        const balance = await provider.getBalance(wallet.address);
        
        console.log(`Sender Address: ${wallet.address}`);
        console.log(`Current Balance: ${formatEther(balance)} ETH`);

        const amountWei = parseEther(amountInEth);

        if (balance < amountWei) {
            console.error("Error: Insufficient funds for the transaction.");
            return;
        }

        const tx = {
            to: recipientAddress,
            value: amountWei,
        };

        console.log(`\n>>> Sending ${amountInEth} ETH to address ${recipientAddress}...`);

        const txResponse = await wallet.sendTransaction(tx);

        console.log(`TX Hash: ${txResponse.hash}`);
        console.log("Waiting for transaction confirmation...");

        const receipt = await txResponse.wait();

        if (receipt && receipt.status === 1) {
            console.log("\n✅ Transaction successfully confirmed!");
            console.log(`Block Number: ${receipt.blockNumber}`);
            console.log(`Gas Used: ${formatEther(receipt.gasUsed * receipt.gasPrice)} ETH`);
        } else {
            console.error("\n❌ Transaction failed or was not confirmed.");
        }

    } catch (error) {
        console.error("\n❌ Error during transaction:");
        console.error(error.message);
    }
}

// --- INPUTS ---
const AMOUNT = '0.001'; // Amount in ETH to send
const RECIPIENT_PUBLIC_KEY = '0x23A37417................98'; // Replace with recipient's public key

sendNativeAsset(RECIPIENT_PUBLIC_KEY, AMOUNT);