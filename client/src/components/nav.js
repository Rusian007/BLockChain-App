import React, { useState } from "react";
import styles from "../Css/nav.module.css";
import { ImCross } from "react-icons/im";
import { CgOptions } from "react-icons/cg";

export default function TopNav() {
  const [toggle, setToggle] = useState(false);

  const ToggleMenu = e => {
	  if (toggle){
		setToggle(false)
	  } else {
		setToggle(true)
	  }
  };

  return (
    <>
        <div className={`${styles.menu} ${toggle? styles.in_animate : ""}`}>
          <div style={{ textAlign: "end" }}>
            <button onClick={ToggleMenu} className={styles.btn_toggle}>
              <ImCross style={{ color: "white" }} />
            </button>
          </div>

          <div>
            <button className={styles.bg_none}>Upload Files</button>
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
            src="https://cdn.tutsplus.com/gamedev/uploads/legacy/043_freeShmupSprites/Free_Shmup_Sprites_Boss_Battle.jpg"
            alt="App Logo"
          />
        </div>

        <div className={`${styles.btn_group} ${styles.flex}`}>
          <div>
            <button className={styles.bg_none}>Upload Files</button>
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
