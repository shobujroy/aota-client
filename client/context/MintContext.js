import React, { useState, useEffect } from "react";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import swal from 'sweetalert';

export const MintContext = React.createContext();

let web3Modal;

const add = "0x9BD8716cf1905991aeE24da610cb537Ef5866c62";

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
    const [trxHash, setTrxHash] = useState('0x60fab96fec783a370d544209cf4b33b27daa01f5571a16c3761f4bd1c4b1b59e');
    const [collection, setCollection] = useState([]);

    // connect wallet
    async function connectwallet() {
        
        if (typeof window.ethereum !== "undefined") {
            try {
                const provider = await web3Modal.connect();

                const web3 = new Web3(provider);

                setIsConnected(true);

                setSign((await web3.eth.getAccounts())[0]);
            } catch (e) {
                
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
                await Cont.methods.mintPubNFTs(count).send({ from: sign, value: total }, function (err, txHash) {
                    if (err) {
                        
                        
                    } else {
                        
                        setTrxHash(txHash);
                        swal({
                            title: "You have minted successfully!",
                            text: `This is your hash of transaction: ${ txHash }`,
                            icon: "success",
                        });
                    }
                });
            } catch (error) {
                
                
            }
        } else {
            
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
            const web3 = new Web3(provider);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);

            const PRI_PRICE = await Cont.methods.priPrice().call();

            let total = count * PRI_PRICE

            let price = web3.utils.fromWei(total.toString(), "ether");

            try {
                await Cont.methods.mintPriNFTs(count).send({ from: sign, value: total }, function (err, txHash) {
                    if (err) {
                        
                        
                    } else {
                        
                        setTrxHash(txHash);
                    }
                });
            } catch (error) {
                
                
            }
        } else {
            
        }
    }

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
                        
                        
                    } else {
                        // swal
                        swal({
                            title: "You have minted successfully!",
                            text: `This is your hash of transaction: ${ txHash }`,
                            icon: "success",
                        });
                    }
                });
            } catch (error) {
                
                
            }
        } else {
            
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

            const web3 = new Web3(provider);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);

            try {
                await Cont.methods.withdraw().send({ from: sign }, function (err, txHash) {
                    if (err) {
                        
                        
                    } else {
                        
                        
                    }
                });
            } catch (error) {
                
                
            }
        } else {
            
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
                        
                        
                    } else {
                        
                        setTrxHash(txHash);
                    }
                });
            } catch (error) {
                
                
            }
        } else {
            
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

            const web3 = new Web3(provider);

            const Cont = new web3.eth.Contract(AOTA.abi, add, sign);

            try {
                const nftURI = await Cont.methods.getMyNFTs().call({ from: sign });
                
                setCollection(nftURI)
            } catch (error) {
                
            }
        };
    }

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetamask(false);
        }
    }, [hasMetamask]);
    return (
        <MintContext.Provider value={{ myNFTs, collection, trxHash, isConnected, hasMetamask, sign, pubMint, disconnectwallet, connectwallet, reserve, withdraw, pubPrice }}>
            {children}
        </MintContext.Provider>
    )
};