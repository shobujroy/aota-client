import React from "react";
import styles from "./CreativeHaven.module.css";
import Link from "next/link";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const CreativeHaven = () => {
  return (
    <>
      <div className={styles.CreativeHaven}>
        <div className="container pb-4 pt-4">
          <div className="row">
            <div className={`col-md-6  col-sm-12 ${styles.CreativeHavenText}`}>
              <h2>Creative Haven</h2>
            </div>

            <div className={`col-md-6  col-sm-12 ${styles.CreativeHavenImage}`}>
              <div className={styles.HavenImage}>
                <Image
                  width={624}
                  height={538}
                  src={"/images/CreativeHaven/Skater 2.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.CoWorkingAndMembership}>
        <div className="container pb-4 pt-4">
          <div className="row">
            <div className={`col-md-12  col-sm-12 ${styles.CoWorkingTeam}`}>
              <h1>Co-Working for the creatives</h1>
              <div className={styles.CoWorking}>
                <div className={styles.CoWorkingText}>
                  <h2>Yoga</h2>
                  <p>
                    Each course entails an hour-long live video session with
                    Tina &amp; Rose, in which you’ll have the opportunity to ask
                    questions at the end. You’ll be assigned homework and will
                    be tested to track your progress.
                  </p>
                </div>

                <div className={styles.CoWorkingText}>
                  <h2>The Creators Challenge</h2>
                  <p>
                    Throughout the course, you’ll be paired with another student
                    or a coach to review and hone your work. This will also be
                    an opportunity to grow in your collaboration and feedback
                    skills.
                  </p>
                </div>

                <div className={styles.CoWorkingText}>
                  <h2>Mindful Meditation</h2>
                  <p>
                    After a course is completed, a video session will be
                    scheduled with Tina &amp; Rose to relay your end of course
                    evaluation. They will provide you a retro on your strengths,
                    weaknesses and areas to improve.
                  </p>
                </div>
              </div>
            </div>

            <div className={`col-md-12  col-sm-12 ${styles.Membership}`}>
              <div className={styles.Lifetime}>
                <h3>Lifetime Membership</h3>
                <h4>.35ETH</h4>
                <p>
                  Monthly access to our growing library of online training
                  courses, master classes, special events, and 1-on-1 coaching
                  sessions.
                </p>
              </div>

              <div className={styles.Lifetime}>
                <h3>Annual Membership</h3>
                <h4>.07 ETH</h4>
                <p>
                  Annual access to our growing library of online training
                  courses, master classes, special events, and 1-on-1 coaching
                  sessions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link href={"/onlineclasses"}>
            <div className={styles.YogaBack}>
              <li className={styles.Lifetime}>
                <p>Yoga with River</p>{" "}
                <KeyboardArrowRightIcon className={styles.Icon} />
              </li>
            </div>
          </Link>
      </div>
    </>
  );
};

export default CreativeHaven;
