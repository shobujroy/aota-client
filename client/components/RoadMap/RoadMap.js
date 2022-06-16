import React from 'react';
import Image from 'next/image';
import styles from './RoadMap.module.css';
import { Carousel } from 'react-bootstrap';



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

const RoadMap = () => {
    return (
        <>
        <div className={styles.RoadMapMain}>
                <div  className="bg-secondary">
            <div className="container pt-0 pb-0">
                <div className="row">
                    <div className={`col-md-12 col-sm-12 ${styles.RoadMapBanner}`}>
                    <div className={styles.RoadMapText}>
                        <h1>ROADMAP TO THE MOON</h1>
                    </div>

                    <div className={styles.RoadMapMan}>
                       <Image width={842} height={898} src={"/images/RoadMap1.png"} />
                    </div>


                    <div className={styles.RoadMapShap}>
                    <Image width={433} height={203} src={"/images/Mask group.png"} />
                    </div>




                        </div>


                        
                        
                        </div>
                        </div>


                    </div>

            
        </div>


        <div  className={styles.RoadMapSlider}>
            <div className="container pt-0 pb-0">
                <div className="row">
        <div className={`col-md-12 col-sm-12 ${styles.RoadMapCarousel}`}>

        <Carousel 
        nextLabel={ <Image width={48} height={48} src={"/images/Group 7.png"} />}
        prevLabel={""}       
        
        nextIcon={directionButtons(<Image width={48} height={48} src={"/images/Group 3.png"} />)}
        prevIcon={directionButtons(<Image width={48} height={48} src={"/images/Group 4.png"} />)}>
  <Carousel.Item>
       
        <div className={styles.RoadMapCarouselItam}>
        <div className={styles.CarouselItam}> 

        <h3>Discovery</h3>
      <ul>
        <li>Lanch 7146 Aliens on the ethereuem blockchain</li>
        <li>Whitelist Price 0.07 ETH</li>
        <li>Public Price 0.09 ETH</li>
      
      </ul>

      <Image width={90} height={90} src={"/images/Group 7.png"} />
        </div>

        

        <div className={styles.CarouselItam}>          
        <h3>Discovery</h3>
      <ul>
        <li>Lanch 7146 Aliens on the ethereuem blockchain</li>
        <li>Whitelist Price 0.07 ETH</li>
        <li>Public Price 0.09 ETH</li>
      
      </ul>

      <Image width={90} height={90} src={"/images/Group 6.png"} />
        </div>



        <div className={styles.CarouselItam}>          
        <h3>Discovery</h3>
      <ul>
        <li>Lanch 7146 Aliens on the ethereuem blockchain</li>
        <li>Whitelist Price 0.07 ETH</li>
        <li>Public Price 0.09 ETH</li>
      
      </ul>

      <Image width={90} height={90} src={"/images/Group 6-1.png"} />
        </div>
        </div>


     

    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
       
        <div className={styles.RoadMapCarouselItam}>
        <div className={styles.CarouselItam}> 

        <h3>Discovery</h3>
      <ul>
        <li>Lanch 7146 Aliens on the ethereuem blockchain</li>
        <li>Whitelist Price 0.07 ETH</li>
        <li>Public Price 0.09 ETH</li>
      
      </ul>

      <Image width={90} height={90} src={"/images/Group 7.png"} />
        </div>

        

        <div className={styles.CarouselItam}>          
        <h3>Establish Communication</h3>
      <ul>
        <li>Lanch 7146 Aliens on the ethereuem blockchain</li>
        <li>Whitelist Price 0.07 ETH</li>
        <li>Public Price 0.09 ETH</li>
      
      </ul>

      <Image width={90} height={90} src={"/images/Group 6.png"} />
        </div>



        <div className={styles.CarouselItam}>          
        <h3>Make Contact</h3>
      <ul>
        <li>Lanch 7146 Aliens on the ethereuem blockchain</li>
        <li>Whitelist Price 0.07 ETH</li>
        <li>Public Price 0.09 ETH</li>
      
      </ul>

      <Image width={90} height={90} src={"/images/Group 6-1.png"} />
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

        </>
    );
};

export default RoadMap;