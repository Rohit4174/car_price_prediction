import React,{useState} from "react";
import Dropdown from './Dropdown';
import './Calculate.css';
import axios from 'axios';
const seller = ['Dealer', 'Individual'];
const fuel= ['Petrol', 'Diesel', 'CNG', 'Electric'];
const transmission = ['Manual', 'Automatic'];   
const condition = ['Excellent', 'Good', 'Bad'];
const color = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Grey', 'Yellow'];

function Calculate() {
 const API_URL = "https://your-flask-backend.onrender.com/data";

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
    const res =await axios.post('API_URL', formData,{
      headers: {
        'Content-Type': 'application/json'  
      }
    });
    console.log("API Response:", res.data);
    // const price=res.data.predicted_price;
      setPrice("₹" + res.data.predicted_price); // ✅ set the price instead of alert
  } catch (error) {
    console.error("Error:", error);
      setPrice("Error fetching price");
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
  const [price, setPrice] = useState(""); // state to store predicted price

  return (
    <>
    <div className="back">
 <div className="home-container" style={{backgroundColor:"white"}}>
  
  <input type="text" placeholder="Enter the Car Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
<input type="text" placeholder="Enter the Car Model" value={model} onChange={(e) => setModel(e.target.value)} />
<input type="text" placeholder="Enter the Car Age" value={age} onChange={(e) => setAge(e.target.value)} />
<input type="text" placeholder="Enter the Car kilometers" value={kmDriven} onChange={(e) => setKmDriven(e.target.value)} />

 <Dropdown label="Select Car seller-type:" options={seller} selected={selectedSeller} onSelect={(value)=> setSelectedSeller(value)} />

<Dropdown label="Select Fuel Type:" options={fuel} selected={selectedFuel} onSelect={(value) => setSelectedFuel(value)} />

<Dropdown label="Select Transmission Type:" options={transmission} selected={selectedTransmission} onSelect={(value) => setSelectedTransmission(value)} />

 <Dropdown label="Select Condition:" options={condition} selected={selectedCondition} onSelect={(value) => setSelectedCondition(value)} /> 

 <Dropdown label="Select Color:" options={color} selected={selectedColor} onSelect={(value) => setSelectedColor(value)} /> 

           <div> <input type="submit" name="submit" value="Submit" className="submit-button" onClick={handleSubmit} />
        <input type="reset" name="reset" value="Reset" className="reset-button" onClick={() => window.location.reload()} />
      </div>
      </div>
        <div className="output">
          <center>
<input
            type="text"
            value={price}
            readOnly
            placeholder="Your car price will appear here..."
            style={{ width: "300px", textAlign: "center", fontWeight: "bold", fontSize: "16px" ,borderRadius: "10px",  boxShadow: "0 0 10px #cece39" , padding: "10px",borderColor:'#ff6b6b'
}}
          />  </center></div>   
     </div>
    </>
  );
}
export default Calculate;
