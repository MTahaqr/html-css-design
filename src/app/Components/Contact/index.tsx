import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <div>
          <form className={styles.contactForm}>
            <input
              className={styles.emailInput}
              type='email'
              placeholder='Your email address'
            />
            <button className={styles.submitBtn}>Start now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
