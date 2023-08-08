import React, { useEffect, useState } from 'react';
import AppBar from './AppBar';
import AppBarOptionsDescription from './AppBarOptionsDescriptions';
import Carousel from './Carousel';
import './../CSS/Screen.css'
import MoviesDisplay from './MoviesDisplay';
import Book from './Book';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import Tickets from './Tickets';

export default function Screen() {
    const sessionuser = JSON.parse(sessionStorage.getItem("user"))
    const [activeScreen, setActiveScreen] = useState("Tickets")
    const [movieBookData, setmovieBookData] = useState("")
    const [isSinedIn, setIsSignedIn] = useState()


    useEffect(() => {
        if (sessionuser)
            setIsSignedIn(true)
        else
            setIsSignedIn(false)
    }, [])
    const setDataForBook = (Moviedata) => {
        setmovieBookData(Moviedata)
        setActiveScreen("Book")
    }
    const setScreenFunction = (data) => {
        setActiveScreen(data)
    }
    const setIsSinedInFunction = () => {
        setIsSignedIn(!isSinedIn)
    }

    const carouselData = [
        "Sign up Today and get 50% off on your First Booking.",
        "Free Pop Corn and Drink on your Firstever Booking.",
        "Go Premiere & Bask in $5 Bonus Bucks"
    ]
    switch (activeScreen) {
        case "Home":
            return (
                <div className='ScreenContainer'>
                    <AppBar dataFromAppBar={setScreenFunction} isSinedIn={isSinedIn} setSinedIn={setIsSinedInFunction} />
                    <Carousel carouselData={carouselData} />
                    <MoviesDisplay dataFromCard={setDataForBook} />
                </div>
            );
        case "Book":
            return (
                <div className='ScreenContainer'>
                    <AppBar dataFromAppBar={setScreenFunction} isSinedIn={isSinedIn} setSinedIn={setIsSinedInFunction} />
                    {sessionuser && (<Book data={movieBookData} dataFromAppBar={setScreenFunction} />)}
                    {!sessionuser && (setScreenFunction("Signin"))}
                </div>
            );
        case "Signup":
            return (
                <div className=''>
                    <AppBar dataFromAppBar={setScreenFunction} isSinedIn={!isSinedIn} setSinedIn={setIsSinedInFunction} isLoginPage={true} />
                    <Signup setScreen={setScreenFunction} setSinedIn={setIsSinedInFunction} />
                </div>
            );
        case "Signin":
            return (
                <div className=''>
                    <AppBar dataFromAppBar={setScreenFunction} isSinedIn={!isSinedIn} setSinedIn={setIsSinedInFunction} />
                    <Login dataFromAppBar={setScreenFunction} screen={"Home"} setSinedIn={setIsSinedInFunction} />
                </div>
            );
        case "Profile":
            return (
                <div className=''>
                    <AppBar dataFromAppBar={setScreenFunction} isSinedIn={isSinedIn} setSinedIn={setIsSinedInFunction} />
                    <Profile/>
                </div>
            );
        case "Tickets":
            return (
                <div className=''>
                    <AppBar dataFromAppBar={setScreenFunction} isSinedIn={isSinedIn} setSinedIn={setIsSinedInFunction} />
                    <Tickets />
                </div>
            );
        default:
            return (
                <div className='ScreenContainer'>
                    <AppBar dataFromAppBar={setScreenFunction} isSinedIn={isSinedIn} />
                    <Carousel carouselData={carouselData} />
                    <AppBarOptionsDescription activeScreen={activeScreen} dataFromAppBar={setScreenFunction} />
                    <MoviesDisplay dataFromCard={setDataForBook} />
                </div>
            );
    }
}