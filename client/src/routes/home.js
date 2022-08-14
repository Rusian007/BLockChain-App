import React, { useState, useRef, useEffect } from "react";
import TopNav from "../components/nav";
import Footer from "../components/footer";
import styles from "../Css/home.module.css";
import userContract from "../contracts/users.json";
import Web3 from "web3";
import process from 'process'
import { useNavigate } from "react-router-dom";
//import { create} from "ipfs-http-client";
import { toast, ToastContainer } from "react-toastify";
import { FiDownload } from "react-icons/fi";
import { FiLink } from "react-icons/fi";
import copy from "copy-to-clipboard";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
//import { Web3Storage } from 'web3.storage'
//const ipfsClient = require('ipfs-http-client');

const Home = () => {
  let account = sessionStorage.getItem("accounts");
  //const client = create("https://ipfs.infura.io:5001/api/v0");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [urls, setUrls] = useState(null);
  //const projectID ="b4316d4c35e44f83a042a717f86acbb6"
  //const projectSecret = 'c920...XXX';

  /*const auth = 'Basic ' + Buffer.from(projectID + ':' + projectSecret).toString('base64');
  const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
})
*/

const getAccessToken =()=> {
  // If you're just testing, you can paste in a token
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY5MUJjQUYzRDkxNzZGN2RDYTc0Y2M4NjVmM2Q0RTVBMDdCZjI2QmYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjA0NTg0ODU1MTMsIm5hbWUiOiJibG9ja2RldiJ9.eVct-MSeamw2l67NumcAHJMiVu2DXLP8qpdCArjeXRI"
}

const makeStorageClient =()=> {
  return new Web3Storage({ token: getAccessToken() })
}

  let btnref = useRef(null);
  let web3 = null,
    networkId = sessionStorage.getItem("networkId"),
    instance = null;

  if (account) {
    web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const deployedNetwork = userContract.networks[networkId];
    instance = new web3.eth.Contract(
      userContract.abi,
      deployedNetwork && deployedNetwork.address //if there is a deployed network then get the address
    );
  } 

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `HOME | Cloud`;
    if (account) {
    ReturnHash();
  }
  }, [1]);

  const GetFIles = e => {
    const reader = new FileReader();
    let thefile = reader.readAsArrayBuffer(e.target.files[0]);
    let thename = e.target.files[0].name
    let theType = thename.split('.').pop();

    if(theType === "png" || theType === "jpg" || theType === "pdf" || theType === "txt" || theType === "svg" || theType === "html" || theType === "css"){
      
    
    
    setFileName(thename)
    setFileType(theType)
    console.log("File is being set !")
    setFile(e.target.files[0]);
    
    reader.onloadend = () => {
      thefile = Buffer(reader.result);
      //setFile(thefile);
      btnref.current.click();
    };

    showSuccess("File Uploaded for Processing 😄");

    return;
  }
    else{
      showError("This Type of File is not allowed :(")
      return
    }

    //
  };
  const UploadFile = async () => {
   // const added = await client.add(file); //error here fix later MUST
    const client = makeStorageClient()
    let files =[]
    files.push(file)
    const cid = await client.put(files)
    console.log(' ', cid)
    showSuccess("File send to WEB3, waiting to confirm 😊");
    // added.path has the string, Store the string here
    // ############ //
    // https://ipfs.io/ipfs/<CID>

   await instance.methods
      .HashStore(account, cid, fileName, fileType)
      .send({ from: account });
    ReturnHash();
   showSuccess("Upload Complete 😍");
  };

  const ReturnHash = async () => {
    const res = await instance.methods.HashSetReturn(account).call();
    setUrls(res);
  };

  const DownloadFile =(FileName, FileHash, FileType) =>{
    //console.log(FileHash);
    console.log("Function called");
    var xhr = new XMLHttpRequest();

    //send feedBack
    showSuccess("File Download initiated : 😊 : Wait for Processing : 😖")

    xhr.open('GET', `https://api.ipfsbrowser.com/ipfs/get.php?hash=${FileHash}/${FileName}`, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(this.response);
    var tag = document.createElement('a');
    tag.href = imageUrl;
    tag.target = '_blank';
    tag.download = `${FileName}`;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.onerror = err => {
    alert('Failed to download, Try again later 😵');
  };
  xhr.send();
  }

  const showError = msg =>{
    toast.error(msg, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
  }

  const showSuccess = msg => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  if (account) {
    return (
      <section className={styles.outerdiv}>
        <button className={styles.hide} ref={btnref} onClick={UploadFile}>
          Click TO State
        </button>

        <ToastContainer
          position="top-center"
          autoClose={2500}
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
          {urls
            ? urls.map((element, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <div className={styles.card_container}>

                      <div className={styles.head}>

                        <h2>{element.FileName}</h2>

                        <div className={styles.subType}>
                          <span> {element.FileType} </span>
                        </div>

                      </div>

                      <div className={styles.btn_div}>

                        <button onClick={()=> DownloadFile(element.FileName, element.FileHash, element.FileType)} className={styles.bg_blue}><FiDownload /></button>

                        <button onClick={()=> {
                          let url = `https://ipfs.io/ipfs/${element.FileHash}/${element.FileName}`;
                          copy(url);
                          showSuccess("Link Copied")
                        }} className={styles.bg_red}><FiLink /></button>
                      </div>

                    </div>
                  </div>
                );
              })
            : ""}
        </div>

        <Footer />
      </section>
    );
  } else {
    return (
      <>
        <h2 style={{ textAlign: "center", padding: "40px" }}>
          {" "}
          You Need To Log In First{" "}
        </h2>
      </>
    );
  }
};

export default Home;
