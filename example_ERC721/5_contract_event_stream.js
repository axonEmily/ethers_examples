//監聽指定合約的指定事件
const { ethers } = require("ethers");
const fs = require("fs");

const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    `https://matic-mumbai.chainstacklabs.com`
  );

  let ABI = fs.readFileSync("./NFTMarketplace.json", {
    encoding: "utf8",
    flag: "r",
  });
  const jsonABI = JSON.parse(ABI);
  const contractABI = jsonABI.abi;
  const address = "0xf2A2127B758DC5E3422255b8E114c799527b9e24"; // DAI Contract
  const contract = new ethers.Contract(address, contractABI, provider);
  //const block = await provider.getBlockNumber();
  await contract.on(
    "MarketItemCreated",
    (tokenId, seller, owner, price, sold) => {
      let array = {
        tokenId: tokenId,
        seller: seller,
        owner: owner,
        price: price,
        sold: sold,
      };
      console.log("array", array);
    }
  );
  //console.log(transferEvents);
  //   console.log(contractABI);
};

main();
