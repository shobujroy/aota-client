import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./TheAveBanner.module.css";

import Footer from "../../Shared/Footer/Footer";
import TheAveSlider from "../TheAveSlider/TheAveSlider";

const TheAveBanner = () => {
  return (
    <div className={styles.AveBanner}>
      {/* <div className="container pb-4 pt-4">
        <div className="row">
          <div className={`col-md-12  col-sm-12 ${styles.AveBannerText}`}>
            <h3>Creative Haven-yoga-Meditation-common-space</h3>
            <p>CREATIVE HAVEN - Y0GA - MEDITATION - COMMON SPACE</p>

            <div className="row">
              <div
                className={`col-md-12 col-sm-12  col-lg-6 ${styles.AveBannerImage}`}
              >
                <Image width={750} height={700} src={"/images/Frame 174.png"} />
              </div>

              <div className={`col-md-12 col-lg-6 ${styles.AveBannerPhoto}`}>
                <div className={`${styles.PhotoOne}`}></div>
                <div className={styles.PhotoTwo}></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <TheAveSlider/>

      <div className={styles.TheAve}>
        <div className="container pb-4 pt-4">
          {/* <div className="row">
            <div className={`col-md-12 ${styles.TheAveText}`}>
              <h1>The Ave</h1>
              <h4>AOTA keys to unlocking your creativity</h4>

              <p> We see co-working spaces differently.</p>
              <p>
                We see them as a hub to get inspired in. A place where
                imagination will thrive &amp; creativity is the very essence of
              it’s environment.</p>
              <p>We see lush green &amp; natural havens.</p>
              <p>We see a sence of harmony &amp; zen.</p>
              <p>We see ideas flourishing &amp; music playing.</p>
            </div>
          </div> */}

          <div className="row d-flex justify-content-center align-items-center">
            <Link href={"/creativehaven"}>
              <div
                className={`col-md-6 col-lg-6 col-sm-12 h-full ${styles.TheAveImage}`}
              >
                <div className={styles.AveTextOne}>
                  <h1>Creative Haven</h1>
                </div>
              </div>
            </Link>
              <Link href={"/onlineclasses"}>
            <div
              className={`col-md-6 col-lg-6 col-sm-12 h-full ${styles.TheAvePhoto}`}
            >
              
                <div className={styles.AvePhoto}>
                  <div className={styles.AveTextOne}>
                    <h1>Yoga with River</h1>
                  </div>
                </div>
              

              {/* <Link href={"/coching"}>
                <div className={styles.AveThePhoto}>
                  <div className={styles.AveTextOne}>
                    <h1>Creators Challenge</h1>
                  </div>
                </div>
              </Link> */}
              </div>
              </Link>
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
                Work with our creative team, collaborate with a member, get a
                yoga session in, meditate, get inspired, participate in a
                creative challenge to. Kick it on the Ave we're just getting
                started. Join the collective today.
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
