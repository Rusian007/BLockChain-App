
import './App.css';
import React from "react";
import { Link } from "react-router-dom";


function App() {

  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
    <nav>
    <Link to="/about">About us</Link>
    </nav>
    </div>
  );
}

export default App;
