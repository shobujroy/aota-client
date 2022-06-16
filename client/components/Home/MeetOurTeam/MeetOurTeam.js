import React from 'react';
import Image from 'next/image'
import { Carousel } from "react-bootstrap";

import styles from './MeetOurTeam.module.css';



const directionButtons = (direction) => {
  return (
    <span
      aria-hidden="true"
      className={direction === "Next" ? "button-next" : "button-prev"}
    >
      {direction}
    </span>
  );
};








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
            <div  className={styles.RoadMapSlider}>
            <div className="container pt-0 pb-0">
                <div className="row">
        <div className={`col-md-12 col-sm-12 ${styles.MeetMemberCarousel}`}>

        <Carousel              
        
        nextIcon={directionButtons(<Image width={48} height={48} src={"/images/Group 3.png"} 
        className={styles.nextIcon} />)}
        prevIcon={directionButtons(<Image width={48} height={48} src={"/images/Group 4.png"} />)}>
  <Carousel.Item>
       
        <div className={styles.MeetMemberCarouselItam}>
        <div className={styles.CarouselItam}> 

      <Image width={280} height={400} src={"/images/image 14.png"} />
        <h3>Jacob Jones</h3>
        <p>Illustrator</p>
      

        </div>

        

        <div className={styles.CarouselItam}>          
      <Image width={280} height={400} src={"/images/image 15.png"} />
        <h3>Marvin McKinney</h3>
        <p>Events</p>

        </div>



        <div className={styles.CarouselItam}>          
      <Image width={280} height={400} src={"/images/image 16.png"} />
        <h3>Leslie Alexander</h3>
        <p>Founder/Artist</p>    

        </div>
        </div>


     

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
       
        <div className={styles.MeetMemberCarouselItam}>
        <div className={styles.CarouselItam}> 

      <Image width={280} height={400} src={"/images/image 14.png"} />
        <h3>Jacob Jones</h3>
        <p>Illustrator</p>
      

        </div>

        

        <div className={styles.CarouselItam}>          
      <Image width={280} height={400} src={"/images/image 15.png"} />
        <h3>Marvin McKinney</h3>
        <p>Events</p>

        </div>



        <div className={styles.CarouselItam}>          
      <Image width={280} height={400} src={"/images/image 16.png"} />
        <h3>Leslie Alexander</h3>
        <p>Founder/Artist</p>    

        </div>
        </div>


     

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>

  
</Carousel>

</div>
</div>
</div>
</div>





          </div>
        </div>
      </div>

    </div>
  );
};

export default MeetOurTeam;