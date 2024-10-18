import './App.css';
import Navbar from './components/Navbar.js'
import FormSubmission from './components/FormSubmission.js';
import About from './components/About.js'
import React, {useState} from 'react'
import Alert from './components/Alert.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function MyApp(){
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [btnText, setBtnText] = useState('Dark Mode')


  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setBtnText('Light Mode')
      document.body.style.backgroundColor = "rgb(33, 37, 41)"
      document.body.style.color = "white"
      showAlert("Dark mode is Enabled", "success")
    }
    else{
      setMode('light');
      setBtnText('Dark Mode')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode is Enabled", "success")
      
      
    }
  }
   
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      
      setAlert(null, {
        
      })
 
    }, 1500);
    
  }

  return(
    <>

    {/* This is Textutils Project */}
     <Router>

      <Navbar title="TextUtils" navComponent1="Home" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Alert alert={alert}/>
   
      
    <div className="container my-3" >
      
    <Routes>
            {/* Updated to use `element` prop */}
            <Route path="/About" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <FormSubmission
                  heading="Enter the text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
    </Routes>


    </div>

    
     </Router>

   
    
      
   
   </>
  );
}




 
