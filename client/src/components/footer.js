import React from 'react';
import styles from '../Css/footer.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer (){
	return(
		<>
			<div className={styles.footer}>
                <div className={styles.links}>

                    <a href="#">Contact</a>
                    <a href="#">About Us</a>
                    
                </div>

                <div className={styles.media}>
                    <a href="#">< FaFacebookF style={{color:"rgb(96, 96, 255)"}}/></a>
                    <a href="#"> <FaTwitter style={{color:"rgb(96, 96, 255)"}} /> </a>
                </div>
            </div>
		</>
		)

};
