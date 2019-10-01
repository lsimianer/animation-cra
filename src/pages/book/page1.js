import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logoClutch.png";
import "./page1.css";


class Page1 extends Component {
render() {
    return(
        <div>
            <div className='container'>
                <div className="page">
                    <h1 className="header">How the Rater works</h1>
                    <ol>
                        <li>Third party raters send requests in XML or JSON format to the traffic controller</li>
                        <li>The Traffic Controller uses Spark plugs to fill in required data fields such as MVR, Credit, and vehicle symbols</li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>

                    </ol>
                </div> 
            </div>
            <div className='bottom'>
            <Link className='linky' id='last' to="/"> Home</Link>
            <footer className='footer'><img  id="logo" src={logo} alt=""/> </footer> 
            <Link className='linky' id='next' to="../book/page2.js"> Next Page</Link>

            </div>


        </div>  

    )   
}
};


export default Page1;