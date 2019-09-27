import React, { Component } from "react";
// import {Link} from "react-router-dom";
import "./landing.css";
import logo from "./logoClutch.png";

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = { 
            name: [],
            idx: 0
        }
        // this.heading = "CLUTCH ANALYTICS".split("")
        // this.names = ['Luke Simianer', 'Landon Roberts','Guillermo blanco-bro', 'Gregg Moore'];
        this.names = ['Luke Simianer', 'Landon Roberts', 'Guillermo Blanco', 'Gregg Moore']
        this.delays = [...Array(50)].map(val => {
            let delay = Math.floor((Math.random() * 1000));
            return delay;
        }); 
    }

componentDidMount(){
    setInterval(() => {
        this.setState({
            idx: this.state.idx === this.names.length - 1 ? 0 : this.state.idx + 1
        })
    }, 8400)
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
                            return (<span key={i} className='fancy' style={{animationDelay: `${this.delays[i]}ms`}}>{val}</span>)
                        })
                    }
                </div> 
            </div>
            <footer className='footer'><img  id="logo" src={logo} alt=""/> </footer> 
        </div>  

    )   
}
};

export default Landing;