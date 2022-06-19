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
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  }

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  let changeInfo = () => {};
  console.log(image.length);
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
                    src={image.length < 2 ? "/images/Frame 184.png" : image}
                    alt="Picture of the author"
                    width={400}
                    height={405}
                  />
                </div>
              </div>

              <div className={styles.MemberCardText}>
                <h2>{name}</h2>
                <h6>{title}</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                  porttitor urna, arcu congue neque enim quis auctor ut. Non,
                  duis malesuada blandit suspendisse posuere aliquam elementum.
                  Hac curabitur mi sit habitant.
                </p>

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
                  indicators={false}
                  prevIcon={
                    <div className={styles.rightArrow}>
                      <Image
                        src={"/images/Group 4.png"}
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
                            }}
                          >
                            <div className={styles.teamImage}>
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
                            }}
                          >
                            <div className={styles.teamImage}>
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
                            }}
                          >
                            <div className={styles.teamImage}>
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
  );
};

export default MeetOurTeam;
