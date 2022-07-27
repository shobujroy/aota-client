const { utils } = require("ethers");
async function main() {
    const baseTokenURI = "ipfs://QmNk2tPVCrqGVAkzJHdsa1zQy9V1muodnR1GdSMMPEqJ7g/";
    const [owner] = await hre.ethers.getSigners();
    const contractFactory = await hre.ethers.getContractFactory("AOTA");
    const contract = await contractFactory.deploy(baseTokenURI);
    await contract.deployed();

}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });