import React from "react";
import styles from "./Hero.module.css";
type props = {
  name: string;
  descriptiom: string;
  picture: string;
};
const Hero = ({ name, descriptiom, picture }: props) => {
  return (
    <div className={styles.hero_main}>
      <div className={`${styles.hero} container`}>
        <div className={styles.col_1}>
          <h1>{name}</h1>
          <p>{descriptiom}</p>
        </div>
        <div className={styles.col_2}>
          <img src={picture} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
