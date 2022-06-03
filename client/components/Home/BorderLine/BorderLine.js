import Image from 'next/image'
import React from 'react'

function BorderLine() {
    return (
        <div className="bg-main">
            <div className="container-fluid">
                <div className="row">
                    <div className="text-center">
                        <Image
                            src={'/images/line.png'}
                            width={1400}
                            height={30}
                            className={'img-fluid'}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BorderLine