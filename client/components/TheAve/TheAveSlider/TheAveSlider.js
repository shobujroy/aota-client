import React from 'react';
// import { Image } from "react-bootstrap";
import Image from "next/image";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./TheAveSlider.module.css";


// SwiperCore.use([Keyboard, Autoplay]);

const TheAveSlider = () => {
    return (
        <div>
<div>
                <Swiper
                     className={styles.FirstSlider}
                // spaceBetween={}
                modules={[Autoplay]}
                slidesPerView={9}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                // autoplay={true}
                    autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    },
                }}>
                <SwiperSlide>
                        <Image width={200} height={220} src={"/images/aveslider/1005.png"}/>
                </SwiperSlide>
                 <SwiperSlide>
                        <Image width={200} height={220} src={"/images/aveslider/1090.png"}/>
                </SwiperSlide>
               <SwiperSlide>

                        <Image  width={200} height={220} src={"/images/aveslider/1118.png"}/>
                </SwiperSlide>
                <SwiperSlide>

                        <Image  width={200} height={220} src={"/images/aveslider/1158.png"}/>
   
                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/1171.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/4007.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/4014.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/4032.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/4035.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/4036.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/4080.png"}/>

                    </SwiperSlide> 
                    <SwiperSlide></SwiperSlide>
            </Swiper>
            </div>
            <div className={styles.SecondSliderContainer}>
                <Swiper
                    className={styles.SecondSlider}
                spaceBetween={0}
                modules={[Autoplay]}
                slidesPerView={9}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                autoplay={true}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    },
                    }}>
              
                <SwiperSlide>
                        <Image width={200} height={220} src={"/images/aveslider/4083.png"}/>
                </SwiperSlide>
                 <SwiperSlide>
                        <Image width={200} height={220} src={"/images/aveslider/4138.png"}/>
                </SwiperSlide>
               <SwiperSlide>

                        <Image  width={200} height={220} src={"/images/aveslider/5267.png"}/>
                </SwiperSlide>
                <SwiperSlide>

                        <Image  width={200} height={220} src={"/images/aveslider/5293.png"}/>
   
                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/5396.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/6522.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/6759.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/6816.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/6833.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/6837.png"}/>

                </SwiperSlide>
                <SwiperSlide>

                        <Image width={200} height={220} src={"/images/aveslider/6909.png"}/>

                    </SwiperSlide> 
                  
            </Swiper>
            </div>
        </div>
    );
};

export default TheAveSlider;