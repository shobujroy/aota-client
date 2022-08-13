// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ERC721r.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract AOTAUpgraded is ERC721r, Ownable {
    using SafeMath for uint256;
    string private _mockImageLink;
    uint256 private _deployBlockTimestamp;

    uint256 public constant MAX_SUPPLY = 7146;
    uint256 public constant PUB_PRICE = 0.09 ether;
    uint256 public constant PRI_PRICE = 0.07 ether;
    uint256 public constant MAX_PER_MINT = 146;

    address[] public whitelist;
    mapping(address => bool) public isWhitelisted;

    string public baseTokenURI;

    enum SalesStatus {
        NULL,
        PRIVATE,
        PUBLIC
    }

    SalesStatus salesStatus;

    mapping(address => uint256[]) public userTokens;

    constructor(string memory baseURI, string memory mockImageLink)
        ERC721r("Aliens On The Ave", "AOTA", 7146)
    {
        setBaseURI(baseURI);
        _mockImageLink = mockImageLink;
        _deployBlockTimestamp = block.timestamp;
        salesStatus = SalesStatus.NULL;
    }

    function pubPrice() public pure returns (uint256) {
        return PUB_PRICE;
    }

    function priPrice() public pure returns (uint256) {
        return PRI_PRICE;
    }

    function reserveNFTs(uint256[] memory listOfReservedTokens)
        public
        onlyOwner
    {
        for (uint256 i; i < listOfReservedTokens.length; i++) {
            _mintAtIndex(msg.sender, listOfReservedTokens[i]);
            userTokens[msg.sender].push(listOfReservedTokens[i]);
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

    function mint(uint256 _count) public payable {
        require(salesStatus != SalesStatus.NULL);
        if (salesStatus == SalesStatus.PRIVATE) {
            require(
                msg.value >= PRI_PRICE.mul(_count),
                "Not enough ether to purchase NFTs."
            );
            require(isWhitelisted[msg.sender], "You're not whitelisted");
        }
        if (salesStatus == SalesStatus.PUBLIC) {
            require(
                msg.value >= PUB_PRICE.mul(_count),
                "Not enough ether to purchase NFTs."
            );
        }
        payable(owner()).transfer(msg.value);
        uint256[] memory mintedTokens = _mintRandom(msg.sender, _count);
        for (uint256 i; i < mintedTokens.length; i++) {
            userTokens[msg.sender].push(mintedTokens[i]);
        }
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
        uint256 index;

        for (uint256 i = 0; i < userTokens[msg.sender].length; i++) {
            if (ownerOf(userTokens[msg.sender][i]) == address(msg.sender)) {
                itemCount++;
            }
        }
        string[] memory tokenURIs = new string[](itemCount);

        for (uint256 i = 0; i < userTokens[msg.sender].length; i++) {
            if (ownerOf(userTokens[msg.sender][i]) == address(msg.sender)) {
                tokenURIs[index] = tokenURI(userTokens[msg.sender][i]);
                index++;
            }
        }
        return tokenURIs;
    }

    function setSalesStatus(SalesStatus status) public onlyOwner {
        salesStatus = status;
    }
}
