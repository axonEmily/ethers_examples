//獲取現在的block number，對應block的資料，以及block中的transaction的資料

const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  `https://matic-mumbai.chainstacklabs.com`
);

const main = async () => {
  const block = await provider.getBlockNumber();

  console.log(`\nBlock Number: ${block}\n`);

  const blockInfo = await provider.getBlock(block);

  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);

  console.log(`\nLogging first transaction in block:\n`);
  console.log(transactions[0]);
};

main();
