import React, { useContext, useEffect } from 'react'
import { MintContext } from './../context/MintContext';
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from './../components/Shared/Footer/Footer';

function Collection() {
    const { myNFTs, collection, } = useContext(MintContext);

    useEffect(() => {
        myNFTs();
    }, []);
    return (
        <div className='bg-third'>
            <Navbar BorderBottom={true} wallet={true} />
            <div className="container pt-3 pb-5">
                <div className="row">
                    <h1 className='fw-bold'>Collection</h1>
                    <div className='mt-3 d-flex justify-content-between flex-wrap'>
                        {collection.map((item, index) => {
                            console.log(item);
                        })}
                    </div>
                </div>
            </div>
            <Footer bg={'footer-bg-secondary'} />
        </div>
    )
}

export default Collection