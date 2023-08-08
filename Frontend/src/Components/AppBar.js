import React from "react";
import "../CSS/AppBar.css";
import logo from "./../logos/logo.png";
import Movies from "./MoviesSearch";

export default function AppBar(props){
    const ImageMouseOverEvent =(e)=>{
        e.target.style.cursor = 'pointer';
    }
    const HandleSignUP=()=>{
        props.dataFromAppBar("Signup")
    }
    const HandleSignIn=()=>{
        props.dataFromAppBar("Signin")
    }
    const HandleSignOut=()=>{
        sessionStorage.removeItem("user")
        props.dataFromAppBar("Home")
        props.setSinedIn()
    }
    const HandleMore=()=>{props.dataFromAppBar("More")}
    return(
       <div>
        <div className="AppBarBox">
            <img src={logo} alt={logo} className="logoStyle" onClick={()=>{props.dataFromAppBar("Home")}} onMouseOver={ImageMouseOverEvent} />
            <Movies dataFromMovies={props.dataFromAppBar}/>
            {!props.isSinedIn && !sessionStorage.getItem("user")&&(
                <div style={{display:"flex",displayDirection:"row"}}>
                    <button onClick={HandleSignUP} style={{marginRight:"5px"}}>SignUp</button>
                    <button onClick={HandleSignIn}>SignIn</button>
                </div>
            )}
            {props.isSinedIn && sessionStorage.getItem("user")&&(
                <div style={{display:"flex",displayDirection:"row"}}>
                    <button onClick={HandleMore} style={{marginRight:"5px"}}>More</button>
                    <button onClick={HandleSignOut}>SignOut</button>
                </div>
            )}
            
        </div>
       </div>
    );
}