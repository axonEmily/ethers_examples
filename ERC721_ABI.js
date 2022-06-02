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
  /// @return A count of valid NFTs tracked by this contract, where each one of them has an assigned and queryable owner not equal to the zero address
  "function totalSupply() external view returns (uint256)",
  /// @return The token identifier for the `_index`th NFT
  "function tokenByIndex(uint256 _index) external view returns (uint256)",
  ///@return The token identifier for the `_index`th NFT assigned to `_owner`
  "function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256)",

  /*下面的是沒有return的，是執行命令的function*/
  /// @notice Transfers the ownership of an NFT from one address to another address
  /// @param data Additional data with no specified format, sent in call to `_to`
  "function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable",
  /// @notice Transfers the ownership of an NFT from one address to another address
  "function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable",
  /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
  "function transferFrom(address _from, address _to, uint256 _tokenId) external payable",
  /// @notice Change or reaffirm the approved address for an NFT
  "function approve(address _approved, uint256 _tokenId) external payable;",
  /// @notice Enable or disable approval for a third party ("operator") to manage
  "function setApprovalForAll(address _operator, bool _approved) external",
];
