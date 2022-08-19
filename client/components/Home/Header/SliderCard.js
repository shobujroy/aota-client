import Link from "next/link";
import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { MintContext } from "./../../../context/MintContext";
import Styles from "./SliderCard.module.css";
import Web3 from "web3";
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
function SliderCard() {
  const {
    isConnected,
    hasMetamask,
    sign,
    web3Modal,
    web3,
    setIsConnected,
    setWeb3Modal,
    setSign,
    setWeb3,
    setChainId
  } = useContext(MintContext);

  // connect to wallet end
  async function connectWallet() {
    let provider;
    try {
      provider = await web3Modal.connect();
    } catch (e) {
      console.log("Could not get a wallet connection", e);
      return;
    }
    console.log("HERE", provider);

    await addListeners(provider);

    const web3Instance = new Web3(provider);
    const signer = (await web3Instance.eth.getAccounts())[0];
    const chainId = await web3Instance.eth.getChainId();
    console.log(web3Instance, "dfasdf");
    setWeb3(web3Instance);
    setSign(signer);
    setChainId(chainId);
    setIsConnected(true);
  }

  // reset web3 and signer when disconnecting
  async function resetApp() {
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await web3Modal.clearCachedProvider();
    setWeb3(null);
    setChainId("");
    setSign("");
    setIsConnected(false);
  }

  // disconnect from wallet end
  async function disconnectWallet() {
    await web3Modal.clearCachedProvider();
    setWeb3(null);
    setChainId("");
    setSign("");
    setIsConnected(false);
  }

  async function addListeners(web3ModalProvider) {
    if (!web3ModalProvider.on) {
      return;
    }
    web3ModalProvider.on("close", () => resetApp());

    web3ModalProvider.on("accountsChanged", async (accounts) => {
      setConnectedAddress(accounts[0]);
      window.location.reload();
    });

    // Subscribe to chainId change
    web3ModalProvider.on("chainChanged", async (chainId) => {
      setChainId(chainId);
      window.location.reload();
    });
  }

  // connect to wallet end 

  return (
    <>
      <div className={Styles.slider}>
        <Carousel controls={false}>
          <Carousel.Item>
            <div className={Styles.carouselItem}>
              <h1>
                We’re Aliens on <br /> the ave
              </h1>
              <p>We're bringing creative coworking to the Metaverse.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className={Styles.two}>
            <div className={Styles.carousleItemTwo}>
              <h1>
                Exclusive <br /> Merch
              </h1>
              <p>AOTA holders gain access to limited edition gear</p>
            </div>
          </Carousel.Item>
          <Carousel.Item className={Styles.two}>
            <div className={Styles.carouselItemThree}>
              <h1>
                ACCESS THE CREATIVE <br /> HAVEN
              </h1>
              <p>Coworking built by creatives for creatives</p>
            </div>
          </Carousel.Item>

          <Carousel.Item className={Styles.two}>
            <div className={Styles.carouselItemFour}>
              <h1>
                YOGA &  MEDITATION
              </h1>
              <p>A healthy mind & body is a creative one.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={Styles.IpadSLide}>
        <div className={Styles.heroMob}>

          <div className={Styles.mobConnectwallbutton}>
            {isConnected ? (
              <Link href={"/public-sale"}>
                <button>MINT</button>
              </Link>
            ) : (
              <button onClick={() => connectWallet()}>CONNECT WALLET</button>
            )}
          </div>
        </div>
      </div>



      <div className={Styles.mobileSLide}>
        <div className={Styles.heroMob}>

          <div className={Styles.mobConnectwallbutton}>
            {isConnected ? (
              <Link href={"/public-sale"}>
                <button>MINT</button>
              </Link>
            ) : (
              <button onClick={() => connectWallet()}>CONNECT WALLET</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
{
  /* <div className={Styles.textArea}>
<h1>We’re Aliens on the ave</h1>
<p>we’re Brainging crreative co-working to the Metaverse.</p>
<div className={Styles.buttonArea}>
  {isConnected ? (
    <Link href={"/public-sale"}>
      <button>MINT</button>
    </Link>
  ) : (
    <button onClick={() => connectwallet()}>CONNECT WALLET</button>
  )}
</div>
</div>
<div className={Styles.imageOne}>
<Image
  src={"/images/banner.png"}
  layout="fill"
  objectFit="cover"
></Image>
</div> */
}
