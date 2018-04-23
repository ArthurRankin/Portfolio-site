import React, {Component} from 'react';
import './home.css'
import LGLogo from '../images/ARS-LOGO.svg';




let HomePage = (props) => {
    return(
        <div className="home-body container d-flex justify-content-center mt-5 align-items-center">
            <div className="d-flex flex-column align-items-center">
                <p className="greet-1 pr-3">Welcome</p>
                <p className="greet-2 pr-5">to</p>
                <p className="greet-3 pr-3">the</p>
                <p className="greet-4 pl-5">Portfolio</p>
                <p className="greet-5 pl-4">of</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center pl-5 ml-5">
                <img src={props.biglogo} className="img-fluid main-logo" width="225" height='225' alt="" />
                <h1 className="main-logo display-2 font-weight-light">Arthur Rankin</h1>
            </div>
        </div>
    )
}



class Home extends Component {


    render() {
        return(
            <div className="mt-5 pt-5">
                <HomePage biglogo={LGLogo} />
            </div>
        )
    }
}

export default Home;