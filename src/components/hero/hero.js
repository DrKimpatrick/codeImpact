import React from 'react';
import './hero.scss';
import Forms from '../callToAction/forms';

class Hero extends React.Component {
    state = {
        closeSpan: ""
    }
    componentDidMount(){
        // Get the modal
        var modal = document.getElementById("registerModalTop");

        // Get the <span> element that closes the modal
        var span = document.querySelectorAll(".closeRegister")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }

        this.setState({closeSpan: span});
        console.log(this.state);
        const registerButton = document.getElementById('register-button-top');

        registerButton.addEventListener('click', () => {
            modal.style.display = "block";
        })

    }

    closeButton = () => { 
        this.state.closeSpan.click();
    }
    render(){
        return(
            <div className='container-fluid hero-container' id='home'>
        <div className='row'>
            <div className='col-lg-4 col-md-5 col-12 img-col d-none d-lg-flex v'>
                <div className='notes-wrapper'>
                    <div className='my-auto'>
                        <h2>Be in demand</h2>
                        <p>Learn the latest tech skills to propel your career forward</p>
                        <p>Real-world projects from industry experts</p>
                        <p>1-on-1 technical mentor</p>
                        <p>Personal career coach and career services</p>
                        <button className='my-auto' id="register-button-top">Register for classes</button>
                    </div>
                </div>
            </div>
            <div className='col-lg-8 col-md-12 col-12 img-col my-auto x'>
                <div className='hero-heading-wrapper'>
                    <h2><span>GET</span> EMPOWERED TO KICK START YOUR TECH CAREER</h2>
                </div>
            </div>
            <div id="registerModalTop" className="modal modalRegister">
                    <span className="closeRegister">&times;</span>
                    <div className='modal-content modal-content-register'>
                        <Forms closeSpan={this.closeButton}/>
                    </div>
                </div>
        </div>
    </div>
        )
    }
}


export default Hero;