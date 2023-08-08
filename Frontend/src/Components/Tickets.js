import React, { useEffect, useState } from "react";
import "./../CSS/Tickets.css"
export default function Tickets(){
    const [tickets,setTickets]=useState([])
    const user=JSON.parse(sessionStorage.getItem('user'))
    const fetchData=async()=>{
        const response=await fetch("http://localhost:8080/tickets/getTicketByUserId?mobileNumber="+user['mobileNumber'])
        setTickets(await response.json());
    }

    useEffect(() => {
        fetchData()
    }, [])
    return(
        <div className="container">
            {tickets.length>0 &&<table>
                <tr>
                    <th>Mobile Number</th><th>Movie</th><th>Theater</th><th>Cost</th><th>Date</th>
                </tr>
                {tickets.map((ticket,index)=>(
                    <tr id={index}>
                        <td>{ticket["mobileNumber"]}</td>
                        <td>{ticket["movieName"]}</td>
                        <td>{ticket["theatre"]}</td>
                        <td>{ticket["cost"]}</td>
                        <td>{ticket["date"]}</td>
                    </tr>
                ))}
            </table>}
            {tickets.length==0 && <p>No Tickets booked so far..</p>}
        </div>
    );
}