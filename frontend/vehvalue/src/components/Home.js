import React,{useState} from "react";
import './Home.css';
import Dropdown from './Dropdown';
import video from './bgvdo.mp4';
import axios from 'axios';
const seller = ['Dealer', 'Individual'];
const fuel= ['Petrol', 'Diesel', 'CNG', 'Electric'];
const transmission = ['Manual', 'Automatic'];   
const condition = ['Excellent', 'Good', 'Bad'];
const color = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Grey', 'Yellow'];

function Home() {

const handleSubmit = async (e) => {
  e.preventDefault();

 const formData = {
    brand,
    model,
    vehicle_age: age,
    km_driven:kmDriven,
    seller_type: selectedSeller,
    fuel_type: selectedFuel,
    transmission_type: selectedTransmission,
    condition: selectedCondition,
    color: selectedColor
    
  };


  try {
    const res =await axios.post('http://127.0.0.1:5000/data', formData,{
      headers: {
        'Content-Type': 'application/json'  
      }
    });
    console.log("API Response:", res.data);
    alert("Predicted Price: ₹" + res.data.predicted_price);
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
};



//const[selectedColor, setSelectedColor] = React.useState('');
 const [brand, setBrand] = useState('');
const [model, setModel] = useState('');
const [age, setAge] = useState('');
const [kmDriven, setKmDriven] = useState('');

const [selectedSeller, setSelectedSeller] = useState('');
const [selectedFuel, setSelectedFuel] = useState('');
const [selectedTransmission, setSelectedTransmission] = useState('');
const [selectedCondition, setSelectedCondition] = useState('');
const [selectedColor, setSelectedColor] = useState('');

  return (
    <>
    <div style={{ backgroundColor: "#121111", color: "#fff", padding: "20px" }}>
   
 <div className="container">
  <div className="left">
    <video
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }}>

  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
     <div className="overlay-text">
        <h2>“Your Car’s True Value—Predicted by Intelligence.”</h2>
        <p>Smarter Car Pricing Starts Here</p>
        
      </div>
  </div>
  <div className="home-container" style={{paddingLeft:'20px'}}>
       <h1><span>Welcome</span> to the Vehicle Value App</h1>
      <p>Explore the value of your vehicle with us!</p>
  </div>
</div>
<br></br>
 <div className="home-container" style={{backgroundColor:"black"}}>
  <center>
  <input type="text" placeholder="Enter the Car Brand" value={brand} onChange={(e) => setBrand(e.target.value)} /><br />
<input type="text" placeholder="Enter the Car Model" value={model} onChange={(e) => setModel(e.target.value)} /><br />
<input type="text" placeholder="Enter the Car Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
<input type="text" placeholder="Enter the Car kilometers" value={kmDriven} onChange={(e) => setKmDriven(e.target.value)} /><br />

 <Dropdown label="Select Car seller-type:" options={seller} selected={selectedSeller} onSelect={(value)=> setSelectedSeller(value)} />

<Dropdown label="Select Fuel Type:" options={fuel} selected={selectedFuel} onSelect={(value) => setSelectedFuel(value)} />

<Dropdown label="Select Transmission Type:" options={transmission} selected={selectedTransmission} onSelect={(value) => setSelectedTransmission(value)} />

 <Dropdown label="Select Condition:" options={condition} selected={selectedCondition} onSelect={(value) => setSelectedCondition(value)} /> 

 <Dropdown label="Select Color:" options={color} selected={selectedColor} onSelect={(value) => setSelectedColor(value)} /> 

            <input type="submit" name="submit" value="Submit" className="submit-button" onClick={handleSubmit} />
        <input type="reset" name="reset" value="Reset" className="reset-button" onClick={() => window.location.reload()} />
      </center>
      
    </div>
    </div>
    </>
  );
}
export default Home;