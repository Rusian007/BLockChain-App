
import './App.css';
import React from "react";
import { Link } from "react-router-dom";


function App() {

  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) =>{
       // console.log(data)
       setData(data.message)
     });
  }, []);

  return (
    <div className="App">
    <nav>
    <Link to="/about">About us</Link>
    <h2> {data} </h2>
    </nav>
    </div>
  );
}

export default App;
