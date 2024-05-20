import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import Dashboard from './Dashboard';
import { useEffect, useState } from 'react';


function App() {
  const[items,setItem]=useState([])
  useEffect(()=>{
    const abc = localStorage.getItem('UserInfo');
    if (abc) {
      setItem(abc);
    }

  },[]);
  return (
    <div className="App">
      
      {items==null ? < SignIn/> : <Dashboard/>}
      
    </div>
  );
}

export default App;
