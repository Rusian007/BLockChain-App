import React from "react";
import TopNav from "../components/nav";
import Footer from "../components/footer";
import styles from '../Css/home.module.css';

const Home = () => {
  return (    
  <section className={styles.outerdiv}>
      <TopNav />
        <div className="container-sm">
          <div className="innerdiv">
            <div className="hero-content">
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                OMG NOOOO
              </h1>
              <div className="container-xs">
                <p
                  className="m-0 mb-32 reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  Some text need to be added
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>

  );
};

export default Home;
