import React from "react";
import logo from "../assets/images/deliveroo_logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_main}>
      <header className={`${"container"} ${styles.header}`}>
        <img src={logo} alt="deliveroo" />
      </header>
    </div>
  );
};

export default Header;
