
import Image from "next/image";
import React from "react";
import styles from "./PerksUtility.module.css";

const PerksUtility = () => {
  return (
    <div className={styles.PerksAndUtility}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className={`col-lg-12 col-sm-12 col-md-12 ${styles.Perks}`}>
            <h1> Perks &#38; Utility</h1>
            <p>
            

When you buy an AOTA. You’re not Simply buying a rare pice of Art. You’re gaining 
membership access to the Aotaverse with the following benefits. Additonally you are 
helping to plant trees, provide water, &amp; enegy to regions all over the world."

            </p>

            <div className={styles.PerksCards}>
              <div className={styles.CardItam}>
                <div className={styles.mobileRespon}>
                  <Image
                    src={"/images/image 34.svg"}
                    width={64}
                    height={64}
                    className={styles.CardImg}
                    
                  />
                  <h3>Ethereum Airdrops</h3>
                </div>

                <p>
                AOTA holders will receive free airdrops (just cover the gas) for as long as they hold. Our team is
actively exploring ways to expand the AOTAverse.
                </p>
              </div>

              <div className={styles.CardItam}>
                <div className={styles.mobileRespon}>
                  <Image
                    src={"/images/image 35.svg"}
                    width={64}
                    height={64}
                    className={styles.CardImg}
                    id={styles.cardImgTwo}
                  />
                  <h3 id={styles.creativeHeaven}>CREATIVE <span>HAVEN</span> </h3>
                </div>
                <p>
                AOTA will grant access to The Creative Haven a creative coworking space built for the creators of the cosmos.
                </p>
              </div>

              <div className={styles.CardItam}>
                <div className={styles.mobileRespon}>
                  <Image
                    src={"/images/image 36.svg"}
                    width={64}
                    height={64}
                    className={styles.CardImg}
                   
                  />
                  <h3>EXCLUSIVE MERCH</h3>
                </div>
                <p>
                Members will have access to merch exclusive to the community.  Various products to show off, designed to 
be the center of attention.  Unique just like you.
                </p>
              </div>

              <div className={styles.CardItam}>
                <div className={styles.mobileRespon}>
                  <Image
                    src={"/images/image 37.svg"}
                    width={64}
                    height={64}
                    className={styles.CardImg}
                  />
                  <h3>COMMERCIAL USAGE</h3>
                </div>
                <p>
                Commericial rights are directly granted to holders.  Your NFT is yours to use for for as long as you own it.  
                </p>
              </div>
            </div>
          </div>

          <div className={`col-lg-12 col-sm-12 col-md-12 ${styles.Utilitys}`}>
            <h1>Non- Profit Donations</h1>
            <div className={styles.UtilityAllText}>
              <div className={styles.UtilityText}>
                <h2>THE GIVE POWER FOUNDATION</h2>
                <p>
                  Waterborne disease is the planet’s leading killer. It’s no
                  surprise when you consider that three out of ten people,
                  worldwide, lack access to a safe, reliable source of water in
                  their home. But, there is a lot that we can do to to help.
                </p>
                <p>
                  In partnership with the GivePower Foundation*, we have the
                  opportunity to make a difference in tens of thousands of
                  lives. GivePower has developed an innovative solar-powered
                  desalination system that is sustainable and highly
                  cost-effective. In fact, a simple $20 investment can give one
                  person access to safe drinking water for at least 20 years
                </p>
              </div>

              <div className={styles.UtilityImage}>
              <div className={styles.UtilityReverse} data-aos="zoom-in">
                <div className={styles.ChildImg} >
                  <Image
                  
                    src={"/images/image 337.png"}
                    width={352}
                    height={194}
                  />
                </div>
                <div className={styles.HomeImg}>
                  <Image
                    src={"/images/image 336.png"}
                    width={338}
                    height={189}
                  />
                </div>
              </div>
              </div>

            </div>
            <div
              style={{ marginTop: "100px" }}
              className={styles.UtilityAllText}
            >
              <div className={styles.UtilityImage} data-aos="zoom-in">
                <div className={styles.ChildImg}>
                  <Image
                    src={"/images/image 339.png"}
                    width={352}
                    height={194}
                  />
                </div>
                <div className={styles.HomeImg}>
                  <Image
                    src={"/images/image 338.png"}
                    width={338}
                    height={189}
                  />
                </div>
              </div>
              <div className={styles.UtilityText}>
                <h2 className={styles.MarginTop}>ONE TREE PLANTED</h2>
                <p>
                  One Tree Planted is a global reforestation charity that plants
                  trees around the world! We want to make it simple for anyone
                  to help the environment by planting trees. Since 2014, One
                  Tree Planted has more than doubled the number of trees planted
                  each year, and is working with partners across 43+ countries
                  in North America, Latin America, Africa, Asia, Europe and the
                  Pacific.
                </p>
                <p>
                  Together with your support, we're on a mission to restore
                  forests, create habitat for biodiversity, and make a positive
                  social impact around the world. Every dollar donated plants
                  one tree.
                </p>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  );
};

export default PerksUtility;
