import React from 'react';

import styles from './TheAveBanner.module.css';
import Image from 'next/image';

import Footer from '../../Shared/Footer/Footer';







const TheAveBanner = () => {
    return (
        <div className={styles.AveBanner}>
            <div className="container pb-4 pt-4">
                <div className="row">
                    <div className={`col-md-12  col-sm-12 ${styles.AveBannerText}`}>
                        <h1>Creative Haven-yoga-Meditation-common-space</h1>
                        <p>CREATIVE HAVEN - Y0GA - MEDITATION - COMMON SPACE</p>


                        <div className="row">
                            <div className={`col-md-6 col-sm-12 ${styles.AveBannerImage}`}>

                                <Image width={675} height={534} src={"/images/Frame 174.png"} />

                            </div>

                            <div className={`col-md-6 ${styles.AveBannerPhoto}`}>

                                <div className={`${styles.PhotoOne}`}>
                                    <Image width={470} height={212} src={"/images/Frame 175.png"}   />
                                </div>
                                <div className={styles.PhotoTwo}>
                                    <Image width={470} height={284} src={"/images/Frame 176.png"} />
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
                        <div className={`col-md-6 col-sm-12 ${styles.TheAveImage}`}>

                            <Image width={675} height={535} src={"/images/image 20.png"}  />

                            <div className={styles.AveTextOne}>
                                <h1>Creative Haven</h1>
                            </div>
                        </div>
                        <div className={`col-md-6 col-sm-12 ${styles.TheAvePhoto}`}>

                            <div className={styles.AvePhoto}>
                                <Image  width={472} height={212} src={"/images/image 21.png"}  />

                                <div className={styles.AvePhotoText}>
                                    <h1>Yoga with River</h1>
                                </div>

                            </div>
                            <div className={styles.AveThePhoto}>
                                <Image width={472} height={284} src={"/images/image 22.png"} />


                                <div className={styles.AveThePhotoText}>
                                    <h1>Creators Challenge</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>






            </div>





            <>
                <div style={{marginBottom: "50px"}} className={`container pb-4 pt-4 ${styles.CoWorking}`}>
                    <div className={styles.row}>
                        <div className={`${styles.CoWorkingPart}`}>

                            <div className={styles.BackIcon}>
                            <Image width={65} height={70} src={"/images/“.png"} />
                            </div>

                            <p>We see Co-working Space Differently, we see lush Greenery, we see natural wood, Mood lighting Luxurious, &amp;  working in Harmony</p>

                            <div className={styles.Pasicon}>                            
                            <Image width={65} height={70} src={"/images/”.png"} />
                            </div>

                        </div>


                        <div className={`${styles.CoWorkingImage}`}>

                        <Image  width={400} height={425} src={"/images/Photographer 2@2x.png"} />
                        </div>


                    </div>
                    </div>


            </>


            <Footer />
        </div>
    );
};

export default TheAveBanner;