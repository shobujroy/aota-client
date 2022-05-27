import React, { useContext, useEffect } from 'react'
import { MintContext } from './../context/MintContext';
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from './../components/Shared/Footer/Footer';
import NFTcard from './../components/Collection/NFTcard';

function Collection() {
    const { myNFTs, collection, isConnected } = useContext(MintContext);


    useEffect(() => {
        myNFTs();
    }, [isConnected]);
    return (
        <div className='bg-third'>
            <Navbar BorderBottom={true} wallet={true} />
            <div className="container pt-3 pb-5">
                <div className="row">
                    <h1 className='fw-bold'>Collection</h1>
                    <div className='mt-3 d-flex justify-content-between flex-wrap'>
                        {collection.map((item, index) => {
                            return (
                                <NFTcard api={item} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer bg={'footer-bg-secondary'} />
        </div>
    )
}

export default Collection