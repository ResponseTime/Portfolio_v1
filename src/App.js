import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Cursor from './components/Cursor';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const[load,setLoad] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoad(false)
    }, 3000);
  },[])
  if(load){
    return <>
    <Loading/>
    </>
  }
  
  return (
    <>
     <Cursor/>
     <Navbar/>
    </>
    )
}

export default App;
