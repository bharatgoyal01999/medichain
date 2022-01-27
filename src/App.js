import logo from './logo.svg';
import React from 'react';
import Home from './routes/index';
import Doctor from './routes/doctor';
import Patient from './routes/patient';
import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'



function App() {
  return (
    <Router>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/doctor/:publicKey' element={<Doctor />}/>
    <Route path='/patient/:publicKey' element={<Patient />}/>
  
    </Routes>
    </Router>
  );
}

export default App;
