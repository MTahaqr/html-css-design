import styles from "./ourNumbers.module.css";

const OurNumbers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h6 className={styles.firstText}>Our numbers</h6>
          <h1 className={styles.secText}>
            Handshake infographic mass market crowdfunding iteration.{" "}
          </h1>
        </div>
        <div className={styles.countContainer}>
          <div className={styles.countItem}>
            <p className={styles.count}>120m</p>
            <p className={styles.countText}>Cool feature title</p>
          </div>
          <div className={styles.countItem}>
            <p className={styles.count}>10.000</p>
            <p className={styles.countText}>Cool feature title</p>
          </div>
          <div className={styles.countItem}>
            <p className={styles.count}>240</p>
            <p className={styles.countText}>Cool feature title</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
