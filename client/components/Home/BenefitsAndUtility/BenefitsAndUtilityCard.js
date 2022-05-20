import React from 'react'
import Image from 'next/image';

function BenefitsAndUtilityCard({ imgLeft, image, title, p }) {
    return (
        <div className='row mb-3'>
            <div className={imgLeft ? 'col-md-3' : "col-md-9"}>
                {
                    imgLeft
                        ? <div className="text-start">
                            <Image
                                src={image}
                                width={200}
                                height={200}
                                alt={title}
                                className='img-fluid img-fit' />
                        </div>
                        : <div className='d-flex flex-column h-100 justify-content-center'>
                            <h5 className='text-primary mb-2'>{title}</h5>
                            <p>{p}</p>
                        </div>
                }
            </div>
            <div className={!imgLeft ? 'col-md-3' : "col-md-9"}>
                {
                    !imgLeft
                        ? <div className="text-end">
                            <Image
                                src={image}
                                width={200}
                                height={200}
                                alt={title}
                                className='img-fluid img-fit' />
                        </div>
                        : <div className='d-flex flex-column h-100 justify-content-center'>
                            <h5 className='text-primary mb-2'>{title}</h5>
                            <p>{p}</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default BenefitsAndUtilityCard