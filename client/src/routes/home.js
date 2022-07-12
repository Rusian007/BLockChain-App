import React from "react";
import TopNav from "../components/nav";
import Footer from "../components/footer";
import styles from '../Css/home.module.css';
import { useNavigate } from "react-router-dom";
import userContract from "../contracts/users.json";
import Web3 from 'web3';

const Home = () => {
  let account = sessionStorage.getItem("accounts")

  if(account){
    return (    
  <section className={styles.outerdiv}>

      <TopNav />

        <div className={styles.main_container}>
          <p>
            Add Files here
          </p>
        </div>

      <Footer />

      </section>

  )
  } else {
    return (
      <>
      <h2 style={{ textAlign : 'center', padding :'40px' }}> You Need To Log In First </h2>
      </>
    )
  }
  
  
};

export default Home;
