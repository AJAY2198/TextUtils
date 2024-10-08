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
 
  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode =(cls)=>{
    removeBodyClasses();
    if(typeof  cls === 'string'){
      document.body.classList.add('bg-' +cls);  
    }else{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#021a33';
      showAlert("Dark mode has been enabled", "success");
      // document.title ="Notepad - Dark Mode";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title ="Notepad - Light Mode";
    }
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
  //adding comment
  return (
    <>



        <Router>
        <NavBar title="Notepad" mode={mode} toggleMode ={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">

        <Routes >
        <Route exact path="/about" element ={<About mode={mode}/>}/>
        <Route exact path="/" element = {<TextForm heading ="Try Notepad - Word Counter, Character counter" mode={mode} showAlert={showAlert}/>}/>
       
        </Routes >
      </div>
    </Router>
     
    </>
  );
}

export default App;
