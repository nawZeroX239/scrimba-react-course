import React from "react"
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

export default function() {
    return (
        <div className="container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}