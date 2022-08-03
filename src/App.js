import Home from "./pages/Home";
import Write from "./pages/Write"; 
import {Route, Routes} from "react-router-dom";
import './App.css';
import React from "react"


function App() {
 
  return (
    <div className="App" style={{display: "flex", gap:10}}>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/write" element={<Write/>} />
        </Routes>

    </div>
  );
}

export default App;
