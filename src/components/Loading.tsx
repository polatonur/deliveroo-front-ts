import React from "react";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <PulseLoader />
    </div>
  );
};

export default Loading;
