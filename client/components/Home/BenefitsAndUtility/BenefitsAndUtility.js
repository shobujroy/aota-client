import Image from 'next/image';
import React from 'react'
import styles from './BenefitsAndUtility.module.css';
import BenefitsAndUtilityCard from './BenefitsAndUtilityCard';

function BenefitsAndUtility() {
    const benefitsAndUtilities = [
        {
            imgLeft: true,
            image: '/images/roadmap/Box_perspective_matte.png',
            title: 'Polygon Airdrops',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            imgLeft: false,
            image: '/images/roadmap/perspective_matte.png',
            title: 'Creative Story Dao',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            imgLeft: true,
            image: '/images/roadmap/Yoga.png',
            title: 'Weekly Yoga',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            imgLeft: false,
            image: '/images/roadmap/Quick Story.png',
            title: 'Quick Story',
            p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ]
    return (
        <div id='about'>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-8 mt-5">
                        {
                            benefitsAndUtilities?.map((benefit, index) => {
                                return (
                                    <BenefitsAndUtilityCard
                                        key={index}
                                        imgLeft={benefit.imgLeft}
                                        image={benefit.image}
                                        title={benefit.title}
                                        p={benefit.p} />
                                )
                            })
                        }
                    </div>
                    <div className="col-md-4  d-flex flex-column justify-content-center">
                        <div className="text-center">
                            <Image
                                src={'/images/Vector 1.png'}
                                width={500}
                                height={500}
                            />
                        </div>
                        <h1>Aotaverse Perks & Utility</h1>
                        <p>When you buy an AOTA. You’re not Simply buying a rare pice of Art. You’re gaining membership access to the Aotaverse with the following benefits. Additonally you helping you us plant threes, providing water, & Enegy to regions all over the world.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsAndUtility