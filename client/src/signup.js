import "./Css/signup.css"
import { useForm } from "react-hook-form";
import Error from "./components/error";
import signuppic from './img/pic2.png';
import React from 'react';

export default function Register(){
  
  const { register, handleSubmit ,formState: { errors }} = useForm();

  const onSubmit = (data)=>{
    console.log(JSON.stringify(data))
    
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
            <img src={signuppic} alt="Illustration" />
          </div>

          <div className="form_div">
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputs">

                <div className="field">
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

                <div className="field">
                  <label>
                    <input type="text" placeholder=" " {...register("username",{required: true})}/>
                    <p>Username</p>
                  </label>
                  {
                 errors.username && errors.username.type == "required"? (
                 	<Error errmsg="What is your Username?"/>
                 	)
                 : ""}

                  
                </div>

                <div className="field">
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

                <div className="field">
                  <label>
                    <input type="password" placeholder=" " {...register("password", {required: true, minLength: 6})}/>
                    <p>Password</p>
                  </label>
                  {
                 errors.password && errors.password.type == "required"? (
                 	<Error errmsg="You need a password, for extra protection🤩"/>
                 	)
                 : ""}
                 {
                 errors.password && errors.password.type == "minLength"? (
                 	<Error errmsg="Password Minimum length is 6 characters"/>
                 	)
                 : ""}

                   </div>

                <div className="field">
                  <label>
                    <input type="password" placeholder=" " required {...register("password2", {required:true})}/>
                    <p>Retype Password</p>
                  </label>
                 {
                 errors.password2 && errors.password2.type == "required"? (
                 	<Error errmsg="Retype please"/>
                 	)
                 : ""}

                </div>

              </div>


              <div className="buttons_center">
                <button className="btn bg_purple" type="submit">Sign UP</button>

                <p>Already have an account ?</p>
                <button type="button" className="btn bg_purple">Login</button>
              </div>

            </form>
          </div>

        </div>
      </section>
</div>
</>
  )
}