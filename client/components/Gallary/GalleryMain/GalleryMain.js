import Image from "next/image";
import { useState,useEffect } from "react";
import { data } from "../data";
import { Item } from "./GallaryImage";
import Styles from "./GalleryMain.module.css";
import axios from 'axios'

const label = { inputProps: { "aria-label": "Switch demo" } };



const GalleryMain = () => {
  
  const [galleryData,setGalleryData] = useState([]);
  const [info, setInfo] = useState(data);
  const [modalOpen, setModalOpen] = useState(null);
  async function fetchData(){
    const allData= await Promise.all(
      Item.map(async item => {
        const {data} = await axios.get(`https://aota.mypinata.cloud/ipfs/QmNd9KBk8NAqrZuCZjysmnoX5Hb9h26cSZVX86KecfGFNY/${item}.json`)
        return data
      })
    )
    setGalleryData(allData)
  }
  function filterData(){
    
  }

  useEffect(() => {
    (async () => await fetchData())()
  },[])
  const toggle = (i) => {
    if (modalOpen === i) {
      return setModalOpen(null);
    }
    setModalOpen(i);
  };

  return (
    <div className={Styles.galleryMain}>
      <div className={Styles.filterMob}>
        <div className={Styles.filterQuan}>
          <p>
            Filter <span>0</span>
          </p>
        </div>
        <div className={Styles.filterIcons}>
          <div className={Styles.filterIMAG}>
            <Image
              src={"/images/refresh right.svg"}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div
            className={Styles.filterIMAG}
            onClick={() => {
              document.getElementById("filterArea").style.display = "block";
            }}
          >
            <Image
              src={"/images/Filter 2.svg"}
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
      <div className={`col-md-3 ${Styles.filerArea}`} id="filterArea">
        <h1 className={Styles.filterHello}>Filter</h1>
        <div className={Styles.filterMOBVErsion}>
          <h1>Filter</h1>
          <Image
            src={"/images/x.svg"}
            width={20}
            height={20}
            alt=""
            onClick={() => {
              document.getElementById("filterArea").style.display = "none";
            }}
          ></Image>
        </div>

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
                    {/* {modalOpen === i ? (
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
                    )} */}
                  </div>
                </div>

                {/* {modalOpen === i ? (
                  <div className={Styles.options}>
                    {data.options.map((option) => {
                      return <p>{option}</p>;
                    })}
                  </div>
                ) : null} */}
              </>
            );
          })}
        </div>
        <button className={Styles.resetButton}>Reset</button>
      </div>

      <div className={`col-md-9 ${Styles.gallaryRight}`}>
        <div className={Styles.gallaryBanner}>
          <div className={Styles.bannerText}>
            <h1>Gallery</h1>
          </div>
        </div>
        <div className={Styles.galleryItem}>
          {galleryData.map((data, i) => {
            const imageLink = data.image.slice(7,data.image.length)
            return (
              <div className={Styles.galleryImages} key={i}>
                <Image
                  src={`https://aota.mypinata.cloud/ipfs/${imageLink}`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                ></Image>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryMain;
