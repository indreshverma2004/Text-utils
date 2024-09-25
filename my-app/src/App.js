import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const makeAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = 'grey';
      makeAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      makeAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutil" abouttext="About" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Alert alert={alert} />

          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm makeAlert={makeAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
