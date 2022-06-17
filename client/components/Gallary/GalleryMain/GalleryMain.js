import Styles from "./GalleryMain.module.css";
import Image from "next/image";
import { data } from "../data";
import { useState } from "react";
const GalleryMain = () => {
  const [info, setInfo] = useState(data);
  const [modalOpen, setModalOpen] = useState(null);

  const toggle = (i) => {
    if (modalOpen === i) {
      return setModalOpen(null);
    }

    setModalOpen(i);
  };

  return (
    <div className={Styles.galleryMain}>
      <div className={Styles.filerArea}>
        <h1>Gallery</h1>
        <div className={Styles.optionArea}>
          {info.map((data, i) => {
            return (
              <>
                <div className={Styles.filterOption}>
                  <p>{data.name}</p>
                  <div className={Styles.plusIcon} onClick={() => toggle(i)}>
                    {modalOpen === i ? (
                      <Image
                        src={"/images/x.png"}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      ></Image>
                    ) : (
                      <Image
                        src={"/images/Plus.png"}
                        layout="fill"
                        objectFit="cover"
                        alt=""
                      ></Image>
                    )}
                  </div>
                </div>

                {modalOpen === i ? (
                  <div className={Styles.options}>
                    {data.options.map((option) => {
                      return <p>{option}</p>;
                    })}
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
        <button className={Styles.resetButton}>Reset</button>
      </div>

      <div className={Styles.galleryItem}>
        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 187.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>

        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 184-1.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>

        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 184-2.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>

        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 187.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>

        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 184-1.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>

        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 184-2.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>

        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 187.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>

        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 184-1.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>

        <div className={Styles.galleryImages}>
          <Image
            src={"/images/Frame 184-2.png"}
            layout="fill"
            objectFit="cover"
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default GalleryMain;
