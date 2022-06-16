import Image from 'next/image';
import React from 'react'
import BenefitsAndUtilityCard from './BenefitsAndUtilityCard';

import styles from './BenefitsAndUtility.module.css';

function BenefitsAndUtility() {
    const benefitsAndUtilities = [
        {
            imgLeft: true,
            image: '/images/Servise/image 12.png',
            title: 'POLYGON AIRDROPS',
            p: 'AOTA holders will receive free airdrops for as long as they hold. Our team actively exploring ways to expand the AOTAverse.'
        },
        {
            imgLeft: false,
            image: '/images/roadmap/perspective_matte.png',
            title: 'THE CREATIVE HAVEN',
            p: 'AOTA is your key to our exclusive co-working space, break free from the mundane, and create your best work.  We’re really excited about this.'
        },
        {
            imgLeft: true,
            image: '/images/roadmap/Yoga.png',
            title: 'EXCLUSIVE MERCH',
            p: 'AOTA holders will have access to exclusive merchandise designed by us.  We’re talking apparel, art, accessories,  & more.'
        },
        {
            imgLeft: false,
            image: '/images/roadmap/Quick Story.png',
            title: 'COMMERCIAL USAGE',
            p: 'Ownership and commercial usage rights are given directly to the consumer for as long as they hold onto it. '
        }
    ]
    return (
        <div id='about'>

            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-7 mt-5">
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
                    <div className={`col-md-5  d-flex flex-column justify-content-center ${styles.textCard}`}>
                        <div className={styles.textcenter}>
                            <Image
                                src={'/images/Vector 1.png'}

                                
                                width={362}
                                height={365}
                            />
                        </div>
                        <h1>Aotaverse Perks &amp; Utility</h1>
                        <p>When you buy an AOTA. You’re not Simply buying a rare pice of Art. You’re gaining membership access to the Aotaverse with the following benefits. Additonally you helping you us plant threes, providing water, &amp; Enegy to regions all over the world.</p>
                    </div>
                </div>
            </div>
            <div className="container pt-0 pb-5">
                <div className="row">
                    <div className={`col-md-12 mt-0 ${styles.Donations}`}>
                            <h1>Non- Profit Donations</h1>

                            <div className={styles.DonationsCard}>

                                <h4>THE GIVE POWER FOUNDATION</h4>
                                <p>Waterborne disease is the planet’s leading killer. It’s no surprise when you consider that three out of ten people, worldwide, lack access to a safe, reliable source of water in their home. But, there is a lot that we can do to to help. <br /> <br />
                                In partnership with the GivePower Foundation*, we have the opportunity to make a difference in tens of thousands of lives.  GivePower has developed an innovative solar-powered desalination system that is sustainable and highly cost-effective. In fact, a simple $20 investment can give one person access to safe drinking water for at least 20 years
                                
                                </p>
                            </div>


                            <div className={styles.DonationsCard}>

<h4>ONE TREE PLANTED</h4>
<p>One Tree Planted is a global reforestation charity that plants trees around the world! We want to make it simple for anyone to help the environment by planting trees. Since 2014, One Tree Planted has more than doubled the number of trees planted each year, and is working with partners across 43+ countries in North America, Latin America, Africa, Asia, Europe and the Pacific. <br /> <br />
Together with your support, we're on a mission to restore forests, create habitat for biodiversity, and make a positive social impact around the world. Every dollar donated plants one tree.   

</p>
</div>

                        </div>
                        </div>
                        </div>



        </div>
    )
}

export default BenefitsAndUtility