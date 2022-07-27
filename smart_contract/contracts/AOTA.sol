//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract AOTA is ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    string private _mockImageLink;
    uint256 private _deployBlockTimestamp;

    uint256 public constant MAX_SUPPLY = 7146;
    uint256 public constant PUB_PRICE = 0.07 ether;
    uint256 public constant PRI_PRICE = 0.09 ether;
    uint256 public constant MAX_PER_MINT = 146;

    string public baseTokenURI;

    constructor(string memory baseURI, string memory mockImageLink)
        ERC721("Aliens On The Ave", "AOTA")
    {
        setBaseURI(baseURI);
        _mockImageLink = mockImageLink;
        _deployBlockTimestamp = block.timestamp;
    }

    function pubPrice() public pure returns (uint256) {
        return PUB_PRICE;
    }

    function priPrice() public pure returns (uint256) {
        return PRI_PRICE;
    }

    function reserveNFTs() public onlyOwner {
        uint256 totalMinted = _tokenIds.current();

        require(
            totalMinted.add(146) < MAX_SUPPLY,
            "Not enough NFTs left to reserve"
        );

        for (uint256 i = 0; i < 146; i++) {
            _mintSingleNFT();
        }
    }

    function _baseURI() internal view virtual override returns (string memory) {
        if (block.timestamp > _deployBlockTimestamp + 2 weeks) {
            return baseTokenURI;
        } else {
            return _mockImageLink;
        }
    }

    function setBaseURI(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    function mintPubNFTs(uint256 _count) public payable {
        uint256 totalMinted = _tokenIds.current();

        require(totalMinted.add(_count) <= MAX_SUPPLY, "Not enough NFTs left!");
        require(
            _count > 0 && _count <= MAX_PER_MINT,
            "Cannot mint specified number of NFTs."
        );
        require(
            msg.value >= PUB_PRICE.mul(_count),
            "Not enough ether to purchase NFTs."
        );

        payable(owner()).transfer(msg.value);

        for (uint256 i = 0; i < _count; i++) {
            _mintSingleNFT();
        }
    }

    function mintPriNFTs(uint256 _count) public payable {
        uint256 totalMinted = _tokenIds.current();

        require(totalMinted.add(_count) <= MAX_SUPPLY, "Not enough NFTs left!");
        require(
            _count > 0 && _count <= MAX_PER_MINT,
            "Cannot mint specified number of NFTs."
        );
        require(
            msg.value >= PRI_PRICE.mul(_count),
            "Not enough ether to purchase NFTs."
        );

        payable(owner()).transfer(msg.value);

        for (uint256 i = 0; i < _count; i++) {
            _mintSingleNFT();
        }
    }

    function _mintSingleNFT() private {
        uint256 newTokenID = _tokenIds.current();
        _safeMint(msg.sender, newTokenID);
        _tokenIds.increment();
    }

    function safeTransfer(address to, uint256 tokenId) public {
        require(
            _isApprovedOrOwner(_msgSender(), tokenId),
            "AOTA::SafeTransfer: transfer caller is not owner"
        );
        _safeTransfer(msg.sender, to, tokenId, "");
    }

    function getMyNFTs() public view returns (string[] memory) {
        uint256 itemCount;
        uint256 index = 0;

        for (uint256 i = 0; i < _tokenIds.current(); i++) {
            if (ownerOf(i) == address(msg.sender)) {
                itemCount++;
            }
        }

        string[] memory tokenURIs = new string[](itemCount);
        for (uint256 i; i < _tokenIds.current(); i++) {
            if (ownerOf(i) == address(msg.sender)) {
                tokenURIs[index] = tokenURI(i);
                index++;
            }
        }

        return tokenURIs;
    }
}
