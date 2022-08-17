// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ERC721r.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract AOTAUpgraded is ERC721r, Ownable {
    using SafeMath for uint256;
    using Strings for uint256;

    string private _mockImageLink;
    uint256 private _deployBlockTimestamp;

    uint256 public constant MAX_SUPPLY = 7147;
    uint256 public constant PUB_PRICE = 0.09 ether;
    uint256 public constant PRI_PRICE = 0.07 ether;
    uint256 public constant MAX_PER_MINT = 146;

    address[] public whitelist;
    mapping(address => bool) public isWhitelisted;

    string public baseTokenURI;
    string public baseExtension = ".json";

    enum SalesStatus {
        NULL,
        PRIVATE,
        PUBLIC
    }

    SalesStatus salesStatus;

    mapping(address => uint256[]) public userTokens;

    bool reserveMinted;

    constructor(string memory baseURI, string memory mockImageLink)
        ERC721r("Aliens On The Ave", "AOTA", 7147)
    {
        address[14] memory listOfUsers = [
            0x819EEc2c66A512Ef94F3A9ac3f7F5D0FDbC2cC64,
            0x16653D0fC9a2DA314B2733511556113DDb23A87C,
            0xB087Df8742909dde2A73C88bf197237c33ba71ED,
            0xfA0DE223b0588e185cAc2feD85dB73Cb9cd71eaB,
            0x52914A37a4E8C7a6bb97C92D2ab7CE00285f64Fb,
            0xD472DE4A85134a838b1dd4b7DFE6F02a28E71D2B,
            0xb4c3c40728a5dA172bb264D1F8587661a10C5F26,
            0x3f3323B2C02160A69fF6AC83612384906Ff9fd78,
            0xCABc2EEBd715b8064C66A9bD2ab0b15eFDEe58fa,
            0xCb4560cE663d65B9117FEF1965C302D9e42d5247,
            0x633536eF4ff01ccEc5D8414D89a45FC63e27C683,
            0xe419c69D17183a69F6cd2bbf233E629fc6768C4b,
            0x11f262897B3f083c9aD3965DBbEAF888f336F8d6,
            0x5F9CE815FD9E566FAc3D866Ed4db418270BC1325,
            0x51aEd1A84FD31182360EB2221b0D754075bCACB6,
            0x33588e7C50457e0e5f7dC0fD8FFa60E93ef33881
        ];
        require(listOfUsers.length != 0, "list of whitelist users is empty");
        setBaseURI(baseURI);
        _mockImageLink = mockImageLink;
        _deployBlockTimestamp = block.timestamp;
        salesStatus = SalesStatus.NULL;
        for (uint256 i; i < listOfUsers.length; i++) {
            if (
                listOfUsers[i] != address(0) && !isWhitelisted[listOfUsers[i]]
            ) {
                whitelist.push(listOfUsers[i]);
                isWhitelisted[listOfUsers[i]] = true;
            }
        }
    }

    function checkStatus() public view returns (SalesStatus) {
        return salesStatus;
    }

    function pubPrice() public pure returns (uint256) {
        return PUB_PRICE;
    }

    function priPrice() public pure returns (uint256) {
        return PRI_PRICE;
    }

    function reserveNFTs() public onlyOwner {
        require(!reserveMinted, "Reserve has already been minted!");
        uint16[147] memory listOfReservedTokens = [
            7053,
            7003,
            6970,
            6861,
            6835,
            6829,
            6816,
            6787,
            6741,
            6706,
            6634,
            6469,
            6365,
            6352,
            6285,
            6256,
            6235,
            6168,
            6140,
            6128,
            6074,
            6073,
            5892,
            5850,
            5828,
            5776,
            5637,
            5621,
            5583,
            5575,
            5529,
            5508,
            5429,
            5328,
            5323,
            5273,
            5183,
            5017,
            4933,
            4897,
            4894,
            4881,
            4879,
            4840,
            4720,
            4688,
            4626,
            4594,
            4503,
            4468,
            4461,
            4333,
            4219,
            4188,
            4183,
            4000,
            3828,
            3752,
            3749,
            3748,
            3730,
            3510,
            3495,
            3378,
            3346,
            3344,
            3240,
            3153,
            3142,
            3114,
            3106,
            3082,
            3068,
            3059,
            3029,
            2903,
            2870,
            2842,
            2828,
            2825,
            2757,
            2604,
            2540,
            2345,
            2306,
            2281,
            2227,
            2215,
            2150,
            2134,
            2058,
            2000,
            1955,
            1933,
            1896,
            1878,
            1874,
            1821,
            1727,
            1714,
            1711,
            1661,
            1656,
            1552,
            1523,
            1442,
            1298,
            1246,
            1244,
            1175,
            1169,
            1113,
            1084,
            1083,
            1038,
            1019,
            999,
            995,
            980,
            977,
            822,
            799,
            747,
            736,
            734,
            730,
            680,
            643,
            594,
            591,
            576,
            520,
            497,
            454,
            397,
            371,
            370,
            330,
            310,
            285,
            265,
            198,
            177,
            144,
            62,
            12,
            0
        ];
        for (uint256 i; i < listOfReservedTokens.length; i++) {
            _mintAtIndex(msg.sender, listOfReservedTokens[i]);
            userTokens[msg.sender].push(listOfReservedTokens[i]);
        }
        reserveMinted = true;
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

    function setMockImageLink(string memory mockImageLink) public onlyOwner {
        _mockImageLink = mockImageLink;
    }

    // 70000000000000000
    function mint(uint256 _count) public payable {
        require(_count <= MAX_PER_MINT, "You have exceeded max per mint");
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

    function addUsersToWhitelist(address[] memory listOfUsers)
        public
        onlyOwner
    {
        require(listOfUsers.length != 0, "list of whitelist users is empty");
        for (uint256 i; i < listOfUsers.length; i++) {
            if (
                listOfUsers[i] != address(0) && !isWhitelisted[listOfUsers[i]]
            ) {
                whitelist.push(listOfUsers[i]);
                isWhitelisted[listOfUsers[i]] = true;
            }
        }
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }
}
