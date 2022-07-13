import React, {useEffect} from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import Web3 from 'web3';
import "./Css/landing.css";
import landingpic from './img/land.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const App = () =>{
  const navigate = useNavigate();
  

  const signIn = () => {
        navigate('/SignIn');
    }
  const signUp = () => {
        navigate('/register');
    }

    useEffect(() => {
    // Update the document title using the browser API
    document.title = `LANDING | Cloud`;
  }, [1]);

  /*const doSomething = async() =>{

    if(startTrac){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    sessionStorage.setItem("web3", web3)

    const accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = SimpleStorageContract.networks[networkId];

    const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address, //if there is a deployed network then get the address
          );
    await instance.methods.set(5).send({ from: accounts[0] }) //set number 5
    const res = await instance.methods.get().call() //get number 5
    alert(`Transaction is successful , Your Number is : ${res}`)
    }
    else{
      if(window.ethereum){
        window.ethereum.request({method:'eth_requestAccounts'})
      .then(res=>{
        // Return the address of the wallet
        console.log(res) 
        startTrac = true
        doSomething()
        }).catch(err => {
          alert("we con't run the app properly if you don't connect your Account")
          return;
        })
      } else alert("You need to install metamask")
       
    }
  } */

  /*
  
 if(window.ethereum){
    try {
      
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(res=>{
        // Return the address of the wallet
        
        startTrac = true
        }).catch(err => {
          alert("we con't run the app properly if you don't connect your Account")
        })

    } catch(e) {
      
      console.log(e);
    }
      
    }else{
      
      alert("install metamask extension!!")
    }
    */

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
                <button onClick={signIn} className="landbtn">
                      Login
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main className="main">
          <section className="landing">
            <div className="landing_text">
              <h1 className="h1">Blockchain Cloud</h1>
              <p className="p">Blockchain Cloud service</p>
              <button onClick={signUp} className="landbtn btn_lg">
                Get Started
              </button>
            </div>

            <div className="landing_image">
            <img style={{width : "800px"}} src={landingpic} alt="Illustration" />
            
            </div>
          </section>
        </main>
      </section>
      </>

    )
}

export default App;
