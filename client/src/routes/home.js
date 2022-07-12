import React from "react";
import TopNav from "../components/nav";
import Footer from "../components/footer";
import styles from '../Css/home.module.css';

const Home = () => {
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

  );
};

export default Home;
