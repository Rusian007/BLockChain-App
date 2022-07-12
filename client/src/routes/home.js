import React, { useState,useRef } from "react";
import TopNav from "../components/nav";
import Footer from "../components/footer";
import styles from '../Css/home.module.css';
import { useNavigate } from "react-router-dom";
import userContract from "../contracts/users.json";
import Web3 from 'web3';
import { create } from 'ipfs-http-client';
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  let account = sessionStorage.getItem("accounts")
  const client = create('https://ipfs.infura.io:5001/api/v0');
  const [file, setFile] = useState(null);
  let btnref = useRef(null);

  const GetFIles = (e) => {

    const reader = new FileReader();
    let thefile = reader.readAsArrayBuffer(e.target.files[0]);   

    reader.onloadend = () => {
      thefile = Buffer(reader.result)
      setFile(thefile)
      btnref.current.click()
    }

    showSuccess("File Uploaded for Processing 😄" )
    
    return
    
    //
    
  };
  const UploadFile = async()=>{
    
    console.log(file)
    const added = await client.add(file)
    console.log(added)

    // added.path has the string, Store the string here
    // ############ //
  }

  const showSuccess = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  if(account){
    return (    
  <section className={styles.outerdiv}>
  <button className={styles.hide} ref={btnref} onClick={UploadFile} >Click TO State</button>
  <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <TopNav getTheFile={GetFIles} />

        <div className={styles.main_container}>
          
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
