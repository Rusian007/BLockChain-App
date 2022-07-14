import React, { useState, useRef } from "react";
import styles from "../Css/nav.module.css";
import { ImCross } from "react-icons/im";
import { CgOptions } from "react-icons/cg";
import "react-toastify/dist/ReactToastify.css";
import logo from '../img/logo.png';

export default function TopNav({getTheFile}) {
  const [toggle, setToggle] = useState(false);
  const inputref = useRef(null);
  const imgref = useRef(null);
  let inputEle = null;

  const ToggleMenu = e => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  const handleInput = () => {
    inputEle = inputref.current;
    inputEle.click();
  };

  

  

  return (
    <>

      <div className={`${styles.menu} ${toggle ? styles.in_animate : ""}`}>
        <div style={{ textAlign: "end" }}>
          <button onClick={ToggleMenu} className={styles.btn_toggle}>
            <ImCross style={{ color: "white" }} />
          </button>
        </div>

        <div>
          <button onClick={handleInput} className={styles.bg_none}>
            Upload Files
          </button>
          <input
            ref={inputref}
            style={{ display: "none" }}
            type="file"
            accept=".png,.jpg,.pdf,.txt,.svg, text/css, text/html"
            onChange={getTheFile}
          />
        </div>

        <div>
          <button className={styles.btn}>Share Files</button>
        </div>

        <div>
          <button className={styles.btn}>Profile</button>
        </div>
      </div>

      <nav className={`${styles.flex} ${styles.nav}`}>
        <div>
          <img
            className={styles.Logo}
            src={logo}
            alt="App Logo"
          />
        </div>

        <div className={`${styles.btn_group} ${styles.flex}`}>
          <div>
            <button onClick={handleInput} className={styles.bg_none}>
              Upload Files
            </button>
            <input
              ref={inputref}
              style={{ display: "none" }}
              type="file"
              accept=".png,.jpg,.pdf,.docx,.ppt,.svg"
              onChange={getTheFile}
            />
          </div>

          <div>
            <button className={styles.btn}>Share Files</button>
          </div>

          <div>
            <button className={styles.btn}>Profile</button>
          </div>
        </div>

        <div className={styles.hidden}>
          <button onClick={ToggleMenu} className={styles.btn_toggle}>
            <CgOptions style={{ fontSize: "29px", color: "white" }} />
          </button>
        </div>
      </nav>
    </>
  );
}
