import React from 'react'
import Navbar from '../../components/Shared/Navbar/Navbar';
import Footer from '../../components/Shared/Footer/Footer';
import ProductCard from '../../components/PublicSale/ProductCard/ProductCard';
import { useState, useEffect } from "react";

function Index() {
    const [isConnected, setIsConnected] = useState(false);
    const [hasMetamask, setHasMetamask] = useState(false);
    const [sign, setSign] = useState(undefined);

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
          setHasMetamask(true);
          console.log("hasMetamask from useEffect of index.js of public-sale page");
        }
      }, [hasMetamask]);

    return (
        <div className='bg-third'>
            <Navbar BorderBottom={true} wallet={true} isConnected={isConnected} setIsConnected={setIsConnected} 
                hasMetamask={hasMetamask} setHasMetamask={setHasMetamask} sign={sign} setSign={setSign}/>
            <div className="container pt-3 pb-5">
                <div className="row">
                    <h6 className='d-flex flex-row align-items-center'>
                        <i class="fa-solid fa-arrow-left-long me-2"></i>
                        Back
                    </h6>
                    <div className='mt-3 d-flex justify-content-center'>
                        <ProductCard isConnected={isConnected} setIsConnected={setIsConnected} 
                hasMetamask={hasMetamask} setHasMetamask={setHasMetamask} sign={sign} setSign={setSign}/>
                    </div>
                </div>
            </div>
            <Footer bg={'footer-bg-secondary'} />
        </div>
    )
}

export default Index