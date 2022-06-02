//將錢從賬戶1轉到賬戶2
//這個是錢包的function,跟NFT無關
const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(
  `https://matic-mumbai.chainstacklabs.com`
);

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = "0x4AcFE3d1EE80d4875a3F99282BF0594de6f57D29"; // Your account address 1
const account2 = "0xC3c5bCD89E508B5Ffc11D265EA898134a4f06a98"; // Your account address 2

const privateKey1 = process.env.PRIVATE_KEY; // Private key of account 1
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
  const senderBalanceBefore = await provider.getBalance(account1);
  const recieverBalanceBefore = await provider.getBalance(account2);

  console.log(
    `\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `reciever balance before: ${ethers.utils.formatEther(
      recieverBalanceBefore
    )}\n`
  );

  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther("0.15"),
  });

  await tx.wait();
  console.log(tx);

  const senderBalanceAfter = await provider.getBalance(account1);
  const recieverBalanceAfter = await provider.getBalance(account2);

  console.log(
    `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`
  );
  console.log(
    `reciever balance after: ${ethers.utils.formatEther(
      recieverBalanceAfter
    )}\n`
  );
};

main();
