import React, {Component} from 'react';
import Logo from '../images/ARS-LOGO.svg';




let ContactPage = (props) => {
    return(
        <div className="d-flex justify-content-center flex-column pt-5">
            <div className="mb-5 mt-5">
                <h3 className="mb-5 text-center"> Contact </h3>
                <p>Treehouse track-star gone professional UIX Front-End Developer built on the foundation of clean aesthetic design and human readable code. Believer in the user story and how to bring that to an interactive experience in my development. Currently seeking opportunities in related position.

                </p>
                <p className="text-center d-flex justify-content-center align-items-center mt-5"><img src={props.logo} width="100" height="70"  alt="" /><a className="nav-link" href="mailto:webmaster@example.com">Email Me!</a></p>
            </div>
        </div>
    )
}



class Contact extends Component {
    render() {
        return(
            <ContactPage 
            logo={Logo}/>
        )
    }
}

export default Contact;