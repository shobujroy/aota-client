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
        <div className="bg-secondary">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className={styles.headingWrapper}>
                        <h1 className='text-secondary mb-3'>AOTA BENEFITS & UTILITY</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor eu mauris consectetur maecenas commodo tincidunt. Accumsan diam neque tempus nisi morbi velit at. Interdum ni
                        </p>
                    </div>
                </div>
                <div className="mt-5">
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
            </div>
        </div>
    )
}

export default BenefitsAndUtility