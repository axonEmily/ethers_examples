//獲取賬號（address)餘額
const { ethers } = require("ethers");
require("dotenv").config();
/*infura*/
// const INFURA_ID = process.env.INFURA_ID;
// const provider = new ethers.providers.JsonRpcProvider(
//   `https://mainnet.infura.io/v3/${INFURA_ID}`
// );

/*Polygon testnet-->一般會使用第三方的node(如上)*/
// const provider = new ethers.providers.JsonRpcProvider(
//   `https://matic-mumbai.chainstacklabs.com`
// );
const uri = process.env.POLYGON_TESTNET;
const provider = new ethers.providers.JsonRpcProvider(`${uri}`);
const address = process.env.myContractAddress;

const main = async () => {
  const balance = await provider.getBalance(address);
  console.log(
    `Matic Balance of ${address} --> ${ethers.utils.formatEther(balance)} Matic`
  );
  //console.log(uri);
};

main();
