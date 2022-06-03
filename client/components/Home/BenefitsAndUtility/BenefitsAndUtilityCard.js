import React from 'react'
import Image from 'next/image';

function BenefitsAndUtilityCard({ imgLeft, image, title, p }) {
    return (
        <div className='row mb-3'>
            <div className={imgLeft ? 'col-md-3' : "col-md-9"}>
                {
                    imgLeft
                        ? <div className="text-center">
                            <h5 className='text-center fn-futura fn-normal text-uppercase mb-2'>{title}</h5>
                            <Image
                                src={image}
                                width={200}
                                height={200}
                                alt={title}
                                className='img-fluid img-fit' />
                        </div>
                        : <div className='d-flex flex-column h-100 justify-content-center'>
                            <p className='fn-futura'>{p}</p>
                        </div>
                }
            </div>
            <div className={!imgLeft ? 'col-md-3' : "col-md-9"}>
                {
                    !imgLeft
                        ? <div className="text-center">
                            <h5 className='text-center fn-normal fn-futura text-uppercase mb-2'>{title}</h5>
                            <Image
                                src={image}
                                width={200}
                                height={200}
                                alt={title}
                                className='img-fluid img-fit' />
                        </div>
                        : <div className='d-flex flex-column h-100 justify-content-center'>
                            <p className='fn-futura'>{p}</p>
                        </div>
                }
            </div>
        </div>
    )
}



export default BenefitsAndUtilityCard