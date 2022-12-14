import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MintContext } from './../../context/MintContext';
import { useContext } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



function NFTcard({ api, src, title, setDep }) {
    const MySwal = withReactContent(Swal)
    const { nftTransfer, web3 } =
        useContext(MintContext);
    const [nft, setNft] = useState(null);
    const [imgNull, setImgNull] = useState(false);
    const [address, setAddress] = useState('');

    const getData = async (api) => {
        const something = api.split('/');
        console.log("working", something)
        console.log(`https://ipfs.io/ipfs/${something[2]}/${something[3]}`)
        try {
            const { data } = await axios.get(`https://ipfs.io/ipfs/${something[2]}/${something[3]}`);
            setNft(data);
            console.log(data, 'data');
        } catch (e) {
            console.log(e);
        }
    }

    const handleTransferNFT = async () => {
        if (address === "") {
            MySwal.fire("Oops!", "Please enter your address", "error");
        } else {
            const something = api.split('/');
            await nftTransfer(address, something[3].split('.')[0]);
            MySwal.fire("Success", "NFT transferred successfully", "success");
            setDep(Math.random());
        }
    }

    useEffect(() => {
        getData(api);
    }, [web3])
    return (
        <>
            {nft && (
                <div className="card card-container" style={{ width: "18rem", margin: "5px" }}>
                    <Image
                        src={`https://ipfs.io/ipfs/${nft.image.split('/')[2]}/${nft.image.split('/')[3]}`}
                        width={300}
                        height={300}
                        className="card-img-top img-fit"
                        alt={title}
                        priority
                    />
                    <div className="card-body">
                        <h5 className="card-title title-nft-name">{nft.name}</h5>
                    </div>
                    <div class="input-group mb-3">
                        <input
                            onChange={(e) => setAddress(e.target.value)}
                            type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button
                                onClick={() => handleTransferNFT()}
                                class="btn btn-outline-secondary" type="button">Send</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default NFTcard