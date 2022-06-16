//Footer Component
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import FooterCol from "./FooterCol";

function Footer({ bg }) {


  return (

<div className={styles.FooterMain}>

<div className={styles.FooterShapOne}>
                <Image width={610} height={640} src={"/images/Polygon 111.png"} />
              </div>

              <div className={styles.FooterShapTwo}>
              <Image width={610} height={640} src={"/images/Polygon 2.png"} />
              </div>

    <footer style={{backgroundImage: "linear-gradient(#0C1F11, #051509)"}} className={`footer-area  clear-both ${ bg }`}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className={`d-flex flex-wrap justify-content-between align-items-center ${ styles.footerContectWrapper }`}>
            <div style={{ width: '23rem' }}>
              <h5 className={styles.InputText}>Join the AOTAVERSE</h5>
              <div className="d-flex flex-start">
                <input type="email" placeholder="Email Address" className={`form-control ${ styles.emailInput }`} />
                <button className={`btn ${ styles.btnSubmit }`}>Sign Up</button>
              </div>

              <div className="d-flex flex-row ">
                <span style={{color: "#FAFAFA"}}  className='fs-4 me-3'><i className="fa-brands fa-twitter"></i></span>
                <span style={{color: "#FAFAFA"}} className='fs-4 me-3'><i className="fa-brands fa-instagram"></i></span>
                <span style={{color: "#FAFAFA"}}  className='fs-4 me-3'><i className="fa-brands fa-reddit"></i></span>
                
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
