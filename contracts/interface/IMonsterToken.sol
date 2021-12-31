// SPDX-License-Identifier: MIT
// File: interfaces/IMonsterToken.sol

pragma solidity 0.8.0;

import "../ERC721/IERC721.sol";
import "../ERC721/IERC721Metadata.sol";
import "../ERC721/IERC721Enumerable.sol";

pragma experimental ABIEncoderV2;

/// @title CIHMonsterToken - Game CIH Token ERC721 implementation
/// @notice Simple implementation of a {ERC721} token to be used as
// Rainbow Token (RBT)
interface IMonsterToken is IERC721, IERC721Metadata, IERC721Enumerable {
    /// @notice Returns URI to contract'S API endpoint
    function contractURI() external view returns (string memory);

    /// @notice open a monster Returns monster's id
    function open() external payable returns(uint256);

    /// @notice continuous open monster Returns monsters ids
    function openMore() external payable returns(uint256[] memory);

    /// @notice own all token ids
    function getAllTokenIds() external view returns(uint256[] memory ids);

    /// @notice Returns monster rarity
    function getTokenRarity(uint256 tokenId) external view returns(uint256);
}
