//讀取特定合約的資料（根據ERC721標準化abi)
const { ethers } = require("ethers");

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
const provider = new ethers.providers.JsonRpcProvider(
  `https://matic-mumbai.chainstacklabs.com`
);
const address = "0xf2A2127B758DC5E3422255b8E114c799527b9e24";

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
  /*下面的好像用不了，因爲是一個這裏用的市場合約而不是一個nft合約，直接從 */
  //   /// @return A count of valid NFTs tracked by this contract, where each one of them has an assigned and queryable owner not equal to the zero address
  //   "function totalSupply() external view returns (uint256)",
  //   /// @return The token identifier for the `_index`th NFT
  //   "function tokenByIndex(uint256 _index) external view returns (uint256)",
  //   ///@return The token identifier for the `_index`th NFT assigned to `_owner`
  //   "function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256)",
];

const contract = new ethers.Contract(address, ERC721_ABI, provider);

const main = async () => {
  const tokenId = "12";
  //市場合約地址
  const operator = "0x58807baD0B376efc12F5AD86aAc70E78ed67deaE";
  console.log(`Reading from ${address}`);
  const ownerOf = await contract.ownerOf("2");
  console.log(`token ${tokenId} is belongs to ${ownerOf}`);

  const balance = await contract.balanceOf(`${ownerOf}`);
  console.log(`Balance Returned: ${balance}`);
  console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);

  const getApproved = await contract.getApproved(tokenId);
  console.log(`token ${tokenId} is approved to:${getApproved}`);

  const isApprovedForAll = await contract.isApprovedForAll(ownerOf, operator);
  console.log(
    `Does NFTowner(${ownerOf}) give approvel to operator(${operator})? ${isApprovedForAll}`
  );

  const name = await contract.name();
  console.log(`Name: ${name}`);

  const symbol = await contract.symbol();
  console.log(`Symbol: ${symbol}`);

  const tokenURI = await contract.tokenURI(tokenId);
  console.log(`metadata of token ${tokenId}:${tokenURI}`);
};

main();
