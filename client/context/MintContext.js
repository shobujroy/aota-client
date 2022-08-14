import React, { useState, useEffect } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import swal from 'sweetalert';
import AOTA from '../contracts/AOTAUpgraded.json';


export const MintContext = React.createContext();
let web3Modal;
const add = "0x795C0413089923d426Dc7A80032e65DeDc919Aec";
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "29a4aa8775aa42caace0437559c37bb4",
        }
    }
};

export const MintProvider = ({ children }) => {
    if (typeof window !== "undefined") {
        web3Modal = new Web3Modal({
            cacheProvider: true,
            providerOptions,
        });
    }
    const [isConnected, setIsConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [sign, setSign] = useState(undefined);
    const [pubPrice, setPubPrice] = useState(0.09);
    const [priPrice, setPriPrice] = useState(0.07);
    const [trxHash, setTrxHash] = useState('');
    const [collection, setCollection] = useState([]);
    const [status, setStatus] = useState(0);
    const [dep, setDep] = useState(Math.random());

    // connect wallet
    async function connectwallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
                const provider = await web3Modal.connect();
                const web3 = new Web3(provider);
                setIsConnected(true);
                setSign((await web3.eth.getAccounts())[0]);
            } catch (e) {
                console.log(e);
            }
        } else {
            setIsConnected(false);
        }
    }

    // disconnect wallet
    async function disconnectwallet() {
        await web3Modal.clearCachedProvider();
        setSign(undefined);
        //setSign(undefined);
        setIsConnected(false);
        //setHasMetamask(false);
    }

    // public mint
    async function pubMint(count) {
        setTrxHash('');
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            const PUB_PRICE = await Cont.methods.pubPrice().call();
            let total = count * PUB_PRICE
            let price = web3.utils.fromWei(total.toString(), "ether");
            setPubPrice(price);
            try {
                await Cont.methods.mint(count).send({ from: sign, value: total }, function (err, txHash) {
                    if (err) {
                        console.log(err);
                    } else {
                        setTrxHash(txHash);
                        swal({
                            title: "You have minted successfully!",
                            text: `This is your hash of transaction: ${txHash}`,
                            icon: "success",
                        });
                    }
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("install metamask");
        }
    }

    // private mint
    // async function priMint(count) {
    //     setTrxHash('');
    //     if (typeof window.ethereum !== "undefined") {
    //         web3Modal = new Web3Modal({
    //             cacheProvider: true,
    //             providerOptions,
    //         });
    //         const provider = await web3Modal.connect();
    //         const web3 = new Web3(provider);
    //         const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
    //         const PRI_PRICE = await Cont.methods.priPrice().call();
    //         let total = count * PRI_PRICE
    //         let price = web3.utils.fromWei(total.toString(), "ether");
    //         setPriPrice(price);
    //         try {
    //             await Cont.methods.mintPriNFTs(count).send({ from: sign, value: total }, function (err, txHash) {
    //                 if (err) {
    //                     console.log(err);
    //                 } else {
    //                     setTrxHash(txHash);
    //                     swal({
    //                         title: "You have minted successfully!",
    //                         text: `This is your hash of transaction: ${ txHash }`,
    //                         icon: "success",
    //                     });
    //                 }
    //             });
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     } else {
    //         console.log("install metamask");
    //     }
    // }

    // reserve mint
    async function reserve() {
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            try {
                await Cont.methods.reserveNFTs().send({ from: sign }, function (err, txHash) {
                    if (err) {
                        console.log(err);
                    } else {
                        setTrxHash(txHash);
                        // swal
                        swal({
                            title: "You have minted successfully!",
                            text: `This is your hash of transaction: ${txHash}`,
                            icon: "success",
                        });
                    }
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("install metamask");
        }
    }

    // wallet to wallet transfer
    async function nftTransfer(reciverAdd, tokenId) {
        setTrxHash('');
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            try {
                await Cont.methods.safeTransfer(reciverAdd, tokenId).send({ from: sign }, function (err, txHash) {
                    if (err) {
                        console.log(err);
                    } else {
                        setTrxHash(txHash);
                    }
                });
                setDep(Math.random());
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("install metamask");
        }
    }

    async function setSalesStatus(status) {
        setTrxHash('');
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            try {
                await Cont.methods.setSalesStatus(status).send({ from: sign }, function (err, txHash) {
                    if (err) {
                        console.log(err);
                    } else {
                        setTrxHash(txHash);
                    }
                });
                setDep(Math.random());
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("install metamask");
        }
    }

    async function addUsersToWhitelist(addresses) {
        console.log(addresses)
        setTrxHash('');
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            try {
                await Cont.methods.addUsersToWhitelist(addresses).send({ from: sign }, function (err, txHash) {
                    if (err) {
                        // return this err
                        swal({
                            title: "Something wrong!",
                            text: `Try again after sometimes!`,
                            icon: "error",
                        });
                    } else {
                        console.log(txHash);
                        swal({
                            title: "You have added successfully!",
                            text: `You have added ${addresses.length} users to whitelist.`,
                            icon: "success",
                        });
                        setTrxHash(txHash);
                    }
                });
                setDep(Math.random());
            } catch (error) {
                swal({
                    title: "Something wrong!",
                    text: `Try again after sometimes!`,
                    icon: "error",
                });
                console.log(error);
            }
        } else {
            console.log("install metamask");
        }
    }

    async function checkStatus() {
        setTrxHash('');
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            try {
                const data = await Cont.methods.checkStatus().call({ from: sign });
                setStatus(data);
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("install metamask");
        };
    }

    // NFTs for gallery
    async function myNFTs() {
        setTrxHash('');
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            const web3 = new Web3(provider);
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            try {
                const nftURI = await Cont.methods.getMyNFTs().call({ from: sign });
                setCollection(nftURI)
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log("install metamask");
        };
    }

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(false);
        }
    }, [hasMetamask]);
    return (
        <MintContext.Provider value={{
            myNFTs,
            collection,
            trxHash,
            isConnected,
            hasMetamask,
            sign,
            pubMint,
            disconnectwallet,
            connectwallet,
            reserve,
            pubPrice,
            priPrice,
            nftTransfer,
            setSalesStatus,
            addUsersToWhitelist,
            checkStatus,
            status,
            dep
        }}>
            {children}
        </MintContext.Provider>
    )
};