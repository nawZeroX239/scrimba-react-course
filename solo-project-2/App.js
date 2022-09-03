import React from "react"

import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
export default function App() {
    let cards = []
    for (let i = 0; i < data.length - 1; i++) {
        cards.push(<Card key={i} {...data[i]}/>)
        cards.push(<hr className="line"/>)
    }
    if (data.length > 0) {
        cards.push(<Card key={data.length-1} {...data[data.length - 1]}/>)
    }
    console.log(data.length);
    return (
        <div className="app--container">
            <Navbar/>
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}