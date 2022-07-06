import React, { useState } from "react";
import Image from "next/image";
import { Button, Carousel } from "react-bootstrap";
import { Team } from "./TeamData";
import styles from "./MeetOurTeam.module.css";

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

  let changeInfo = () => {};
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
            <div className={`col-md-5 mt-0 ${styles.MeetMember}`}>
              <div className={styles.MemberProfil}>
                <div className={styles.MemberCardOne}>
                  <div className={styles.MemberCardTwo}>
                    <Image
                      src={image.length < 2 ? "/images/Frame 184.png" : image}
                      alt="Picture of the author"
                      width={388}
                      height={388}
                    />
                  </div>
                </div>

                <div className={styles.MemberCardText}>
                  <h2>{name}</h2>
                  <h6>{title}</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                    porttitor urna, arcu congue neque enim quis auctor ut. Non,
                    duis malesuada blandit suspendisse posuere aliquam
                    elementum. Hac curabitur mi sit habitant.
                  </p>

                  <div className={styles.MemberCardIcons}>
                    <Image
                      src={"/images/discordmeet.svg"}
                      alt="facebook"
                      width={30}
                      height={30}
                    />

                    <Image
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
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-md-6 mt-0 ${styles.MeetMemberRight}`}>
              <h1>Team</h1>
              <p className={styles.meetMemberPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                porttitor urna, arcu congue neque enim quis auctor ut. Non, duis
                malesuada blandit suspendisse posuere aliquam elementum. Hac
                curabitur mi sit habitant.
              </p>
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
                        {Team.slice(0, 8).map((item, i) => {
                          return (
                            <div
                              className={styles.teamMemberContainer}
                              onClick={() => {
                                setName(item.name);
                                setImage(item.image);
                                setTitle(item.title);
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
                        {Team.slice(0, 8).map((item, i) => {
                          return (
                            <div
                              className={styles.teamMemberContainer}
                              onClick={() => {
                                setName(item.name);
                                setImage(item.image);
                                setTitle(item.title);
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
                        {Team.slice(0, 8).map((item, i) => {
                          return (
                            <div
                              className={styles.teamMemberContainer}
                              onClick={() => {
                                setName(item.name);
                                setImage(item.image);
                                setTitle(item.title);
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
                    {/* <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second slide&bg=282c34"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third slide&bg=20232a"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item> */}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.meetOurTeamMobile}>
        <h1>Meet Our Team</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          facilis laboriosam magni possimus velit maiores natus nisi cum magnam
          rerum nobis quae voluptates quod laudantium et, quia eius! Minima,
          qui.
        </p>
        {/* */}
        <Carousel indicators={false}>
          {Team.map((data) => {
            return (
              <Carousel.Item>
                <div className={styles.cardSlider}>
                  <div className={styles.cardSLiderOne}>
                    <div className={styles.cardSLiderTwo}>
                      <Image
                        src={`${data.image}`}
                        alt="Picture of the author"
                        width={"320px"}
                        height={"320px"}
                      />
                    </div>
                  </div>
                  <h2>{data.name}</h2>
                  <h5>{data.title}</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                    porttitor urna, arcu congue neque enim quis auctor ut. Non,
                    duis malesuada blandit suspendisse posuere aliquam
                    elementum. Hac curabitur mi sit habitant.
                  </p>
                  <div className={styles.MemberCardIcons}>
                    <Image
                      src={"/images/Facebook.svg"}
                      alt="facebook"
                      width={30}
                      height={30}
                    />

                    <Image
                      src={"/images/instagram.svg"}
                      alt="instagram"
                      width={30}
                      height={30}
                    />
                    <Image
                      src={"/images/twitter.svg"}
                      alt="twitter"
                      width={30}
                      height={30}
                    />
                    <Image
                      src={"/images/linkedin.svg"}
                      alt="linkedin"
                      width={30}
                      height={30}
                    />
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
