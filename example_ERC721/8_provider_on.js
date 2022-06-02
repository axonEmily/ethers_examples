//讀取特定網絡（provider)下的特定事件（event)
const { ethers, utils } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  `https://matic-mumbai.chainstacklabs.com`
);

const contractAddress = "0xf2A2127B758DC5E3422255b8E114c799527b9e24";
const contractAddress2 = "0x3F5BbC9615c2A636a8E72B74D891D2AF92fdCd33";

//如果定義多個address,用逗號隔開，例如：[hexZeroPad(myAddress1, 32)，hexZeroPad(myAddress2, 32)]
const from = [];
const to = [];

// List all token transfers  *from*  contractAddress
//參考文件：https://docs.ethers.io/v5/concepts/events/#events--filters
let filter = {
  //如果沒有設置address，返回所有合約的特定事件
  address: contractAddress,
  topics: [utils.id("Transfer(address,address,uint256)"), from, to],
};

const main = async () => {
  //provider.on 參考文件：https://docs.ethers.io/v5/api/providers/provider/#Provider--event-methods
  provider.on(filter, (result) => {
    console.log("New Transfer:", result);
  });
};
main();
