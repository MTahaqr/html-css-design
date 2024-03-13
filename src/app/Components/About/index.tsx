import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.containerr}>
        <div className={styles.content}>
          <p className={styles.aboutText}>About</p>
          <h1 className={styles.centerText}>
            We love to make great things, things that matter.
          </h1>
          <p className={styles.lastText}>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgItem}>
          <Image
            src='/Rectangle 1270.svg'
            alt='Logo'
            width={300}
            height={305}
            priority
          />
        </div>
        <div className={styles.imgItem}>
          <Image
            src='/Rectangle 1271.svg'
            alt='Logo'
            width={400}
            height={630}
            priority
          />
        </div>

        <div className={styles.imgItem}>
          <Image
            src='/Rectangle 1272.svg'
            alt='Logo'
            width={300}
            height={305}
            priority
          />
        </div>
        <div className={styles.imgItem}>
          <Image
            src='/Rectangle 1273.svg'
            alt='Logo'
            width={300}
            height={305}
            priority
          />
        </div>
        <div className={styles.imgItem}>
          <Image
            src='/Rectangle 1274.svg'
            alt='Logo'
            width={300}
            height={305}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default About;
