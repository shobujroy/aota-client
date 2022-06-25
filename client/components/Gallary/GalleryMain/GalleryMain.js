import Styles from "./GalleryMain.module.css";
import Image from "next/image";
import { data } from "../data";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import { Item } from "./GallaryImage";

const label = { inputProps: { "aria-label": "Switch demo" } };

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
      <div className={`col-md-3 ${Styles.filerArea}`}>
        <h1>Filter</h1>

        {/* <div className={Styles.GoldenOption}>
          <Image width={24} height={24} src={"/images/gallery/goldbean.png"} />
          <h3>Golden Mode</h3>
          <Switch {...label} />
        </div> */}

        {/* <div className={Styles.SearcOption}>
          <Image width={24} height={24} src={"/images/gallery/Search.png"} />
          <input placeholder="Sort by serial..." id="searchbyid" type="text" />
        </div> */}

        <div className={Styles.optionArea}>
          {info.map((data, i) => {
            return (
              <>
                <div className={Styles.filterOption}>
                  <div className={Styles.ImageAndIcon}>
                    <Image width={20} height={15} src={data.image} />
                    <p>{data.name}</p>
                  </div>

                  <div className={Styles.plusIcon} onClick={() => toggle(i)}>
                    {modalOpen === i ? (
                      <Image
                        src={"/images/x.svg"}
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

      <div className={`col-md-9 ${Styles.gallaryRight}`}>
        <div className={Styles.gallaryBanner}>
          <div className={Styles.bannerText}>
            <h1>FIND YOUR AOTA</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              amet diam pharetra dui, venenatis adipiscing diam.
            </p>
            <button>Pair Now</button>
          </div>
        </div>
        <div className={Styles.galleryItem}>
          {/* {Item.map((data, i) => {
            return (
              <div className={Styles.galleryImages}>
                <Image
                  src={data.item}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                ></Image>
              </div>
            );
          })} */}
          <div className={Styles.gallaryDemoIMage}>
            <Image
              src={"/images/Skin_&_Background_.PNG"}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryMain;
