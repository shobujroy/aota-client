import React from 'react'
import Navbar from './../components/Shared/Navbar/Navbar';
import Footer from './../components/Shared/Footer/Footer';

function success() {
    return (
        <div className='bg-third'>
            <Navbar BorderBottom={true} wallet={true} />
            <div className="container pt-3 pb-5">
                <div className="row">
                    <div className='w-100 border-black rounded-3 h-500 d-flex flex-column justify-content-center align-items-center'>
                        <span className="fs-1 text-success"><i class="fa-solid fa-circle-check"></i></span>
                        <p className="fs-1">You have successfully minted.</p>
                        <p>Please visit this link for <span style={{ color: "#7A5EA7" }}><i>the NFT</i></span> </p>
                    </div>
                </div>
            </div>
            <Footer bg={'footer-bg-secondary'} />
        </div>
    )
}

export default success