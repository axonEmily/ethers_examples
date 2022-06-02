//ERC1155源代碼:https://eips.ethereum.org/EIPS/eip-1155
const ERC1155_ABI = [
  //ERC1155
  "function safeTransferFrom(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data) external",
  "function safeBatchTransferFrom(address _from, address _to, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external",
  "function balanceOf(address _owner, uint256 _id) external view returns (uint256)",
  "function balanceOfBatch(address[] calldata _owners, uint256[] calldata _ids) external view returns (uint256[] memory)",
  "function setApprovalForAll(address _operator, bool _approved) external",
  "function isApprovedForAll(address _owner, address _operator) external view returns (bool)",
  //ERC1155TokenReceive
  "function onERC1155Received(address _operator, address _from, uint256 _id, uint256 _value, bytes calldata _data) external returns(bytes4)",
  "function onERC1155BatchReceived(address _operator, address _from, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external returns(bytes4)",
  //ERC1155Metadata_URI
  "function uri(uint256 _id) external view returns (string memory)",
];
