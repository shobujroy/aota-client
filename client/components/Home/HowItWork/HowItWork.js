import Image from 'next/image'
import React from 'react'
import styles from './HowItWork.module.css'

function HowItWork() {
    return (
        <div className="container pb-4 pt-4">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center'>How It Works</h1>
                    {/* timeline of how it work start */}

                    <div className="text-center mt-3">
                        <Image
                            src={'/images/how-it-work-timeline.png'}
                            width={850}
                            height={150}
                        />
                    </div>

                    {/* timeline of how it work end */}
                </div>
            </div>
        </div>
    )
}

export default HowItWork