import React, { useState, useEffect } from "react";
import "./App.css";
import { get } from "./httpService";

function App() {
  const [name, setName] = useState("");
  const getServerName = async () => {
    const { data } = get("");
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
