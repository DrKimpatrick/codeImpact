import React from 'react';
import './callToAction.scss';
import './modal.scss';
import Forms from './forms';

class CallToAction extends React.Component {
    state = {
        closeSpan: ""
    }
    componentDidMount(){
        // Get the modal
        var modal = document.getElementById("registerModal");

        // Get the <span> element that closes the modal
        var span = document.querySelectorAll(".closeRegister")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }

        this.setState({closeSpan: span});
        console.log(this.state);
        const registerButton = document.getElementById('register-button');

        registerButton.addEventListener('click', () => {
            modal.style.display = "block";
        })

    }

    closeButton = () => { 
        this.state.closeSpan.click();
    }

    render(){
        return(
            <div className='actionWrapper' id='apply'>
                <div className='innerWrapper'>
                    <h2>Ready to begin ?</h2>
                    <p>Enroll in the codeImpact program and build your best future today</p>
                    <button className='button' id='register-button'>Register for our classes</button>
                </div>
                <div id="registerModal" className="modal modalRegister">
                    <span className="closeRegister">&times;</span>
                    <div className='modal-content modal-content-register'>
                        <Forms closeSpan={this.closeButton}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CallToAction;