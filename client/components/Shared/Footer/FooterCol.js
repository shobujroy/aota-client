import Image from "next/image";
import Link from "next/link";
import styles from "./FooterCol.module.css";

function FooterCol(props) {
  return (
    <div className={`footer-center text-sm-center text-md-start ${ props.col }`}>
      {props.menuTitle ? (
        <h6 className={styles.title}>{props.menuTitle}</h6>
      ) : props.menuLogo ? (
        <Image
          className={styles.FooterLogo}
          width={150}
          height={60}
          src={props.menuLogo}
          alt=""
        />
      ) : (
        ""
      )}
      <ul className="list-unstyled mt-4 footer-center">
        {props.menuItems.map((item, index) => (
          <li className={styles.items} key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
}

export default FooterCol;
