# Web3 Native Asset Sender (ethers.js)

This Node.js script facilitates sending the native asset (e.g., ETH, MATIC, BNB) on any EVM-compatible network using the `ethers.js` library.

## Prerequisites

*   Node.js (v16+)
*   npm

## Installation

1.  Clone the repository and navigate to the directory:
    ```bash
    git clone https://github.com/darmat1/send_eth_asset_test
    cd web3-tx-sender
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## Setup

1.  Rename `.env.example` to `.env`.
2.  Fill in the required configuration variables in the `.env` file:
    *   `PRIVATE_KEY`: The private key of the sending wallet.
    *   `RPC_URL`: The RPC endpoint for the network you intend to use (e.g., a URL from Infura or Alchemy).

## Usage

1.  Open `send_native_asset.js`.
2.  Update the `AMOUNT` and `RECIPIENT_PUBLIC_KEY` variables at the bottom of the file with your desired values.
3.  Execute the script:

    ```bash
    npm start
    ```

## Expected Output

Upon successful execution, the console will display the transaction details and confirmation: