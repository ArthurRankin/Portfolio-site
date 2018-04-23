import React, {Component} from 'react';
import Logo from '../images/ARS-LOGO.svg';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Home from './Home.js';
import Blog from './Blogs.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import './nav.css';



let NavBar = (props) => {
    return (
        <nav className="main-nav container mb-5 mt-5 pb-3">
            <ul className="nav justify-content-between text-center p-3 border-bottom align-items-center pb-5">
                <li className="nav-item ">
                    <img src={props.Logo} width="100" height="70"  alt="" />
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/blog">Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>


            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />

        </nav>
    )
}


class Nav extends Component {
    render() {
        return(
            <BrowserRouter>
                    <NavBar Logo={Logo}/>
            </BrowserRouter>
        )
    }
}

export default Nav;