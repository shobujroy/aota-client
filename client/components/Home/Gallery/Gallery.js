import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styles from './Gallery.module.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

function Gallery() {
    const router = useRouter()
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        document.getElementById("gallery1").scrollBy(0, 0);
        document.getElementById("gallery2").scrollBy(3000, 0);
        // document.getElementById("gallery3").scrollBy(0, 0);
    }, []);

    useEffect(() => {
        if (router.asPath === '/the-ave') {
            const handleSet = () => {
                setScrollValue(window.scrollY);
            }
            handleSet();
            window.addEventListener("scroll", handleSet);
        }
    }, [scrollValue]);

    useEffect(() => {
        console.log(router, 'router');
        if (router.asPath === '/the-ave') {
            const handleScroll = () => {
                if (window.scrollY > scrollValue && window.scrollY > 500 && window.scrollY < 1000) {
                    document.getElementById("gallery1").scrollBy(500, 0);
                    document.getElementById("gallery2").scrollBy(-500, 0);
                    // document.getElementById("gallery3").scrollBy(500, 0);
                }

                console.log(scrollValue, "scroll");
                if (window.scrollY < scrollValue) {
                    document.getElementById("gallery1").scrollBy(-500, 0);
                    document.getElementById("gallery2").scrollBy(500, 0);
                    // document.getElementById("gallery3").scrollBy(-500, 0);
                }
            };

            handleScroll();

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div id='galleryWrapper' className="bg-main">
            <div id='gallery' className="container pt-5 pb-5">
                {/* <div className="row">
                    <h1 className="fn-futura text-start mb-3">Gallery</h1>
                    <p className='fn-futura'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure. Consequuntur nesciunt odit quas nihil rerum? Officia aliquid facere sit dolores? Vel, deleniti eos culpa provident laboriosam quod animi perspiciatis dicta ad, quos unde quae expedita dolor esse architecto error?
                    </p>
                </div> */}
            </div>
            <div className="container-fluid pb-5">
                <div className="row">
                    <div id='gallery1' className={styles.galleryImageWrapper}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/1005.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/1090.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/1118.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/1158.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/1171.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/4007.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/4014.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/4032.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/4035.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/4036.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/4080.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        {/* <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/6.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/7.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/8.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div> */}
                    </div>
                    <div id='gallery2' className={styles.galleryImageWrapper}>
                    <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/4083.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/4138.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/5267.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/5293.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/5396.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/6522.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/6759.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/6816.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/6833.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/6837.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/aveslider/6909.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery