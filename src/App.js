import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const toggleMode = () => {
    if (mode ==='light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enable", "succed");
      document.title = "TextUtils : Drak mode"
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is enable", "succed");
      document.title = "TextUtils : light mode"
    }
  }


  return (
    <>


        <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          
          < Route path="/"
            element= {<TextForm heading="Enter the text to analyse: " mode={mode}/>} /> 
          </Routes>
          </BrowserRouter>
 
   
      
    </>
  );
}
export default App;




