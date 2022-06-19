import React from "react";
import styles from "./OnlineClasses.module.css";
import Link from "next/link";
import Image from "next/image";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const OnlineClasses = () => {
  return (
    <>
      <div className={styles.OnlineClassesBanner}>
        <div className="container pb-4 pt-4">
          <div className="row">
            <div className={`col-md-12  col-sm-12 ${styles.OnlineClassesText}`}>
              <h2>Online Classes</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.CoWorkingAndMembership}>
        <div className="container pb-4 pt-4">
          <div className="row">
            <div className={`col-md-12  col-sm-12 ${styles.CoWorkingTeam}`}>
              <h1>What’s Included</h1>
              <div className={styles.CoWorking}>
                <div className={styles.CoWorkingText}>
                  <h2>High- Quality Video</h2>
                  <p>
                    Each course entails an hour-long live video session with
                    Tina &amp; Rose, in which you’ll have the opportunity to ask
                    questions at the end. You’ll be assigned homework and will
                    be tested to track your progress.
                  </p>
                </div>

                <div className={styles.CoWorkingText}>
                  <h2>Helpful Resource Links</h2>
                  <p>
                    Throughout the course, you’ll be paired with another student
                    or a coach to review and hone your work. This will also be
                    an opportunity to grow in your collaboration and feedback
                    skills.
                  </p>
                </div>

                <div className={styles.CoWorkingText}>
                  <h2>Powerful Tips &amp; Advice</h2>
                  <p>
                    After a course is completed, a video session will be
                    scheduled with Tina &amp; Rose to relay your end of course
                    evaluation. They will provide you a retro on your strengths,
                    weaknesses and areas to improve.
                  </p>
                </div>
              </div>
            </div>

            <div className={`col-md-12  col-sm-12 ${styles.OnlineMembership}`}>
              <h1>Recommended Membership &amp; Class Packs</h1>
              <h4>Explore All Memberships &amp; Class Packs</h4>

              <div className={styles.Membership}>
                <div className={styles.Lifetime}>
                  <h3>Monthly Membership</h3>
                  <h4>$39/mo</h4>
                  <p>
                    Monthly access to our growing library of online training
                    courses, master classes, special events, and 1-on-1 coaching
                    sessions.
                  </p>
                </div>

                <div className={styles.Lifetime}>
                  <h3>Annual Membership </h3>
                  <h4>$429/yr</h4>
                  <p>
                    Annual access to our growing library of online training
                    courses, master classes, special events, and 1-on-1 coaching
                    sessions.
                  </p>
                </div>

                <div className={styles.Lifetime}>
                  <h3>Beginner Class pack</h3>
                  <h4>$55</h4>
                  <p>
                    Annual access to our growing library of online training
                    courses, master classes, special events, and 1-on-1 coaching
                    sessions.
                  </p>
                </div>

                <div className={styles.Lifetime}>
                  <h3>Elite Class Pack</h3>
                  <h4>$95</h4>
                  <p>
                    Annual access to our growing library of online training
                    courses, master classes, special events, and 1-on-1 coaching
                    sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.GoLink}>
          <Link href={"/creativehaven"}>
            <div className={styles.YogaBack}>
              <li className={styles.Lifetime}>
                <KeyboardArrowLeftIcon className={styles.Icon} />{" "}
                <p>Creative Haven</p>
              </li>
            </div>
          </Link>

          <Link href={"coching"}>
            <div className={styles.YogaBack}>
              <li className={styles.Lifetime}>
                <p>Creators Challenge</p>{" "}
                <KeyboardArrowRightIcon className={styles.Icon} />
              </li>
            </div>
          </Link>
        </div>
      </div>

      
    </>
  );
};

export default OnlineClasses;
