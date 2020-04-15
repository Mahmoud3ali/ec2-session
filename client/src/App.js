import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const getServerName = async () => {
    const { data } = await axios.get("/");
    setName(data?.name);
  };

  useEffect(() => {
    getServerName();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p> {name} </p>
      </header>
    </div>
  );
}

export default App;
