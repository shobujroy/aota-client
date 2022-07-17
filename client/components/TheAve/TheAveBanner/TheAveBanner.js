import React from "react";
import Link from "next/link";
import styles from "./TheAveBanner.module.css";
import Image from "next/image";

import Footer from "../../Shared/Footer/Footer";

const TheAveBanner = () => {
  return (
    <div className={styles.AveBanner}>
      <div className="container pb-4 pt-4">
        <div className="row">
          <div className={`col-md-12  col-sm-12 ${styles.AveBannerText}`}>
            <h1>Creative Haven-yoga-Meditation-common-space</h1>
            <p>CREATIVE HAVEN - Y0GA - MEDITATION - COMMON SPACE</p>

            <div className="row">
              <div className={`col-md-12 col-sm-12  col-lg-6 ${styles.AveBannerImage}`}>
                <Image width={750} height={700} src={"/images/Frame 174.png"} />
              </div>

              <div className={`col-md-12 col-lg-6 ${styles.AveBannerPhoto}`}>
                <div className={`${styles.PhotoOne}`}>
                
                </div>
                <div className={styles.PhotoTwo}>
                  
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
              <p>
                You’ve been through it, we all have. But you, no you’re
                different, you’re here still standing like unaffected despite
                all chances to give up. You’ve been working on yourself, staying
                in your lane. Building an empire, we see your efforts, we elieve
                the world needs you. Shit we need each other.Together we’ll
                grow. Learn from our Creative Team, collaborate with a member,
                get a yoga session in, meditate, get inspired, participate in a
                creative challenge to win real money. Kick it on the Ave, we’re
                just getting started.{" "}
              </p>
            </div>
          </div>

          <div className="row">
          <Link href={"/creativehaven"}>
            <div className={`col-md-6 col-lg-6 col-sm-12 h-full ${styles.TheAveImage}`}>
              <Image width={675} height={540}  src={"/images/creativehaven.png"} className={styles.aveImages}/>

              <div className={styles.AveTextOne}>
                
                  <h1>Creative Haven</h1>
                
              </div>
            </div>
            </Link>
            
            <div className={`col-md-6 col-sm-12 col-lg-6 h-full ${styles.TheAvePhoto}`}>
              
            <Link href={"/onlineclasses"}>
              <div className={styles.AvePhoto}>
              <Image width={350} height={276}  src={"/images/Yoga_River.png"} className={styles.aveImages}/>
                {/* <div className={styles.yoga}>                 
                </div> */}
                <div className={styles.AveTextOne}>
                 
                    <h1>Yoga with River</h1>
                  
                </div>
             
              </div>
              </Link>

              <Link href={"/coching"}>
              <div className={styles.AveThePhoto}>
              <Image width={675} height={276}  src={"/images/Merch.png"} className={styles.aveImages}/>
                {/* <div className={styles.yoga}>                 
                </div> */}
                <div className={styles.AveTextOne}>
                 
                    <h1>Creators Challenge</h1>
                
                </div>                
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <>
        <div
          style={{ marginBottom: "50px" }}
          className={`container ${styles.CoWorking}`}
        >
          <div className={`col-lg-12 col-sm-12- col-md-12 ${styles.row}`}>
            <div className={`${styles.CoWorkingPart}`}>
              <div className={styles.BackIcon}>
                <Image layout="fill" objectFit="cover" src={"/images/“.png"} />
              </div>

              <p>
              Work with our creative team, collaborate with a member, get a yoga session in, meditate, get inspired,
 participate in a creative challenge to.  Kick it on the Ave we're just getting started.  Join the collective today.
              </p>

              <div className={styles.Pasicon}>
                <Image layout="fill" objectFit="cover" src={"/images/”.png"} />
              </div>
            </div>

            <div className={`${styles.CoWorkingImage}`}>
              <Image
                width={400}
                height={425}
                src={"/images/Photographer 2@2x.png"}
              />
            </div>
          </div>
        </div>
      </>

      <Footer />
    </div>
  );
};

export default TheAveBanner;
