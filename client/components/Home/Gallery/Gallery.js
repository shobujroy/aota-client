import React, { useEffect, useState } from 'react'
import styles from './Gallery.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

function Gallery() {
    const router = useRouter()
    const [scrollValue, setscrollValue] = useState(0);

    useEffect(() => {
        document.getElementById("gallery1").scrollBy(0, 0);
        document.getElementById("gallery2").scrollBy(3000, 0);
        document.getElementById("gallery3").scrollBy(0, 0);
    }, []);

    useEffect(() => {
        if (router.asPath === '/') {
            const handleSet = () => {
                setscrollValue(window.scrollY);
            }
            handleSet();
            window.addEventListener("scroll", handleSet);
        }
    }, [scrollValue]);

    useEffect(() => {
        console.log(router, 'router');
        if (router.asPath === '/') {
            const handleScroll = () => {
                if (window.scrollY > scrollValue && window.scrollY > 2500 && window.scrollY < 5000) {
                    document.getElementById("gallery1").scrollBy(500, 0);
                    document.getElementById("gallery2").scrollBy(-500, 0);
                    document.getElementById("gallery3").scrollBy(500, 0);
                }

                console.log(scrollValue);
                if (window.scrollY < scrollValue) {
                    document.getElementById("gallery1").scrollBy(-500, 0);
                    document.getElementById("gallery2").scrollBy(500, 0);
                    document.getElementById("gallery3").scrollBy(-500, 0);
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
                <div className="row">
                    <h1 className="fn-futura text-start mb-3">Gallery</h1>
                    <p className='fn-futura'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, iure. Consequuntur nesciunt odit quas nihil rerum? Officia aliquid facere sit dolores? Vel, deleniti eos culpa provident laboriosam quod animi perspiciatis dicta ad, quos unde quae expedita dolor esse architecto error?
                    </p>
                </div>
            </div>
            <div className="container-fluid pb-5">
                <div className="row">
                    <div id='gallery1' className={styles.galleryImageWrapper}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/1.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/2.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/3.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/4.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
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
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/1.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/2.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/3.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/4.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
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
                        </div>
                    </div>
                    <div id='gallery2' className={styles.galleryImageWrapper}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/1.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/2.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/3.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/4.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
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
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/1.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/2.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/3.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/4.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
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
                        </div>
                    </div>
                    <div id='gallery3' className={styles.galleryImageWrapper}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/1.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/2.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/3.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/4.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
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
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/1.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/2.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/3.PNG"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/images/gallery/4.png"
                                alt="Gallery Image"
                                width={250}
                                height={250}
                                className='img-fit rounded-3'
                            />
                        </div>
                        <div className={styles.galleryImage}>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery