import React from "react";
import styles from "../styles/Introduction.module.scss";

class Introduction extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.area}>
          <div className={styles.stars}></div>
          <div className={styles.stars1}></div>
          <div className={styles.stars2}></div>
        </div>
        <div className={styles.content}>
          <h1>
            Hello, I'm <span className={styles.name}>Mrinal Haque</span>
          </h1>
          <h3>Full Stack WordPress Developer</h3>
        </div>
      </div>
    );
  }
}
export default Introduction;
