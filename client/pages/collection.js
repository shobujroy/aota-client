import React from 'react'

function Collection() {
    return (
        <div className='bg-third'>
            <Navbar BorderBottom={true} wallet={true} />
            <div className="container pt-3 pb-5">
                <div className="row">
                    <h1 className='fw-bold'>Collection</h1>
                    <div className='mt-3 d-flex justify-content-between flex-wrap'>
                        
                    </div>
                </div>
            </div>
            <Footer bg={'footer-bg-secondary'} />
        </div>
    )
}

export default Collection