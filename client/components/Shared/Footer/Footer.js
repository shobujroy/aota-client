//Footer Component
import Image from "next/image";
import { useState } from "react";
import styles from "./Footer.module.css";

function Footer() {
  const [active, setActive] = useState(null);
  return (
    <div className={styles.FooterMain}>
      <div className={styles.FooterShapOne}>
        <Image width={610} height={640} src={"/images/Polygon 111.png"} />
      </div>

      <div className={styles.FooterShapTwo}>
        <Image width={610} height={640} src={"/images/Polygon 2.png"} />
      </div>

      <footer className={`footer-area  clear-both`}>
        <div className="container pt-3 pb-2">
          <div className="row">
            <div
              className={`d-flex flex-wrap justify-content-between align-items-center ${ styles.footerContectWrapper }`}
            >
              <div style={{ width: "23rem" }}>
                <h5 className={styles.InputText}>Join the AOTAVERSE</h5>
                <div className="d-flex flex-start">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className={`form-control ${ styles.emailInput }`}
                  />
                  <button className={`btn ${ styles.btnSubmit }`}>Sign Up</button>
                </div>

                <div className="d-flex flex-row ">
                  <span style={{ color: "#FAFAFA" }} className="fs-4 me-3">
                    <a
                      onMouseOver={() => setActive(0)}
                      onMouseOut={() => setActive(null)}
                      className={"nav-link " + styles.socialIcon}
                      aria-current="page"
                      href="http://instagram.com/aliensontheave"
                      target="_blank"
                    >
                      {active === 0 ? (
                        <Image
                          src="/images/navbar/instagram.svg"
                          width={30}
                          height={30}
                        />
                      ) : (
                        <Image
                          src="/images/icons/instagram.svg"
                          width={30}
                          height={30}
                        />
                      )}
                    </a>
                  </span>
                  <span style={{ color: "#FAFAFA" }} className="fs-4 me-3">
                    <a
                      onMouseOver={() => setActive(1)}
                      onMouseOut={() => setActive(null)}
                      className={"nav-link " + styles.socialIcon}
                      aria-current="page"
                      href="https://discord.gg/xpsqJdKkZd"
                      target="_blank"
                    >
                      {active === 1 ? (
                        <Image
                          src="/images/navbar/Discord.svg"
                          width={30}
                          height={30}
                        />
                      ) : (
                        <Image
                          src="/images/icons/Discord.svg"
                          width={30}
                          height={30}
                        />
                      )}
                    </a>
                  </span>
                  <span style={{ color: "#FAFAFA" }} className="fs-4 me-3">
                    <a
                      onMouseOver={() => setActive(2)}
                      onMouseOut={() => setActive(null)}
                      className={"nav-link " + styles.socialIcon}
                      aria-current="page"
                      href="http://twitter.com/AOTAnft/"
                      target="_blank"
                    >
                      {active === 2 ? (
                        <Image
                          src="/images/navbar/twitter.svg"
                          width={30}
                          height={30}
                        />
                      ) : (
                        <Image
                          src="/images/icons/twitter.svg"
                          width={30}
                          height={30}
                        />
                      )}
                    </a>
                  </span>

                  <span style={{ color: "#FAFAFA" }} className="fs-4 me-3">
                    <a
                      onMouseOver={() => setActive(3)}
                      onMouseOut={() => setActive(null)}
                      className={"nav-link " + styles.socialIcon}
                      aria-current="page"
                      href="http://opensea.io/Aliensontheave/"
                      target="_blank"
                    >
                      {active === 3 ? (
                        <Image
                          src="/images/navbar/opensea 1.svg"
                          width={30}
                          height={30}
                        />
                      ) : (
                        <Image
                          src="/images/icons/opensea 2.svg"
                          width={30}
                          height={30}
                        />
                      )}
                    </a>
                  </span>
                </div>
              </div>
              <div className={`fn-futura text-end ${ styles.FooterLastText }`}>
                <h6>ALIENS ON THE AVE</h6>
                <p>We respect your privacy.</p>
                <p>
                  GivePower Foundation, located at 500 2nd Street. 1st Floor, San Francisco, <br /> CA 94107, a 501(c)(3) charity. The donation is tax deductible by Aliens On The Ave.
                </p>
                <p> <small>GivePower's annual report and more information are available at
                  <a href="https://www.givepower.org/"> www.givepower.org</a> Registration with any
                  regulatory agency does not imply endorsement. </small> </p>
                <p> © 2022 Aliens On The Ave  </p>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
