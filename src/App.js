import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
 
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#021a33';
      showAlert("Dark mode has been enabled", "success");
      document.title ="Notepad - Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title ="Notepad - Light Mode";
    }
    
  };

  var showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>



        <Router>
        <NavBar title="Notepad" mode={mode} toggleMode ={toggleMode} />
        <Alert alert={alert}/>
      <div className="container my-3">

        <Routes >
        <Route exact path="/about" element ={<About/>}/>
        <Route exact path="/" element = {<TextForm heading ="Enter your notes" mode={mode} showAlert={showAlert}/>}/>
        </Routes >
      </div>
    </Router>
     
    </>
  );
}

export default App;
