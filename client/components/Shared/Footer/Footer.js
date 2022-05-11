//Footer Component
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import FooterCol from "./FooterCol";

function Footer() {
  const noNamed = [{ name: "Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.", link: "" }];

  const quickLink = [
    { name: "Home", link: "#about" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#about" },
    { name: "Connect wallet", link: "#about" },
    { name: "Profile", link: "#about" },
  ];

  const followLink = [
    { name: "Facebook", link: "#about" },
    { name: "Twitter", link: "#about" },
    { name: "GitHub", link: "#about" }
  ];

  const getInTouch = [];

  return (
    <footer className="footer-area bg-dark clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol
            col={'col-md-6'}
            key={1}
            menuLogo={
              "/logo.svg"
            }
            menuItems={noNamed}
          >
            <p className={styles.contactDetails}>
              <Link href="https://www.facebook.com/Lakhrifoods">
                <i className="fab fa-facebook m-1 fs-3 global-pointer"></i>
              </Link>
              <Link href="http://instagram.com/lakhrifoods">
                <i className="fab fa-instagram m-1 fs-3 global-pointer"></i>
              </Link>
            </p>
          </FooterCol>
          {/* <FooterCol key={2} menuTitle="For Vendor" menuItems={quickLink} /> */}
          <FooterCol
            col={'col-md-2'} key={3} menuTitle="Collectibles" menuItems={quickLink}>

          </FooterCol>
          <FooterCol
            col={'col-md-2'} key={3} menuTitle="Follow us" menuItems={followLink}>
          </FooterCol>
          <FooterCol
            col={'col-md-2'} key={3} menuTitle="" menuItems={getInTouch}>
            <div className="col-md-9">
              <Image
                src={'/images/open-sea-logo.png'}
                width={100}
                height={100}
                className="img-fit rounded-circle"
              />
            </div>
          </FooterCol>
        </div>
        <div className={styles.copyRight}>
          <p>© 2022 AOTA. All rights reserved</p>
          <div className="d-flex">
            <h5 className="border-right ps-2 pe-2">Terms & Conditions</h5>
            <h5 className="border-right ps-2 pe-2">Privacy Policy</h5>
            <h5 className="ps-2">Sitemap</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
