import React, { Component } from "react";
import styles from "./styles.css";

export default class Start extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.headerName}>
            React Template
          </div>
        </div>
        <div className={styles.body}>
          Hello World
        </div>
      </div>
    );
  }
}
