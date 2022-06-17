import React from "react";
import loginpic from './img/pic3.png';
import './Css/login.css'


export default function SignIn() {


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

              <form action="#" method="POST">
             
             
                <div className="inputs">
                  <div className="field">
                    <label>
                      <input name="username" id="input-username-for-credentials-provider" type="text" placeholder=" " required autoComplete="off"/>
                      <p>Username</p>
                    </label>
                  </div>

                  <div className="field">
                    <label>
                      <input name="password" id="input-password-for-credentials-provider" type="password" placeholder=" "/>
                      <p>Password</p>
                    </label>
                  </div>
                </div>


                <div className="buttons_center">
                  <button className="btn bg_purple" type="submit">Login</button>

                  <p>Not Signed up yet ?</p>
                  <button type="button" className="btn bg_purple">Sign Up</button>
                </div>

              </form>
            </div>

          </div>
        </section>
        </div>

    </>
  )
}
