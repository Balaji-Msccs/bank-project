import './home.css'
import React from "react";
import Card from 'react-bootstrap/Card';
import bank from '../src/images/bank.webp';
import "./background.css";
export default function Home() {
  return (
   
   <div className='home-background'>
    <br />
      <h1><center style={{ color: 'white'}}>Welcome to Global Bank</center></h1>
     <div> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/><br /> </div>
    <div className="marquee-container">
      
    </div>
  <center>
    <Card style={{ width: '50%' }}>
    
      <Card.Body>
        
        <Card.Text> <br /><br /><br /><br />
       <strong style={{color:'black',backgroundColor: 'white' }}> “At Global bank, we believe in empowering our customers with secure, innovative, and user-friendly banking solutions. Experience the convenience of modern banking tailored to your lifestyle.</strong>
        </Card.Text>
     </Card.Body></Card> 
     <a href="#create" class="glitter-button">Get Started</a>
    </center>
    <br/>
    <br/>
    <br/>
     </div>
  )
}

 