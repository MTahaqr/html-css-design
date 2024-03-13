import Image from "next/image";
import styles from "./ourTeam.module.css";

const OurTeam = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h6 className={styles.firstText}>Our Team</h6>
          <h1 className={styles.secText}>The leadership team </h1>
          <p className={styles.thirdText}>
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
          </p>
        </div>
        <div className={styles.teamMemContainer}>
          <div className={styles.teamMem}>
            <Image
              src='/teamMember1.svg'
              alt='Logo'
              width={300}
              height={354}
              priority
            />
            <p className={styles.teamMemName}>Michael Scott</p>
            <p className={styles.teamMemDesig}>General Manager</p>
          </div>
          <div className={styles.teamMem}>
            <Image
              src='/teamMember2.svg'
              alt='Logo'
              width={300}
              height={354}
              priority
            />
            <p className={styles.teamMemName}>Dwight Schrute</p>
            <p className={styles.teamMemDesig}>General Manager</p>
          </div>
          <div className={styles.teamMem}>
            <Image
              src='/teamMember3.svg'
              alt='Logo'
              width={300}
              height={354}
              priority
            />
            <p className={styles.teamMemName}>Pam Beetsley</p>
            <p className={styles.teamMemDesig}>General Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
