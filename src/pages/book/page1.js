import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logoClutch.png";
import "./page1.css";
import Container from 'react-bootstrap/Container'

import ReactColorSquare from "lukas-npm"; //calls in component



class Page1 extends Component {
render() {
    return(
        <div>
            <Container id="containerMain">

            <ReactColorSquare height={150} color="blue" text="Hello World!" /> 
                            {/* component called in */}

            </Container>
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