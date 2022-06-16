import React from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import "./Css/landing.css";
import landingpic from './img/land.png'

const App = () =>{
  
  if(window.ethereum){
    try {
      // Do something 
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(res=>{
        // Return the address of the wallet
        console.log(res) 
        })
    } catch(e) {
      alert("we con't run the app properly if you don't connect your Account")
      console.log(e);
    }
      
      
    }else{
      
      alert("install metamask extension!!")
    }

  return(
    <>
    <section className="structure">
        <header className="heading">
          <div className="mycontainer flex_between">
            <div className="logo">
              <a href="#">
                <img src="" alt="LOGO" />
              </a>
            </div>
            <nav className="main_navgation flex_between">
              <div className="nav-links"></div>

              <div className="nav_buttons">
                <button className="landbtn">
                      Login
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main className="main">
          <section className="landing">
            <div className="landing_text">
              <h1 className="h1">Network with Blockchain</h1>
              <p className="p">Blockchain App User Interface</p>
              <button className="landbtn btn_lg">
                Get Started
              </button>
            </div>

            <div className="landing_image">
            <img src={landingpic} alt="Illustration" />
            
            </div>
          </section>
        </main>
      </section>
      </>

    )
}

export default App;
