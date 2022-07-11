import React from 'react';
import styles from '../Css/nav.module.css';

export default function TopNav (){
	return(
		<>
			<nav className={`${styles.flex} ${styles.nav}`}>

				<div >
					<img className={styles.Logo} src="https://cdn.tutsplus.com/gamedev/uploads/legacy/043_freeShmupSprites/Free_Shmup_Sprites_Boss_Battle.jpg"  alt="App Logo"/>
				</div>

				<div className={`${styles.btn_group} ${styles.flex}`}>

					<div>
						<button className={styles.bg_none}>
							Upload Files
						</button>
					</div>

					<div>
						<button className={styles.btn}>
							Share Files
						</button>
					</div>

					<div>
						<button className={styles.btn}>
							Profile
						</button>
					</div>

				</div>

			</nav>
		</>
		)

};
