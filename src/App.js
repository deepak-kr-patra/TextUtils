import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light" || mode === "dark-2") {
      document.body.style.backgroundColor = "#042743";
      setMode("dark")
      showAlert("switched to dark mode.", "success")
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light")
      showAlert("switched to light mode.", "success")
    }
  }

  return (
    <>
      {/* <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze below" mode={mode} showAlert={showAlert} />} />
            <Route exact path="about/*" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Try TextUtils - Word Counter, Character Counter, And More" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
