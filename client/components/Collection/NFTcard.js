import axios from 'axios';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function NFTcard({ api, src, title }) {
    const [nft, setNft] = useState(null);
    const [imgNull, setImgNull] = useState(false);

    const getData = async (api) => {
        console.log("working", api)
        const something = api.split('/');
        console.log(`https://ipfs.io/ipfs/${ something[2] }/${ something[3] }`)
        try {
            const { data } = await axios.get(`https://ipfs.io/ipfs/${ something[2] }/${ something[3] }`);
            const img = data.image.split("/");
            if (img[img.length - 1] === "") {
                setImgNull(true);
            }
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
                <div className="card" style={{ width: "18rem", margin: "5px" }}>
                    {
                        imgNull
                            ? (
                                <Image
                                    src={`/images/Skin_&_Background_.PNG`}
                                    width={300}
                                    height={300}
                                    className="card-img-top img-fit"
                                    alt={title}
                                    priority
                                />
                            )
                            : (
                                <Image
                                    src={`https://ipfs.io/ipfs/${ nft.image.split('/')[2] }/${ nft.image.split('/')[3] }`}
                                    width={300}
                                    height={300}
                                    className="card-img-top img-fit"
                                    alt={title}
                                    priority
                                />
                            )
                    }
                    <div className="card-body">
                        <h5 className="card-title">{nft.name}</h5>
                    </div>
                </div>
            )}
        </>
    )
}

export default NFTcard