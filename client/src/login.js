import React from "react";
import loginpic from './img/pic3.png';
import userContract from "./contracts/users.json";
import './Css/login.css'
import { useNavigate } from "react-router-dom";
import Web3 from 'web3';

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
    sessionStorage.setItem("web3", web3)

    const accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = userContract.networks[networkId];

    const instance = new web3.eth.Contract(
            userContract.abi,
            deployedNetwork && deployedNetwork.address, //if there is a deployed network then get the address
          );

    
    const res = await instance.methods.checkPassword(password).call();
    if(res[0]){
      alert("Your id is found")
    }
    else alert(`Transaction is successful : ${res[1]}`)

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

  return (
    <>

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

        <section className="section">
          <div className="container">

            <div className="img">
              <img src={loginpic} style={{width :"520px"}} alt="Illustration" />
            </div>

            <div className="form_div">
              <h1>Login</h1>

              <form onSubmit={loginSubmit}>
             
             
                <div className="inputs">
                  

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
