import Image from "next/image";
import styles from "./ourValues.module.css";

const OurValues = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h6 className={styles.firstText}>Our values</h6>
          <h1 className={styles.secText}>Things in we believe</h1>
          <p className={styles.thirdText}>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
        <div className={styles.valueWithImgContainer}>
          <Image
            src='/Rectangle 1273.svg'
            alt='Logo'
            width={150}
            height={151}
            priority
          />
          <div>
            <p className={styles.valuesHeading}>We are commited.</p>
            <p className={styles.valuesDescription}>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
        <div className={styles.valueWithImgContainer}>
          <Image
            src='/Rectangle 1272.svg'
            alt='Logo'
            width={150}
            height={151}
            priority
          />
          <div>
            <p className={styles.valuesHeading}>We are responsible.</p>
            <p className={styles.valuesDescription}>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
        <div className={styles.valueWithImgContainer}>
          <Image
            src='/Image (3).svg'
            alt='Logo'
            width={150}
            height={151}
            priority
          />
          <div>
            <p className={styles.valuesHeading}>We aim for progress.</p>
            <p className={styles.valuesDescription}>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
