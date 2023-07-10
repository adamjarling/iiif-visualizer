import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className="container-fluid">
      <ul>
        <li>
          <strong className={styles["brand-wrapper"]}>
            <img src="/iiif-logo.png" alt="IIIF Logo" /> IIIF Visualizer
          </strong>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://iiif.io" target="_blank">
            IIIF.io
          </a>
        </li>
        <li>
          <a href="#">Light Mode</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
