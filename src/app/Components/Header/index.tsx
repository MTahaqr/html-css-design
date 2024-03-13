import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <Image src='/Logo.svg' alt='Logo' width={163} height={42} priority />
      <div>
        <ul className={styles.navContainter}>
          <li>Product</li>
          <li>Services</li>
          <li>About </li>
          <li>
            <button className={styles.loginBtn}>Log in</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
