//Footer Component
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import FooterCol from "./FooterCol";

function Footer() {
  return (
    <div className={styles.FooterMain}>
      <div className={styles.FooterShapOne}>
        <Image width={610} height={640} src={"/images/Polygon 111.png"} />
      </div>

      <div className={styles.FooterShapTwo}>
        <Image width={610} height={640} src={"/images/Polygon 2.png"} />
      </div>

      <footer className={`footer-area  clear-both`}>
        <div className="container pt-5 pb-5">
          <div className="row">
            <div
              className={`d-flex flex-wrap justify-content-between align-items-center ${styles.footerContectWrapper}`}
            >
              <div style={{ width: "23rem" }}>
                <h5 className={styles.InputText}>Join the AOTAVERSE</h5>
                <div className="d-flex flex-start">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`form-control ${styles.emailInput}`}
                  />
                  <button className={`btn ${styles.btnSubmit}`}>Sign Up</button>
                </div>

                <div className="d-flex flex-row ">
                  <span style={{ color: "#FAFAFA" }} className="fs-4 me-3">
                    <a
                      className={"nav-link " + styles.socialIcon}
                      aria-current="page"
                      href="http://instagram.com/aliensontheave"
                      target="_blank"
                    >
                      <Image
                        src="/images/icons/instagram.svg"
                        width={30}
                        height={30}
                      />
                    </a>
                  </span>
                  <span style={{ color: "#FAFAFA" }} className="fs-4 me-3">
                    <a
                      className={"nav-link " + styles.socialIcon}
                      aria-current="page"
                      href="https://discord.gg/xpsqJdKkZd"
                      target="_blank"
                    >
                      <Image src="/images/icons/Discord.svg" width={30} height={30} />
                    </a>
                  </span>
                  <span style={{ color: "#FAFAFA" }} className="fs-4 me-3">
                    <a
                      className={"nav-link " + styles.socialIcon}
                      aria-current="page"
                      href="http://twitter.com/AOTAnft/"
                      target="_blank"
                    >
                      <Image src="/images/icons/twitter.svg" width={30} height={30} />
                    </a>
                  </span>

                  <span style={{ color: "#FAFAFA" }} className="fs-4 me-3">
                    <a
                      className={"nav-link " + styles.socialIcon}
                      aria-current="page"
                      href="http://opensea.io/Aliensontheave/"
                      target="_blank"
                    >
                      <Image
                        src="/images/icons/opensea 2.svg"
                        width={30}
                        height={30}
                      />
                    </a>
                  </span>
                </div>
              </div>
              <div className={`fn-futura text-end ${styles.FooterLastText}`}>
                <h6>ALIENS ON THE AVE</h6>
                <p>We respect your privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
