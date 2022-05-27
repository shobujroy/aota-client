import React, { useState, useEffect } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

export const MintContext = React.createContext();

let web3Modal;
const add = "0x77110748a09E7039fB22A2a7f1CAF086e1c25685";
import AOTA from '../contracts/AOTA.json';

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
    const [pubPrice, setPubPrice] = useState(0.07);
    const [trxHash, setTrxHash] = useState('');

    // connect wallet
    async function connectwallet() {
        console.log(typeof window.ethereum !== "undefined", "worigi")
        if (typeof window.ethereum !== "undefined") {
            try {
                const provider = await web3Modal.connect();
                console.log("provider from connectwallet function in Navbar");
                console.log(provider);

                const web3 = new Web3(provider);
                console.log("web3 from connectwallet function in Navbar");
                console.log(web3);

                setIsConnected(true);
                console.log("isConnected from connectwallet function in Navbar");
                console.log(isConnected);

                setSign((await web3.eth.getAccounts())[0]);
                console.log("sign from connectwallet function in Navbar");
                console.log(sign);
            } catch (e) {
                console.log("error from connectwallet function in Navbar");
                console.log(e);
            }
        } else {
            console.log("coming point 3")
            setIsConnected(false);
            console.log("isConnected from connectwallet function in Navbar");
            console.log(isConnected);
        }
        //var provider = await web3Modal.connect();
        //var web3 = new Web3(provider); 
        //setSign((await web3.eth.getAccounts())[0]);
        //setIsConnected(true);
    }

    // disconnect wallet
    async function disconnectwallet() {
        await web3Modal.clearCachedProvider();
        setSign(undefined);
        //setSign(undefined);
        console.log("sign from disconnectwallet function in Navbar");
        console.log(sign);

        setIsConnected(false);
        console.log("isConnected from disconnectwallet function in Navbar");
        console.log(isConnected);
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
            console.log("provider from connect function in product card");
            console.log(provider);

            const web3 = new Web3(provider);
            console.log("web3 from connect function in product card");
            console.log(web3);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            console.log("contruct intance from pubMint function in product card");
            console.log(Cont);

            const PUB_PRICE = await Cont.methods.pubPrice().call();
            console.log("reading pub_price from pubMint function in product card");
            console.log(PUB_PRICE);

            let total = count * PUB_PRICE
            console.log("total");
            console.log(total);

            let price = web3.utils.fromWei(total.toString(), "ether");
            console.log("calculated price in ether from pubMint function of product card");
            console.log(price);

            setPubPrice(price);
            console.log("pubPrice from pubMint function in product card");
            console.log(pubPrice);

            try {
                await Cont.methods.mintPubNFTs(count).send({ from: sign, value: total }, function (err, txHash) {
                    if (err) {
                        console.log("error from results of send transaction of pubMint function in product card");
                        console.log(err);
                    } else {
                        console.log("txHash from pubMint function in product card");
                        setTrxHash(txHash);
                    }
                });
            } catch (error) {
                console.log("error from mint transaction of pubMint function in product card");
                console.log(error);
            }
        } else {
            console.log("Please have the right amount of money");
        }
    }

    // private mint
    async function priMint(count) {
        setTrxHash('');
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            console.log("provider from connect function in product card");
            console.log(provider);

            const web3 = new Web3(provider);
            console.log("web3 from connect function in product card");
            console.log(web3);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            console.log("contruct intance from pubMint function in product card");
            console.log(Cont);

            const PRI_PRICE = await Cont.methods.priPrice().call();
            console.log("reading pub_price from pubMint function in product card");
            console.log(PRI_PRICE);

            let total = count * PRI_PRICE
            console.log("total");
            console.log(total);

            let price = web3.utils.fromWei(total.toString(), "ether");
            console.log("calculated price in ether from pubMint function of product card");
            console.log(price);

            //setPubPrice(price);
            //console.log("pubPrice from pubMint function in product card");
            //console.log(pubPrice);

            try {
                await Cont.methods.mintPriNFTs(count).send({ from: sign, value: total }, function (err, txHash) {
                    if (err) {
                        console.log("error from results of send transaction of pubMint function in product card");
                        console.log(err);
                    } else {
                        console.log("txHash from pubMint function in product card");
                        setTrxHash(txHash);
                    }
                });
            } catch (error) {
                console.log("error from mint transaction of pubMint function in product card");
                console.log(error);
            }
        } else {
            console.log("Please have the right amount of money");
        }
    }

    // reserve mint
    async function reserve() {
        if (typeof window.ethereum !== "undefined") {
            const provider = await web3Modal.connect();
            console.log("provider from connect function in product card");
            console.log(provider);

            const web3 = new Web3(provider);
            console.log("web3 from connect function in product card");
            console.log(web3);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            console.log("contruct intance from pubMint function in product card");
            console.log(Cont);

            try {
                await Cont.methods.reserveNFTs().send({ from: sign }, function (err, txHash) {
                    if (err) {
                        console.log("error from results of send transaction of pubMint function in product card");
                        console.log(err);
                    } else {
                        console.log("txHash from pubMint function in product card");
                        console.log(txHash);
                    }
                });
            } catch (error) {
                console.log("error from mint transaction of pubMint function in product card");
                console.log(error);
            }
        } else {
            console.log("Please have the right amount of money");
        }
    }

    // withdraw
    async function withdraw() {
        if (typeof window.ethereum !== "undefined") {
            web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions,
            });
            const provider = await web3Modal.connect();
            console.log("provider from connect function in product card");
            console.log(provider);

            const web3 = new Web3(provider);
            console.log("web3 from connect function in product card");
            console.log(web3);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            console.log("contruct intance from pubMint function in product card");
            console.log(Cont);

            try {
                await Cont.methods.withdraw().send({ from: sign }, function (err, txHash) {
                    if (err) {
                        console.log("error from results of send transaction of pubMint function in product card");
                        console.log(err);
                    } else {
                        console.log("txHash from pubMint function in product card");
                        console.log(txHash);
                    }
                });
            } catch (error) {
                console.log("error from mint transaction of pubMint function in product card");
                console.log(error);
            }
        } else {
            console.log("Please have the right amount of money");
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
            console.log("provider from connect function in product card");
            console.log(provider);

            const web3 = new Web3(provider);
            console.log("web3 from connect function in product card");
            console.log(web3);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            console.log("contruct intance from pubMint function in product card");
            console.log(Cont);

            try {
                await Cont.methods.safeTransfer(reciverAdd, tokenId).send({ from: sign }, function (err, txHash) {
                    if (err) {
                        console.log("error from results of send transaction of pubMint function in product card");
                        console.log(err);
                    } else {
                        console.log("txHash from pubMint function in product card");
                        setTrxHash(txHash);
                    }
                });
            } catch (error) {
                console.log("error from mint transaction of pubMint function in product card");
                console.log(error);
            }
        } else {
            console.log("Please have the right amount of money");
        }
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
            console.log("provider from connect function in product card");
            console.log(provider);

            const web3 = new Web3(provider);
            console.log("web3 from connect function in product card");
            console.log(web3);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);
            console.log("contruct intance from pubMint function in product card");
            console.log(Cont);

            let nftIds = await Cont.methods.getMyNFTs().call();
            
            return nftIds;
    }

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(false);
            console.log("hasMetamask from useEffect of index.js of public-sale page");
        }
    }, [hasMetamask]);
    return (
        <MintContext.Provider value={{ trxHash, isConnected, hasMetamask, sign, pubMint, disconnectwallet, connectwallet, reserve, withdraw, pubPrice }}>
            {children}
        </MintContext.Provider>
    )
};