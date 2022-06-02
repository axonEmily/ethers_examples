const { ethers } = require("ethers");

const myAddress = "0x4AcFE3d1EE80d4875a3F99282BF0594de6f57D29";
// List all token transfers  *from*  myAddress
filter = {
  address: tokenAddress,
  topics: [
    utils.id("Transfer(address,address,uint256)"),
    hexZeroPad(myAddress, 32),
  ],
};

// List all token transfers  *to*  myAddress:
filter = {
  address: tokenAddress,
  topics: [
    utils.id("Transfer(address,address,uint256)"),
    null,
    hexZeroPad(myAddress, 32),
  ],
};

// List all token transfers  *to*  myAddress or myOtherAddress:
filter = {
  address: tokenAddress,
  topics: [
    utils.id("Transfer(address,address,uint256)"),
    null,
    [hexZeroPad(myAddress, 32), hexZeroPad(myOtherAddress, 32)],
  ],
};
