import React from 'react';
import Image from 'next/image'

import styles from './MeetOurTeam.module.css';

import mypic from '../../../public/images/TeamMet/image 18.png';
import facebook from '../../../public/images/icon/TeamMet/facebook.png';
import instagram from '../../../public/images/icon/TeamMet/instagram (1).png';
import linkedin from '../../../public/images/icon/TeamMet/linkedin.png';
import twitter from '../../../public/images/icon/TeamMet/twitter (1).png';











const MeetOurTeam = () => {


  function scrollCategoriesPrev() {
    document.getElementById("categories").scrollBy(-193, -0);
  }
  function scrollCategoriesNext() {
    document.getElementById("categories").scrollBy(193, 0);
  }

  return (
    <div className={styles.MeetOurTeam}>

      <div className="container pt-0 pb-5">
        <div className="row">
          <div className={`col-md-5 mt-0 ${styles.MeetMember}`}>
            <div className={styles.MemberProfil}>
              <div className={styles.MemberCardOne}>
                <div className={styles.MemberCardTwo}>
                  <Image
                    style={{ marginTop: "10px" }}
                    src={"/images/TeamMet/image 18.png"}
                    alt="Picture of the author"
                    width={400}
                    height={405}
                  />


                </div>
              </div>


              <div className={styles.MemberCardText}>
                <h2>Leslie Alexander</h2>
                <h6>Founder/Artist</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec porttitor urna, arcu congue neque enim quis auctor ut. Non, duis malesuada blandit suspendisse posuere aliquam elementum. Hac curabitur mi sit habitant.</p>

                <div className={styles.MemberCardIcons}>
                  <Image

                    src={"/images/icon/TeamMet/facebook.png"}
                    alt="facebook"
                    width={30}
                    height={30}
                  />

                  <Image

                    src={"/images/icon/TeamMet/instagram (1).png"}
                    alt="instagram"
                    width={30}
                    height={30}
                  />


                  <Image

                    src={"/images/icon/TeamMet/linkedin.png"}
                    alt="linkedin"
                    width={30}
                    height={30}
                  />


                  <Image

                    src={"/images/icon/TeamMet/twitter (1).png"}
                    alt="twitter"
                    width={30}
                    height={30}
                  />

                </div>

              </div>
            </div>
          </div>

          <div className={`col-md-7 mt-0 ${styles.MeetMember}`}>
            <h1>Meet Our Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec porttitor urna, arcu congue neque enim quis auctor ut. Non, duis malesuada blandit suspendisse posuere aliquam elementum. Hac curabitur mi sit habitant.</p>






          </div>
        </div>
      </div>

    </div>
  );
};

export default MeetOurTeam;