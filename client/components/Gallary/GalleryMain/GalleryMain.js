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
{/* serc */}
{/* src */}

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

      <div className={Styles.galleryItem}>
        <Image
          src={"/images/Frame 187.png"}
          width={243}
          height={272}
          alt=""
        ></Image>
      </div>
    </div>
  );
};

export default GalleryMain;
