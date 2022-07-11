import "./Css/signup.css"
import { useForm } from "react-hook-form";
import Error from "./components/error";
import signuppic from './img/pic2.svg';
import React ,{ useState }  from 'react';
import { useNavigate } from "react-router-dom";
import Web3 from 'web3';
import userContract from "./contracts/users.json";

export default function Register(){
  const navigate = useNavigate();
  const { register, handleSubmit ,formState: { errors }} = useForm();
  const [isError, setError] = useState(false);

  const onSubmit = (data)=>{
    const password = data.password;
    const name = data.name;
    const email = data.email;
    const passwordRetype = data.password2;

    if(password !== passwordRetype){
      setError(true)
      return
    }

    SigninSubmitHandler(name,email,password);

  }

  const SigninSubmitHandler = async (name,email,password) =>{

    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    let accounts = null
    try {
      accounts = await web3.eth.getAccounts()
    } catch(e) {
      // statements
      console.log(e);
    }
    

    if(accounts.length !== 0){
    
    sessionStorage.setItem("web3", web3)

    const networkId = await web3.eth.net.getId();
    const deployedNetwork = userContract.networks[networkId];

    const instance = new web3.eth.Contract(
            userContract.abi,
            deployedNetwork && deployedNetwork.address, //if there is a deployed network then get the address
          );
    try {
      await instance.methods.setnewUser(name,email,password).send({ from: accounts[0] }) //set number 5
      const res = await instance.methods.UserAddedorNot().call()

      if(res[0]){
        alert(res[1])
      } else {
        alert(res[1])
      }

    } catch(e) {
      // statements
      alert("YOU Cancelled the Transaction !")
    }
    
    }

    else {
      if(window.ethereum){
        window.ethereum.request({method:'eth_requestAccounts'})
      .then(res=>{
        // Return the address of the wallet
        
        SigninSubmitHandler(name,email,password)
        }).catch(err => {
          alert("we con't run the app properly if you don't connect your Account")
          return;
        })
      } else alert("You need to install metamask")
       
    }
  }

  const signIn = () => {
        navigate('/SignIn');
    }
  const logger = () =>{
    console.log('changed')
  }

  const styles = {
    section:{
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "50px",
  width: "950px",
  minHeight: "710px"
},
  container: {
  color: "var(--primary)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 10px"
},

  img : {
  position: "relative",
  right: "180px",
  top:"40px",
  width: "70%"
},

  form_div_Signup: {
  marginLeft: "-195px"

},
  h1: {
  textAlign: "center",
  marginBottom: "25px",
  marginTop: "25px"
},
  inputs: {
  marginBottom: "99px"
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

      <section style={styles.section}>
        <div style={styles.container}>

          <div style={styles.img}>
            <img style={{width: "540px"}} src={signuppic} alt="Illustration" />
          </div>

          <div style={styles.form_div_Signup}>
            <h1 style={styles.h1}>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div style={styles.inputs}>

                <div className="InputField">
                  <label>
                    <input type="text" placeholder=" " {...register("name",{required: true})}/>
                    <p>Name</p>
                  </label>
                 {
                 errors.name && errors.name.type == "required"? (
                 	<Error errmsg="You did not typed your name, did you?"/>
                 	)
                 : ""}

                </div>

                

                <div className="InputField">
                  <label>
                    <input type="email" placeholder=" " {...register("email",{required: true})}/>
                    <p>Email</p>
                  </label>
                  {
                 errors.email && errors.email.type == "required"? (
                 	<Error errmsg="We need your Email... To send Emails 😁"/>
                 	)
                 : ""}

                </div>

                <div className="InputField">
                  <label>
                    <input type="password" placeholder=" " {...register("password", {required: true, minLength: 6})}/>
                    <p>Password</p>
                  </label>
                  {
                 errors.password && errors.password.type == "required"? (
                 	<Error errmsg="You need a password, for extra protection 😁"/>
                 	)
                 : ""}
                 {
                 errors.password && errors.password.type == "minLength"? (
                 	<Error errmsg="Password Minimum length is 6 characters"/>
                 	)
                 : ""}

                   </div>

                <div className="InputField">
                  <label>
                    <input type="password" placeholder=" " required {...register("password2", {required:true})}/>
                    <p>Retype Password</p>
                  </label>

                 {
                 errors.password2 && errors.password2.type == "required"? (
                 	<Error errmsg="Retype please"/>
                 	)
                 : ""}
                 {isError? <Error errmsg="Passwords don't match 😯"/> : ""}

                </div>

              </div>


              <div className="buttons_center_form">
                <button className="btn bg_purple" type="submit">Sign UP</button>

                <p>Already have an account ?</p>
                <button type="button" onClick={signIn} className="btn bg_purple">Login</button>
              </div>

            </form>
          </div>

        </div>
      </section>
</div>
</>
  )
}
