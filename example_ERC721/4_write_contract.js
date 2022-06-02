//讀取賬號持有該種類（collection）NFT的數量
//將賬號1持有特定NFT（指定tokenId)轉移給賬號2
const { ethers } = require("ethers");
require("dotenv").config();
// const INFURA_ID = "";
// const provider = new ethers.providers.JsonRpcProvider(
//   `https://kovan.infura.io/v3/${INFURA_ID}`
// );
const provider = new ethers.providers.JsonRpcProvider(
  `https://matic-mumbai.chainstacklabs.com`
);

const account1 = "0x4AcFE3d1EE80d4875a3F99282BF0594de6f57D29"; // Your account address 1
const account2 = "0xC3c5bCD89E508B5Ffc11D265EA898134a4f06a98"; // Your account address 2

const privateKey1 = process.env.PRIVATE_KEY; // Private key of account 1

const wallet = new ethers.Wallet(privateKey1, provider);

//ERC721源代碼:https://eips.ethereum.org/EIPS/eip-721
const ERC721_ABI = [
  /// @return The address of the owner of the NFT
  "function ownerOf(uint256 _tokenId) external view returns (address)",
  /// @return The number of NFTs owned by `_owner`, possibly zero
  "function balanceOf(address _owner) external view returns (uint256)",
  /// @return The approved address for this NFT, or the zero address if there is none
  "function getApproved(uint256 _tokenId) external view returns (address)",
  /// @return True if `_operator` is an approved operator for `_owner`, false otherwise
  "function isApprovedForAll(address _owner, address _operator) external view returns (bool)",
  /// @notice A descriptive name for a collection of NFTs in this contract
  "function name() external view returns (string _name)",
  /// @notice An abbreviated name for NFTs in this contract
  "function symbol() external view returns (string _symbol)",
  ///@notice A distinct Uniform Resource Identifier (URI) for a given asset
  "function tokenURI(uint256 _tokenId) external view returns (string)",
  /*下面的好像用不了，可能是因爲這個contract沒有ERC721A,因爲totalSupply好像是在ERC721A裏面的 */
  //   /// @return A count of valid NFTs tracked by this contract, where each one of them has an assigned and queryable owner not equal to the zero address
  //   "function totalSupply() external view returns (uint256)",
  //   /// @return The token identifier for the `_index`th NFT
  //   "function tokenByIndex(uint256 _index) external view returns (uint256)",
  //   ///@return The token identifier for the `_index`th NFT assigned to `_owner`
  //   "function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256)",

  /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
  "function transferFrom(address _from, address _to, uint256 _tokenId) external payable",
];

const contractAddress = "0xf2A2127B758DC5E3422255b8E114c799527b9e24";
const contract = new ethers.Contract(contractAddress, ERC721_ABI, provider);

const main = async () => {
  const balance = await contract.balanceOf(account1);

  console.log(`\nReading from ${contractAddress}\n`);
  console.log(`Balance(NFT) of sender: ${balance}\n`);
  //By passing in a Signer. this will return a Contract which will act on behalf of that signer.
  const contractWithWallet = contract.connect(wallet);
  const tx = await contractWithWallet.transferFrom(account1, account2, "12");
  await tx.wait();

  console.log(tx);

  const balanceOfSender = await contract.balanceOf(account1);
  const balanceOfReciever = await contract.balanceOf(account2);

  console.log(`\nBalance(NFT) of sender: ${balanceOfSender}`);
  console.log(`Balance(NFT) of reciever: ${balanceOfReciever}\n`);
};

main();
