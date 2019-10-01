// import Page1 from "../book/page1";

import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./landing.css";
import logo1 from "./logoClutch.png";


class Landing extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name: [],
            idx: 0,
            interval: 4000
        }
        // this.heading = "CLUTCH ANALYTICS".split("")
        // this.names = ['Luke Simianer', 'Landon Roberts','Guillermo blanco-bro', 'Gregg Moore'];
        this.names = ['Luke Simianer', 'Landon Roberts', 'Guillermo Blanco', 'Gregg Moore']
        this.delays = [...Array(20)].map(val => {
            let delay = Math.floor((Math.random() * 1000));
            return delay;
        }); 
        this.setDelays = (delays) => this.delays = delays;
        
    }

componentDidMount(){
    let delays = [...Array(20)].map(val => {
        let delay = Math.floor((Math.random() * 1000));
        return delay;
    }); 
    
    this.setDelays(delays);
    setInterval(() => {
        this.setState({
            idx: this.state.idx === this.names.length - 1 ? 0 : this.state.idx + 1,
            interval: this.state.name.length
        })
    }, this.state.interval);
}


render() {
    return(
        <div>
            <div className='container'>
                <div className="glass">
                    {
                        this.names[this.state.idx].split('').map((val, i)=> {
                            // let delay = Math.floor((Math.random() * 1000));
                            // console.log(this.state.idx + ' delay timer')
                            return (<span key={i} className='fancy' style={{animation: `fadeIn 4000ms ${this.delays[i]}ms infinite, animatedBackground 10s linear infinite`}}>{val}</span>)
                        })
                    }
                </div> 
            </div>
            <div className='foot'>
                <footer className='footer'><img  id="logo1" src={logo1} alt=""/> </footer> 
            </div>

                <Link className='linky' to='Page1'> Learn how we build cool shit</Link>
        </div>  

    )   
}
};

export default Landing;