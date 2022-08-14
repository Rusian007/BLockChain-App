import React from 'react';
import styles from '../Css/footer.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export default function Footer (){
	return(
		<>
			<div className={styles.footer}>
                <div className={styles.links}>

                    <a href="https://ethereum.org/en/">Learn about Ethereum</a>
                    
                </div>

                <div className={styles.media}>
                    <a href="https://www.facebook.com/ethereumproject">< FaFacebookF style={{color:'#F5be01',height: 'auto'}}/></a> {/*color:"rgb(96, 96, 255)"*/}
                    <a href="https://twitter.com/ethereum"> <FaTwitter style={{color:"#F5be01", height: 'auto'}} /></a> {/*color:"rgb(96, 96, 255)"*/}
                </div>
            </div>
		</>
		)

};
