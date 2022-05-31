import axios from 'axios';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function NFTcard({ api, src, title }) {
    const [nft, setNft] = useState(null);

    const getData = async (api) => {
        console.log("working", api)
        const something = api.split('/');
        console.log(`https://ipfs.io/ipfs/${ something[2] }/${ something[3] }`)
        try {
            const { data } = await axios.get(`https://ipfs.io/ipfs/${ something[2] }/${ something[3] }`);
            setNft(data);
            console.log(data, 'data');
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getData(api);
    }, [])
    return (
        <>
            {nft && (
                <div class="card" style={{ width: "18rem", marginTop: "15px" }}>
                    <Image
                        src={`https://ipfs.io/ipfs/${ nft.image.split('/')[2] }/${ nft.image.split('/')[3] }`}
                        width={300}
                        height={300}
                        class="card-img-top img-fit"
                        alt={title}
                        priority
                    />
                    <div class="card-body">
                        <h5 class="card-title">{nft.name}</h5>
                    </div>
                </div>
            )}
        </>
    )
}

export default NFTcard