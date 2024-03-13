import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerGrid}>
        <div>
          <Image
            src='darkLogo.svg'
            alt='Logo'
            width={156}
            height={41}
            priority
          />
          <p className={styles.des}>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p className={styles.des}>All rights reserved.</p>
        </div>
        <div>
          <h6 className={styles.footerHeadings}>Lading</h6>
          <ul>
            <ol className={styles.navItem}>Home</ol>
            <ol className={styles.navItem}>Product</ol>
            <ol className={styles.navItem}>Services</ol>
          </ul>
        </div>
        <div>
          <h6 className={styles.footerHeadings}>Company</h6>
          <ul>
            <ol className={styles.navItem}>Home</ol>
            <ol className={styles.navItem}>Careers</ol>
            <ol className={styles.navItem}>Services</ol>
          </ul>
        </div>
        <div>
          <h6 className={styles.footerHeadings}>Resources</h6>
          <ul>
            <ol className={styles.navItem}>Blog</ol>
            <ol className={styles.navItem}>Product</ol>
            <ol className={styles.navItem}>Services</ol>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
