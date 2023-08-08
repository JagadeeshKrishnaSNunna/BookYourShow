import React, { useState } from "react";
import "../CSS/Book.css"

export default function Book(props){
    const [price,setPrice]=useState(1)
    const user=JSON.parse(sessionStorage.getItem('user'))
    const HandleBooking=async()=>{
        const response = await fetch('http://localhost:8080/tickets/bookTicket', {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            { 
                "ticketId": Date.now().toString(),
                "movieName": props.data.title,
                "theatre": props.data.theater,
                "cost": '$'+ Number(17.99*price).toFixed(2),
                "mobileNumber": user['mobileNumber'],
                "date": new Date(Date.now()).toString(),
              }
        )
      })
      const resp=await response.json()
        alert("Your ticket is Conformed.");
        props.dataFromAppBar("Home")
    }
    return(
        <div className="mainContainer">
            

            <img src={props.data.posterUrl}/>
            <h4>Movie : {props.data.title} [{props.data.year}]</h4>
            <h4>Theater: {props.data.theater}</h4>
            <label>Choose number of tickets:</label>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button style={{margin:"10px",width:"50px"}} onClick={()=>{price>1?setPrice(price-1):setPrice(1)}}>-</button>
                <h6>{price}</h6>
                <button style={{margin:"10px",width:"50px"}} onClick={()=>{setPrice(price+1)}}>+</button>
            </div>
            <div>
                <h3>Total Price : ${Number(17.99*price).toFixed(2)}</h3>
            </div>
            <button style={{width:"300px"}} onClick={HandleBooking}>Conform Booking.</button>
        </div>
    );
}