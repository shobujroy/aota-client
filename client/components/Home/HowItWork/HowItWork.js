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

                    <div class="row">
                        <div class="col">
                            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                        <div class="inner-circle">
                                            <Image
                                                src={'/images/icons/Wallet.svg'}
                                                width={40}
                                                height={40}
                                                className='img-fit'
                                            />
                                        </div>
                                        <p class="h6 mt-3 mb-1">2003</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                        <div class="inner-circle">
                                            <Image
                                                src={'/images/icons/Wallet.svg'}
                                                width={40}
                                                height={40}
                                                className='img-fit'
                                            />
                                        </div>
                                        <p class="h6 mt-3 mb-1">2004</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">Launched Trello</p>
                                    </div>
                                </div>
                                <div class="timeline-step">
                                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                        <div class="inner-circle">
                                            <Image
                                                src={'/images/icons/Wallet.svg'}
                                                width={40}
                                                height={40}
                                                className='img-fit'
                                            />
                                        </div>
                                        <p class="h6 mt-3 mb-1">2005</p>
                                        <p class="h6 text-muted mb-0 mb-lg-0">Launched Messanger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* timeline of how it work end */}
                </div>
            </div>
        </div>
    )
}

export default HowItWork