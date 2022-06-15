import React from 'react';

import styles from './TheAveBanner.module.css';
import Image from 'next/image';

import manifesto from '../../../public/images/Frame 174.png';
import Afrojack from '../../../public/images/Frame 175.png';
import Frame from '../../../public/images/Frame 176.png';



import image1 from '../../../public/images/image 20.png';
import image2 from '../../../public/images/image 21.png';
import image3 from '../../../public/images/image 22.png';




const TheAveBanner = () => {
    return (
        <div className={styles.AveBanner}>
            <div className="container pb-4 pt-4">
                <div className="row">
                    <div className={`col-md-12 ${styles.AveBannerText}`}>
                        <h1>Creative Haven-yoga-Meditation-common-space</h1>
                        <p>CREATIVE HAVEN - Y0GA - MEDITATION - COMMON SPACE</p>


                        <div className="row">
                            <div className={`col-md-6 ${styles.AveBannerImage}`}>

                                <Image src={manifesto} />

                            </div>

                            <div className={`col-md-6 ${styles.AveBannerPhoto}`}>

                                <div className={styles.PhotoOne}>
                                    <Image src={Afrojack} />
                                </div>
                                <div className={styles.PhotoTwo}>
                                    <Image src={Frame} />
                                </div>

                            </div>
                        </div>





                    </div>
                </div>
            </div>



            <div className={styles.TheAve}>
                <div className="container pb-4 pt-4">
                    <div className="row">
                        <div className={`col-md-12 ${styles.TheAveText}`}>
                            <h1>The Ave</h1>
                            <h4>AOTA keys to unlocking your creativity</h4>
                            <p>You’ve been through it, we all have.  But you, no you’re different, you’re here still standing like unaffected despite all chances to give up.  You’ve been working on yourself, staying in your lane.  Building an empire, we see your efforts, we elieve the world needs you.  Shit we need each other.Together we’ll grow. Learn from our Creative Team, collaborate with a member, get a yoga session in, meditate, get inspired, participate in a creative challenge to win real money. Kick it on the Ave, we’re just getting started.  </p>
                        </div>
                    </div>





                    <div className="row">
                        <div className={`col-md-6 ${styles.TheAveImage}`}>

                            <Image height={535} src={image1} />
                            <div className={styles.AveTextOne}>
                                <h1>Creative Haven</h1>
                            </div>
                        </div>
                        <div className={`col-md-6 ${styles.TheAvePhoto}`}>

                            <div className={styles.AvePhoto}>
                                <Image src={image2} />

                                <div className={styles.AvePhotoText}>
                                    <h1>Yoga with River</h1>
                                </div>

                            </div>
                            <div className={styles.AveThePhoto}>
                                <Image src={image3} />


                                <div className={styles.AveThePhotoText}>
                                    <h1>Creators Challenge</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>






            </div>





            <>
                <div className={`container pb-4 pt-4 ${styles.CoWorking}`}>
                    <div className="row">
                        <div className={`col-md-9 ${styles.CoWorkingPart}`}>


                        </div>


                        <div className={`col-md-3 ${styles.CoWorkingPart}`}>


                        </div>


                    </div>
                    </div>


            </>
        </div>
    );
};

export default TheAveBanner;