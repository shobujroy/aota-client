//Footer Component
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import FooterCol from "./FooterCol";

function Footer({ bg }) {


  return (
    <footer className={`footer-area  clear-both ${ bg }`}>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className={`d-flex flex-wrap justify-content-between align-items-center ${ styles.footerContectWrapper }`}>
            <div style={{ width: '18rem' }}>
              <h5 className="fn-montserrat">GET ON THE LIST</h5>
              <div className="d-flex flex-start">
                <input type="email" placeholder="Email Address" className={`form-control ${ styles.emailInput }`} />
                <button className={`btn ${ styles.btnSubmit }`}>Submit</button>
              </div>
            </div>
            <div className="fn-futura text-end">
              <div className="d-flex flex-row justify-content-end mb-3">
                <span className='fs-4 me-3'><i class="fa-brands fa-instagram"></i></span>
                <span className='fs-4 me-3'><i class="fa-brands fa-reddit"></i></span>
                <span className='fs-4 me-3'><i class="fa-brands fa-twitter"></i></span>
                <span className='fs-4 me-3'><i class="fa-brands fa-pinterest"></i></span>
              </div>
              <h6>AOTA All Rights Reserved 2022</h6>
              <h6>Terms and Conditions</h6>
              <h6>Join The Team</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
