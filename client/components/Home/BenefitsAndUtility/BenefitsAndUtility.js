import Image from "next/image";
import React from "react";
import BenefitsAndUtilityCard from "./BenefitsAndUtilityCard";

import styles from "./BenefitsAndUtility.module.css";

function BenefitsAndUtility() {
  const benefitsAndUtilities = [
    {
      imgLeft: true,
      image: "/images/Service/image 12.png",
      title: "Ethereum Airdrops",
      p: "AOTA holders will receive free airdrops (just cover the gas) for as long as they hold. Our team is actively exploring ways to expand the AOTAverse.",
    },
    {
      imgLeft: false,
      image: "/images/Service/image 12 (1).png",
      title: "CREATIVE HAVEN",
      p: "AOTA will grant access to The Creative Haven a creative coworking space built for the creators of the cosmos",
    },
    {
      imgLeft: true,
      image: "/images/Service/image 12 (2).png",
      title: "EXCLUSIVE MERCH",
      p: "Members will have access to merch exclusive to the community.  Various products to show off, designed to be the center of attention.  Unique just like you.",
    },
    {
      imgLeft: false,
      image: "/images/Service/image 12 (3).png",
      title: "COMMERCIAL USAGE",
      p: "Commercial rights are directly granted to holders.  Your NFT is yours to use for for as long as you own it.  ",
    },
  ];
  return (
    <div id="about">
      <div className={`container pt-0 pb-0`}>
        <div className={`row ${styles.AboutService}`}>
          <div className={`col-md-7 mt-5 ${styles.AboutServiceAll}`}>
            {benefitsAndUtilities?.map((benefit, index) => {
              return (
                <BenefitsAndUtilityCard
                  key={index}
                  imgLeft={benefit.imgLeft}
                  image={benefit.image}
                  title={benefit.title}
                  p={benefit.p}
                />
              );
            })}
          </div>

          <div className={`col-md-5 d-flex flex-column ${styles.textCard}`}>
            <div className={styles.textcenter}>
              <Image src={"/images/Vector 1.png"} width={362} height={365} />
            </div>

            <div className={styles.textMainText}>
              <h1> Perks &amp; Utility</h1>
              <p>
              When you buy an AOTA. You’re not simply buying a rare pice of Art. You’re gaining membership access to the AOTAverse with the following benefits. Additonally you are planting trees, providing clean water &amp; energy to regions all over the world.
              </p>
            </div>
          </div>

          <div className={`col-sm-12  d-flex flex-column ${styles.Smallcard}`}>
            <div className={styles.textMainText}>
              <h1>Aotaverse Perks &amp; Utility</h1>
              <p>
                When you buy an AOTA. You’re not Simply buying a rare pice of
                Art. You’re gaining membership access to the Aotaverse with the
                following benefits. Additonally you helping you us plant threes,
                providing water, &amp; Enegy to regions all over the world.
              </p>
            </div>

            <div className={styles.textSmall}>
              <Image
                src={"/images/Vector 1 (1).png"}
                width={139}
                height={231}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-0 pb-5">
        <div className="row">
          <div className={`col-md-12 mt-0 ${styles.Donations}`}>
            <h1>Non- Profit Donations</h1>

            <div className={styles.DonationsCard}>
              <h4>THE GIVE POWER FOUNDATION</h4>
              <p>
                Waterborne disease is the planet’s leading killer. It’s no
                surprise when you consider that three out of ten people,
                worldwide, lack access to a safe, reliable source of water in
                their home. But, there is a lot that we can do to to help.{" "}
                <br /> <br />
                In partnership with the GivePower Foundation*, we have the
                opportunity to make a difference in tens of thousands of lives.
                GivePower has developed an innovative solar-powered desalination
                system that is sustainable and highly cost-effective. In fact, a
                simple $20 investment can give one person access to safe
                drinking water for at least 20 years
              </p>
            </div>

            <div className={styles.DonationsCard}>
              <h4>ONE TREE PLANTED</h4>
              <p>
                One Tree Planted is a global reforestation charity that plants
                trees around the world! We want to make it simple for anyone to
                help the environment by planting trees. Since 2014, One Tree
                Planted has more than doubled the number of trees planted each
                year, and is working with partners across 43+ countries in North
                America, Latin America, Africa, Asia, Europe and the Pacific.{" "}
                <br /> <br />
                Together with your support, we're on a mission to restore
                forests, create habitat for biodiversity, and make a positive
                social impact around the world. Every dollar donated plants one
                tree.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsAndUtility;
