import React from "react"

export default function Main() {
    return (
        <div className="main">
            <h1 className="main--name">Naw Naw</h1>
            <h4 className="main--job-title">CompSci student</h4>
            <h6 className="main--url">website coming soon</h6>
            <div className="main--contacts">
                <button className="main--contacts-b1" type="button">
                    <img src="./Mail.png" /> <p>Email</p> 
                </button>

                <button className="main--contacts-b2" type="button">
                    <img src="./linkedin.png" /> <p> LinkedIn</p>
                </button>
            </div>
            <div className="main--facts">
                <h2>About</h2>
                <p> Hello, world. I am a computer science student in my third year and I enjoy spending my time problem solving.
                    However most of my time this summer had been spend on learning new technologies that can hopefully land me an internship next summer. </p>
                <h2> Interests </h2>
                <p>Problem solving. Exploring Nature. Comics Fan. Anime Fan. Redditing. Drinking Tea. Good Nap.</p>
            </div>
        </div>
    )
}
