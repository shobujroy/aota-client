import React, { useState, useEffect } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import AOTA from '../contracts/AOTAUpgraded.json';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Router from "next/router";

export const MintContext = React.createContext();

// const add = "0x4679b2d03C4dF92E2cA6a9d3ed216eAc00572C3B";
const add = "0xbE35C4CcE60B16f25c2De86e35ed5Fc3850Df5D9";
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "29a4aa8775aa42caace0437559c37bb4",
        }
    }
};

export const MintProvider = ({ children }) => {
    const MySwal = withReactContent(Swal)

    const [isConnected, setIsConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [sign, setSign] = useState(undefined);
    const [pubPrice, setPubPrice] = useState(0.09);
    const [priPrice, setPriPrice] = useState(0.07);
    const [trxHash, setTrxHash] = useState('');
    const [collection, setCollection] = useState([]);
    const [status, setStatus] = useState(0);
    const [dep, setDep] = useState(Math.random());
    const [web3Modal, setWeb3Modal] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [chainId, setChainId] = useState("");

    // public mint
    async function pubMint(count) {
        setTrxHash('');
        try {
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            const PUB_PRICE = await Cont.methods.pubPrice().call();
            let total = count * PUB_PRICE
            let price = web3.utils.fromWei(total.toString(), "ether");
            setPubPrice(price);
            await Cont.methods.mint(count).send({ from: sign, value: total }, function (err, txHash) {
                if (err) {
                    console.log(err);
                } else {
                    setTrxHash(txHash);
                    Router.push("/success");
                    // MySwal.fire({
                    //     title: "You have minted successfully!",
                    //     text: `This is your hash of transaction: ${txHash}`,
                    //     icon: "success",
                    // });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    //private mint
    async function priMint(count) {
        setTrxHash('');
        try {
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            const PRI_PRICE = await Cont.methods.priPrice().call();
            let total = count * PRI_PRICE
            let price = web3.utils.fromWei(total.toString(), "ether");
            setPriPrice(price);
            await Cont.methods.mint(count).send({ from: sign, value: total }, function (err, txHash) {
                if (err) {
                    console.log(err);
                } else {
                    setTrxHash(txHash);
                    Router.push("/success");
                    // MySwal.fire({
                    //     title: "You have minted successfully!",
                    //     text: `This is your hash of transaction: ${txHash}`,
                    //     icon: "success",
                    // });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    // reserve mint
    async function reserve() {
        try {
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            await Cont.methods.reserveNFTs().send({ from: sign }, function (err, txHash) {
                if (err) {
                    console.log(err);
                } else {
                    setTrxHash(txHash);
                    // swal
                    MySwal.fire({
                        title: "You have minted successfully!",
                        text: `This is your hash of transaction: ${txHash}`,
                        icon: "success",
                    });
                }
            });
        } catch (error) {
            // swal
            MySwal.fire({
                title: "Something wrong!",
                text: `${error}`,
                icon: "error",
            });
            console.log(error);
        }
    }

    // wallet to wallet transfer
    async function nftTransfer(reciverAdd, tokenId) {
        setTrxHash('');
        try {
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
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
    }

    async function setSalesStatus(status) {
        setTrxHash('');
        try {
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
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
    }

    async function addUsersToWhitelist(addresses) {
        setTrxHash('');
        try {
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            await Cont.methods.addUsersToWhitelist(addresses).send({ from: sign }, function (err, txHash) {
                if (err) {
                    // return this err
                    MySwal.fire({
                        title: "Something wrong!",
                        text: `Try again after sometimes!`,
                        icon: "error",
                    });
                } else {
                    console.log(txHash);
                    MySwal.fire({
                        title: "You have added successfully!",
                        text: `You have added ${addresses.length} users to whitelist.`,
                        icon: "success",
                    });
                    setTrxHash(txHash);
                }
            });
            setDep(Math.random());
        } catch (error) {
            MySwal.fire({
                title: "Something wrong!",
                text: `Try again after sometimes!`,
                icon: "error",
            });
            console.log(error);
        }
    }

    async function checkStatus() {
        setTrxHash('');
        console.log(web3, "asdfasdf")
        try {
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            const data = await Cont.methods.checkStatus().call({ from: sign });
            setStatus(data);
        } catch (error) {
            console.log(error);
        }
    }

    // NFTs for gallery
    async function myNFTs() {
        setTrxHash('');
        try {
            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            const nftURI = await Cont.methods.getMyNFTs().call({ from: sign });
            setCollection(nftURI)
        } catch (error) {
            console.log(error);
        }
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
            priMint,
            reserve,
            pubPrice,
            priPrice,
            nftTransfer,
            setSalesStatus,
            addUsersToWhitelist,
            checkStatus,
            status,
            dep,
            setIsConnected,
            setWeb3Modal,
            setWeb3,
            web3Modal,
            setSign,
            setChainId,
            web3
        }}>
            {children}
        </MintContext.Provider>
    )
};