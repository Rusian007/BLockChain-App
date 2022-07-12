import React from "react";
import loginpic from './img/pic3.svg';
import userContract from "./contracts/users.json";
import './Css/login.css'
import { useNavigate } from "react-router-dom";
import Web3 from 'web3';
import { toast, ToastContainer } from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  let startTrac = false

  const signUp = () => {
        navigate('/register');
    }

  const loginSubmit = (e)=>{
     e.preventDefault();
     const password = e.target.password.value
     

     loginSubmitHandler(password);
  }
  
  const loginSubmitHandler = async (password) =>{
    if(startTrac){
    
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    let accounts = await web3.eth.getAccounts()
    accounts = accounts[0]

    let networkId = await web3.eth.net.getId();
    

    const deployedNetwork = userContract.networks[networkId];

    const instance = new web3.eth.Contract(
            userContract.abi,
            deployedNetwork && deployedNetwork.address, //if there is a deployed network then get the address
          );

    
    const res = await instance.methods.checkPassword(password,accounts).call();
    
    if(res[0]){
      showSuccess(res[1])
      sessionStorage.setItem("accounts", accounts)
      setTimeout(function(){ navigate('/home'); }, 4000);
      
    }
    else {
      
      showError(res[1])
    }

    }
    else{
      if(window.ethereum){
        window.ethereum.request({method:'eth_requestAccounts'})
      .then(res=>{
        // Return the address of the wallet
        startTrac = true
        loginSubmitHandler(password)
        }).catch(err => {
          alert("we con't run the app properly if you don't connect your Account")
          return;
        })
      } else alert("You need to install metamask")
       
    }
    
    
  }

  const showError = (msg) => {
    toast.error(msg, {
    position: "top-center",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
  };

  const showSuccess =(msg)=>{
    toast.success(msg, {
    position: "top-center",
    autoClose: 3500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  }

  // Styles
  const styles = {

  section: {
  padding:"0px 30px",
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "50px",
  width: "850px",
  height: "550px",
},
  container: {
  color: "var(--primary)",
  display:"flex",
  justifyContent:"center",
  alignItems: "center",
  padding: "10px 25px",
},
  img: {
  position: "relative",
  right: "130px",
  top: "20px",
  width: "100%",
},
  form_div: {
  marginLeft: "-200px"
},

  inputs: {
  marginBottom: "160px"
},
h1: {
  marginTop: "40px",
  textAlign: "center",
  marginBottom: "60px"
}

  }

  return (
    <>
    <ToastContainer
    toastStyle={{ backgroundColor: "black" , color: "white"}}
    position="top-center"
    autoClose={3500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />

    <div className="body">
    <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
        </div >

        <section style={styles.section}>
          <div style={styles.container}>

            <div style={styles.img}>
              <img src={loginpic} style={{width :"530px"}} alt="Illustration" />
            </div>

            <div style={styles.form_div}>
              <h1 style={styles.h1}>Login</h1>

              <form onSubmit={loginSubmit}>
             
             
                <div style={styles.inputs}>
                  

                  <div className="field">
                    <label>
                      <input name="password" id="input-password-for-credentials-provider" type="password" required placeholder=" "/>
                      <p>Password</p>
                    </label>
                  </div>
                </div>


                <div className="buttons_center">
                  <button className="btn bg_purple" type="submit">Login</button>

                  <p>Not Signed up yet ?</p>
                  <button onClick={signUp} type="button" className="btn bg_purple">Sign Up</button>
                </div>

              </form>
            </div>

          </div>
        </section>
        </div>

    </>
  )
}
