import Navbar from './components/Navbar';
import React,{useEffect,useState} from 'react'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
//    const[ data,setData]=useState([{}])
//    useEffect(() => {
//       fetch("http://127.0.0.1:5000/data", {
//        method: 'POST', // Specify the POST method
//        headers: {
//           'Content-Type': 'application/json'
//         },
//        // body: JSON.stringify({ /* your data here */ }) // Replace with actual data
      
//      })
//       .then(res => res.json())
//       .then(data => {
//          console.log(data); // Log the fetched data
//          setData(data.message);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);
  return (
    <>
    <div>
    <Router>
            <Navbar title="Flood Systems2" Home1="Home" Map1="CurrentMap"About1="About Us" />

      <Routes>
        <Route path="/" element={<Home />} />
              </Routes>
    </Router>
    </div>
    </>
  )
}


export default App