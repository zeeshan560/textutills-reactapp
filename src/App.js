import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#5725BA';
      showAlert("Dark mode has been anabled", "success");
      document.title = "Textutills - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been anabled", "success");
      document.title = "Textutills - Dark Mode";
    }
  }
  return (
    <>
      {/* <Router>       */}
      {/* <Navbar title="My Webs" aboutText="About Us"></Navbar> */}
  
      <Navbar title="TextUtills" mode={mode} aboutText="About" toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
            <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            {/* </Route>
          </Switch> */}
      </div>    
      {/* </Router> */}    
    </>    
  );
}

export default App;
