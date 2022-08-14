import Image from "next/image";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./MeetOurTeam.module.css";
import { Team } from "./TeamData";

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
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [insta, setInsta] = useState("");
  
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");


  const [linkedIn, setLinkedIn] = useState("");
  const [website, setWebsite] = useState("");
  const [active, setActive] = useState(null);
  let changeInfo = () => { };
  console.log(image.length);
  function ControlledCarousel() {
    const [number, setNumber] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  }
  const [imgActive, setImgActive] = useState(0);
  return (
    <>
      <div className={styles.MeetOurTeam}>
        <div className="container pt-0 pb-5">
          <div className="row">
            <div className={`col-md-5 mt-0 ${ styles.MeetMember }`}>
              <div className={styles.MemberProfil}>
                <div className={styles.MemberCardOne}>
                  <div className={styles.MemberCardTwo}>
                    <Image
                      src={image.length < 2 ? "/images/Jacob Flores.png" : image}
                      alt="Picture of the author"
                      width={388}
                      height={388}
                      priority
                    />
                  </div>
                </div>

                <div className={styles.MemberCardText}>
                  <h2>{name.length < 2 ? "Jacob Flores" : name}</h2>
                  <h6>{title.length < 2 ? "Founder/Artist" : title}</h6>
                  <p>
                    {description.length < 2 ? "Jacob has an extensive background in digital arts, marketing, sales.  While working as a Solar Energy Consultant for SolarCity he discovered a passion for the environment and the impact businesses have on the planet.  He believes the future of tech is green and DLT's will lead the change.  His passion for growth has inspired many to make a difference." : description}
                  </p>

                  <div className={styles.MemberCardIcons}>


                    {/* <a
                        onMouseOver={() => setActive(1)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href="https://discord.gg/xpsqJdKkZd"
                        target="_blank"
                      >
                        {active === 1 ? (
                          <Image
                            src="/images/navbar/Discord.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/icons/Discord.svg"
                            width={24}
                            height={24}
                          />
                        )}
                    </a> */}

                    {/* {
                      !insta === true ? <a
                        onMouseOver={() => setActive(0)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href="#"
                        target="_blank"
                      >
                        {active === 0 ? (
                          <Image
                            src="/images/navbar/instagram.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/icons/instagram.svg"
                            width={24}
                            height={24}
                          />
                        )}
                      </a> :

                        <a
                          onMouseOver={() => setActive(1)}
                          onMouseOut={() => setActive(null)}
                          // className={"nav-link " + Styles.socialIcon}
                          aria-current="page"
                          href="https://discord.gg/xpsqJdKkZd"
                          target="_blank"
                        >
                          {active === 1 ? (
                            <Image
                              src="/images/navbar/Discord.svg"
                              width={24}
                              height={24}
                            />
                          ) : (
                            <Image
                              src="/images/icons/Discord.svg"
                              width={24}
                              height={24}
                            />
                          )}
                        </a>
                    } */}

                      {insta?.length > 2 && <a
                        onMouseOver={() => setActive(0)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href={insta}
                        target="_blank"
                      >
                        {active === 0 ? (
                          <Image
                            src="/images/navbar/insta Yellow.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/navbar/insta gray.svg"
                            width={24}
                            height={24}
                          />
                        )}

                    </a> 
                   }
                      {discord?.length > 2 && <a
                        onMouseOver={() => setActive(0)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href={insta}
                        target="_blank"
                      >
                        {active === 0 ? (
                          <Image
                            src="/images/navbar/Discord.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/navbar/Discord 2.svg"
                            width={24}
                            height={24}
                          />
                        )}

                    </a> 
                   }
                    
                     
                    {/* {twitter === true ?  <a
                        onMouseOver={() => setActive(2)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href="http://twitter.com/AOTAnft/"
                        target="_blank"
                      >
                        {active === 2 ? (
                          <Image
                            src="/images/navbar/twitter.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/icons/twitter.svg"
                            width={24}
                            height={24}
                          />
                        )}
                    </a>:  <a
                        onMouseOver={() => setActive(2)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href={twitter}
                        target="_blank"
                      >
                        {active === 2 ? (
                          <Image
                            src="/images/navbar/twitter.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/icons/twitter.svg"
                            width={24}
                            height={24}
                          />
                        )}
                    </a> } */}

                    {/* {linkedIn === true ? <a
                        onMouseOver={() => setActive(3)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href="#"
                        target="_blank"
                      >
                        {active === 3 ? (
                          <Image
                            src="/images/navbar/linkedin.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/icons/linkedin (3).svg"
                            width={24}
                            height={24}
                          />
                        )}
                    </a>:  <a
                        onMouseOver={() => setActive(3)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href={linkedIn}
                        target="_blank"
                      >
                        {active === 3 ? (
                          <Image
                            src="/images/navbar/linkedin.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/icons/linkedin (3).svg"
                            width={24}
                            height={24}
                          />
                        )}
                    </a> } */}
                  


                    {twitter?.length > 2 && <a
                      onMouseOver={() => setActive(2)}
                      onMouseOut={() => setActive(null)}
                      // className={"nav-link " + Styles.socialIcon}
                      aria-current="page"
                      href={twitter}
                      target="_blank"
                    >
                      {active === 2 ? (
                        <Image
                          src="/images/navbar/twitter.svg"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/images/icons/twitter.svg"
                          width={24}
                          height={24}
                        />
                      )}
                    </a>}

                    {linkedIn?.length > 2 && <a
                      onMouseOver={() => setActive(3)}
                      onMouseOut={() => setActive(null)}
                      // className={"nav-link " + Styles.socialIcon}
                      aria-current="page"
                      href={linkedIn}
                      target="_blank"
                    >
                      {active === 3 ? (
                        <Image
                          src="/images/navbar/linkedin.svg"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/images/icons/linkedin (3).svg"
                          width={24}
                          height={24}
                        />
                      )}
                    </a>}

                    {website?.length > 2 && <a
                      onMouseOver={() => setActive(3)}
                      onMouseOut={() => setActive(null)}
                      // className={"nav-link " + Styles.socialIcon}
                      aria-current="page"
                      href={website}
                      target="_blank"
                    >
                      {active === 3 ? (
                        <Image
                          src="/images/icons/Website-3.svg"
                          width={24}
                          height={24}
                        />
                      ) : (
                       <Image
                          src="/images/icons/Website (1).svg"
                          width={24}
                          height={24}
                        />
                      )}
                    </a>}


                    {/* <Image
                      src={"/images/instagram-seeklogo.com.svg"}
                      alt="instagram"
                      width={30}
                      height={30}
                    />
                    <Image
                      src={"/images/iconmonstr-twitter-1.svg"}
                      alt="twitter"
                      width={30}
                      height={30}
                    />
                    <Image
                      src={"/images/iconmonstr-linkedin-3.svg"}
                      alt="linkedin"
                      width={30}
                      height={30}
                    /> */}
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-md-6 mt-0 ${ styles.MeetMemberRight }`}>
              <h1>Team</h1>
              {/* <p className={styles.meetMemberPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                porttitor urna, arcu congue neque enim quis auctor ut. Non, duis
                malesuada blandit suspendisse posuere aliquam elementum. Hac
                curabitur mi sit habitant.
              </p> */}
              <div
                className={styles.RoadMapSlider}
                prevLabel={directionButtons()}
              >
                <div className={styles.meetOurTeamSliderButtonArea}></div>
                <div className={styles.carouselAra}>
                  <Carousel
                    wrap={false}
                    interval={null}
                    indicators={false}
                    prevIcon={
                      <div className={styles.rightArrow}>
                        <Image
                          src={"/images/Group 3.png"}
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      </div>
                    }
                    nextIcon={
                      <div className={styles.leftArrow}>
                        <Image
                          src={"/images/Group 3.png"}
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      </div>
                    }
                  >
                    <Carousel.Item>
                      <div className={styles.carousleItemElement}>
                        {Team.slice(0, 6).map((item, i) => {
                          return (
                            <div
                              className={styles.teamMemberContainer}
                              onClick={() => {
                                setName(item.name);
                                setImage(item.image);
                                setTitle(item.title);
                                setDescription(item.about);
                                setInsta(item.insta);
                                setTwitter(item.twitter);
                                setLinkedIn(item.linkedin);
                                setWebsite(item.website);
                                setDiscord(item.discord);
                                setImgActive(i);
                              }}
                            >
                              <div
                                style={
                                  imgActive === i
                                    ? { border: "3px solid #75BA87" }
                                    : { border: "none" }
                                }
                                className={styles.teamImage}
                              >
                                <Image
                                  src={item.image}
                                  layout="fill"
                                  objectFit="cover"
                                ></Image>
                              </div>
                              <h3>{item.name}</h3>
                              <h4>{item.title}</h4>

                            </div>
                          );
                        })}
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className={styles.carousleItemElement}>
                        {Team.slice(6,9).map((item, i) => {
                          return (
                            <div
                              className={styles.teamMemberContainer}
                              onClick={() => {
                                setName(item.name);
                                setImage(item.image);
                                setTitle(item.title);
                                setDescription(item.about);
                                setInsta(item.insta);
                                setTwitter(item.twitter);
                                setLinkedIn(item.linkedin);
                                setWebsite(item.website);
                                setDiscord(item.discord);
                                setImgActive(i);
                              }}
                            >
                              <div
                                style={
                                  imgActive === i
                                    ? { border: "3px solid #75BA87" }
                                    : { border: "none" }
                                }
                                className={styles.teamImage}
                              >
                                <Image
                                  src={item.image}
                                  layout="fill"
                                  objectFit="cover"
                                ></Image>
                              </div>
                              <h3>{item.name}</h3>
                              <h4>{item.title}</h4>
                            </div>
                          );
                        })}
                      </div>
                    </Carousel.Item>
                    {/* 
                    <Carousel.Item className={styles.carousleItemElementExtra} >
                        <div className={styles.carousleItemElement}>
                          {Team.slice(4, 8).map((item, i) => {
                            return (
                              <div
                                className={styles.teamMemberContainer}
                                onClick={() => {
                                  setName(item.name);
                                  setImage(item.image);
                                  setTitle(item.title);
                                  setDescription(item.about);
                                  setImgActive(i);
                                }}
                              >
                                <div
                                  style={
                                    imgActive === i
                                      ? { border: "3px solid #75BA87" }
                                      : { border: "none" }
                                  }
                                  className={styles.teamImage}
                                >
                                  <Image
                                    src={item.image}
                                    layout="fill"
                                    objectFit="cover"
                                  ></Image>
                                </div>
                                <h3>{item.name}</h3>
                                <h4>{item.title}</h4>
                              </div>
                            );
                          })}
                        </div>
                      
                    </Carousel.Item> */}

                  
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.meetOurTeamTab}>
      <div
                className={styles.meetOurTeamTab}
                prevLabel={directionButtons()}
              >
                <div className={styles.meetOurTeamSliderButtonArea}></div>
                <div className={styles.carouselAra}>
                  <Carousel
                    wrap={false}
                    interval={null}
                    indicators={false}
                    prevIcon={
                      <div className={styles.rightArrow}>
                        <Image
                          src={"/images/Group 3.png"}
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      </div>
                    }
                    nextIcon={
                      <div className={styles.leftArrow}>
                        <Image
                          src={"/images/Group 3.png"}
                          layout="fill"
                          objectFit="cover"
                        ></Image>
                      </div>
                    }
                  >
                    <Carousel.Item>
                      <div className={styles.carousleItemElement}>
                        {Team.slice(0, 4).map((item, i) => {
                          return (
                            <div
                              className={styles.teamMemberContainer}
                              onClick={() => {
                                setName(item.name);
                                setImage(item.image);
                                setTitle(item.title);
                                setDescription(item.about);
                                setImgActive(i);
                              }}
                            >
                              <div
                                style={
                                  imgActive === i
                                    ? { border: "3px solid #75BA87" }
                                    : { border: "none" }
                                }
                                className={styles.teamImage}
                              >
                                <Image
                                  src={item.image}
                                  layout="fill"
                                  objectFit="cover"
                                ></Image>
                              </div>
                              <h3>{item.name}</h3>
                              <h4>{item.title}</h4>

                            </div>
                          );
                        })}
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className={styles.carousleItemElement}>
                        {Team.slice(4, 8).map((item, i) => {
                          return (
                            <div
                              className={styles.teamMemberContainer}
                              onClick={() => {
                                setName(item.name);
                                setImage(item.image);
                                setTitle(item.title);
                                setDescription(item.about);
                                setImgActive(i);
                              }}
                            >
                              <div
                                style={
                                  imgActive === i
                                    ? { border: "3px solid #75BA87" }
                                    : { border: "none" }
                                }
                                className={styles.teamImage}
                              >
                                <Image
                                  src={item.image}
                                  layout="fill"
                                  objectFit="cover"
                                ></Image>
                              </div>
                              <h3>{item.name}</h3>
                              <h4>{item.title}</h4>
                            </div>
                          );
                        })}
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
      </div> */}


      <div className={styles.meetOurTeamMobile}>
        <h1>Team</h1>
        {/* <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          facilis laboriosam magni possimus velit maiores natus nisi cum magnam
          rerum nobis quae voluptates quod laudantium et, quia eius! Minima,
          qui.
        </p> */}
        {/* */}
        <Carousel indicators={false}>
          {Team.map((data) => {
            return (
              <Carousel.Item>
                <div className={styles.cardSlider}>
                  <div className={styles.cardSLiderOne}>
                    <div className={styles.cardSLiderTwo}>
                      <Image
                        src={`${ data.image }`}
                        alt="Picture of the author"
                        width={"320px"}
                        height={"320px"}
                      />
                    </div>
                  </div>
                  <h2>{data.name}</h2>
                  <h5>{data.title}</h5>
                  <p>
                    {data.about}
                  </p>
                  <div className={styles.MemberCardIcons}>
                    {/* <a
                      onMouseOver={() => setActive(1)}
                      onMouseOut={() => setActive(null)}
                      // className={"nav-link " + Styles.socialIcon}
                      aria-current="page"
                      href="https://discord.gg/xpsqJdKkZd"
                      target="_blank"
                    >
                      {active === 1 ? (
                        <Image
                          src="/images/navbar/Discord.svg"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/images/icons/Discord.svg"
                          width={24}
                          height={24}
                        />
                      )}
                    </a> */}

                     {data.insta?.length > 2 && <a
                        onMouseOver={() => setActive(0)}
                        onMouseOut={() => setActive(null)}
                        // className={"nav-link " + Styles.socialIcon}
                        aria-current="page"
                        href={insta}
                        target="_blank"
                      >
                        {active === 0 ? (
                          <Image
                            src="/images/navbar/insta Yellow.svg"
                            width={24}
                            height={24}
                          />
                        ) : (
                          <Image
                            src="/images/navbar/insta gray.svg"
                            width={24}
                            height={24}
                          />
                        )}

                    </a> 
                   }

                   { data.twitter?.length > 2 && <a
                      onMouseOver={() => setActive(2)}
                      onMouseOut={() => setActive(null)}
                      // className={"nav-link " + Styles.socialIcon}
                      aria-current="page"
                      href={twitter}
                      target="_blank"
                    >
                      {active === 2 ? (
                        <Image
                          src="/images/navbar/twitter.svg"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/images/icons/twitter.svg"
                          width={24}
                          height={24}
                        />
                      )}
                    </a>}

                    {data.linkedin?.length > 2 && <a
                      onMouseOver={() => setActive(3)}
                      onMouseOut={() => setActive(null)}
                      // className={"nav-link " + Styles.socialIcon}
                      aria-current="page"
                      href={linkedIn}
                      target="_blank"
                    >
                      {active === 3 ? (
                        <Image
                          src="/images/navbar/linkedin.svg"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/images/icons/linkedin (3).svg"
                          width={24}
                          height={24}
                        />
                      )}
                    </a>}

                     {data.website?.length > 2 && <a
                      onMouseOver={() => setActive(3)}
                      onMouseOut={() => setActive(null)}
                      // className={"nav-link " + Styles.socialIcon}
                      aria-current="page"
                      href={linkedIn}
                      target="_blank"
                    >
                      {active === 3 ? (
                        <Image
                          src="/images/icons/Website-3.svg"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/images/icons/Website (1).svg"
                          width={24}
                          height={24}
                        />
                      )}
                    </a>}
                     {data.discord?.length > 2 && <a
                      onMouseOver={() => setActive(3)}
                      onMouseOut={() => setActive(null)}
                      // className={"nav-link " + Styles.socialIcon}
                      aria-current="page"
                      href={linkedIn}
                      target="_blank"
                    >
                      {active === 3 ? (
                        <Image
                          src="/images/navbar/Discord.svg"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/images/navbar/Discord 2.svg"
                          width={24}
                          height={24}
                        />
                      )}
                    </a>}
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default MeetOurTeam;
