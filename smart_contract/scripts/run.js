const { utils } = require("ethers");

async function main() {
    const baseTokenURI = "";
    const [owner] = await hre.ethers.getSigners();
    const contractFactory = await hre.ethers.getContractFactory("AOTA");
    const contract = await contractFactory.deploy(baseTokenURI);

    await contract.deployed();
    console.log("Contract deployed to:", contract.address);

    let tokens = await contract.tokensOfOwner(owner.address)
    console.log("Owner has tokens: ", tokens);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });