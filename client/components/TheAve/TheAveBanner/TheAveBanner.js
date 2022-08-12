import Image from "next/image";
import React from "react";
import styles from "./TheAveBanner.module.css";

import Gallery from "../../Home/Gallery/Gallery";
import Footer from "../../Shared/Footer/Footer";

const TheAveBanner = () => {
  return (
    <div className={styles.AveBanner}>

      <>
        <div className="container">
          <div className="row">
            <div className={`col-md-7 col-sm-12 col-lg-7 ${styles.AveHeroText}`}>
              <h3>CREATIVE HAVEN | YOGA | MEDITATION</h3>
              <h1>THE AVE</h1>
              <h2>UNLOCKING YOUR CREATIVITY</h2>

              <p>
              Together we'll grow.  Learn from our Creative Team, collaborate with a member, get a yoga session in, mediate, get inspired, participate in a Creative Challenge. Kick it on Ave.  This is only the beginning, we’re just getting started.
              </p>
             
            </div>


            <div
              className={`col-md-5 col-lg-5 col-sm-12  ${styles.AveHeroImage}`}
            >
              <Image
                data-aos="zoom-in"
                layout="fill"
                objectFit="cover"
                src={"/images/Floating ETH (1).png"}
              />
            </div>
          </div>
        </div>


      </>
      <Gallery/>
      {/* <TheAveSlider /> */}

      <>
        <div
          style={{ marginBottom: "50px" }}
          className={`container ${styles.CreativeHaven}`}
        >
          <div className="row">
            <div
              className={`col-md-5 col-lg-5 col-sm-12 ${styles.CreativeHavenImage}`}
            >
              {/* <Link href={"/creativehaven"} style={{cursor: "pointer"}}> */}
                <Image
                  data-aos="zoom-in"
                layout="fill"
                objectFit="cover"
                  src={"/images/VR Headsets (1).png"}
                  className={ styles.CreativeHavenImg}
                />
                
                {/* </Link> */}
            </div>
            

            <div
              className={`col-md-7 col-sm-12 col-lg-7 ${styles.AveHeroText}`}
              id={styles.CreativeHavenText}
            >
              <h3>CREATORS CHALLENGE | CO-WORKING</h3>
              {/* <Link href={"/creativehaven"} style={{cursor: "pointer"}}> */}
                <h1>CREATIVE HAVEN</h1>
              {/* </Link> */}
              
              <h2>UNLOCKING YOUR CREATIVITY</h2>

              <p>
                We see co-working spaces differently. We see them as a hub to
                get inspired in. A place where imagination will thrive &#38;
                creativity is the very essence of it's environment. We see lush
                green &#38; natural havens. We see a sense of harmony &#38; zen. We
                see ideas flourishing &#38; music playing.
              </p>
            </div>
          </div>
        </div>
      </>

      <>
        <div
          style={{ marginBottom: "50px" }}
          className={`container ${styles.YogaMeditation}`}
        >
          <div className="row">
            <div
              className={`col-md-7 col-sm-12 col-lg-7 ${styles.AveHeroText}`}
              id={styles.YogaMeditationText}
            >
              <h3>YOGA WITH RIVER | MINDFUL MEDITATION</h3>
              {/* <Link href={"/onlineclasses"}> */}
                <h1>YOGA &#38; MEDITATION</h1>
               {/* </Link> */}
              
              <h2>HEALTHY BODY &#38; HEALTHY MIND</h2>
              
              <p>
              Creativity is the expression of one’s self.  A healthy mind, body, &#38; soul allow for creative energy to flow like a River.  Tune into a practice with certified instructors.
              </p>
            </div>
            <div
              className={`col-md-5 col-lg-5 col-sm-12 ${styles.YogaMeditationImage}`}
            >
              {/* <Link href={"/onlineclasses"}> */}
                <Image data-aos="zoom-in" layout="fill" objectFit="cover" src={"/images/Halo (1).png"} className={styles.CreativeHavenImg} />
                {/* </Link> */}
            </div>
          </div>
        </div>
      </>


{/* 
<>
      <div className={styles.TheAve}>
        <div className="container pb-4 pt-4">
          <div className="row">
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
          </div> 

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

            <Link href={"/coching"}>
                <div className={styles.AveThePhoto}>
                  <div className={styles.AveTextOne}>
                    <h1>Creators Challenge</h1>
                  </div>
                </div>
              </Link> 
              </div>
              </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </> */}

      

      <>
        <div
          style={{ marginBottom: "50px" }}
          className={`container ${styles.CoWorking}`}
        >
          <div className={`col-lg-12 col-sm-12- col-md-12 ${styles.row}`}>
            

            <div className={`${styles.CoWorkingImage}`}>
              <Image
                width={400}
                height={425}
                src={"/images/Photographer 2@2x.png"}
              />
            </div>


            <div className={`${styles.CoWorkingPart}`}>
              <div className={styles.BackIcon}>
                <Image  layout="fill" objectFit="cover" src={"/images/“.png"} />
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
          </div>
        </div>
      </>

      <Footer />
    </div>


  );
};

export default TheAveBanner;
