import React from 'react';
import './form.scss';
import { toast } from 'react-toastify';

toast.configure({
    autoClose: 8000,
    draggable: false,
  })
class Register extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        email: "",
        emailError: "",
        phoneNumber: "",
        phoneNumberError: "",
        gender: "",
        genderError: "",
        age: "",
        ageError: "",
        comment: "",
        location: "",
        locationError: ""
    }

    phoneValidator = (phoneNumber) => {
        const mtnRegex = /^078|^077|^070|^079|^075/;
        if(mtnRegex.test(phoneNumber)){

        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
        const value = event.target.value;
        if(event.target.id == 'firstName'){
            if(value.length < 3){
                this.setState({ firstNameError: "Invalid name" });
            }else {
                this.setState({ firstNameError: "" });
            }
        } else if(event.target.id == 'lastName'){
            if(value.length < 3){
                this.setState({ lastNameError: "Invalid name" });
            }else {
                this.setState({ lastNameError: "" });
            }
        } else if(event.target.id == 'email') {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
            if(!re.test(String(value).toLowerCase())){
                this.setState({ emailError :"Invalid Email" });
            }else {
                this.setState({ emailError :"" });
            }
        } else if(event.target.id == 'phoneNumber'){
            const allRegex = /^078|^077|^075|^079|^070/;
            const re = /^[0-9]*$/
            console.log(value.length, '----lenght----');
            if (value.length !== 10 || !allRegex.test(value) || !re.test(value)) { //  || 
                this.setState({ phoneNumberError: "valid format 07***" });
            }else {
                this.setState({ phoneNumberError: "" });
            }
        } else if(event.target.id == 'location'){
            if(value.length < 3){
                this.setState({ locationError: "Please choose a location" });
            }else {
                this.setState({ locationError: "" });
            }
        }
      }

      isChecked = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    render(){
        return(  
            <div className="container register-form">
            <div className="form">
                <div className="note">
                    <p>Register for CodeImpact Classes</p>
                </div>

                <div className="form-content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input onChange={this.handleChange} type="text" id='firstName' className={this.state.firstNameError ? "form-control is-invalid": "form-control is-valid"} placeholder="Your First name *" value={this.state.firstName}/>
                                <span className='text-danger'>{this.state.firstNameError}</span>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} type="text" id='lastName' className={this.state.lastNameError ? "form-control is-invalid": "form-control is-valid"} placeholder="Your First name *" value={this.state.firstName} placeholder="Last Name *" value={this.state.lastName}/>
                                <span className='text-danger'>{this.state.lastNameError}</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input onChange={this.handleChange} type="email" id='email' className={this.state.emailError ? "form-control is-invalid": "form-control is-valid"} placeholder="Your First name *" value={this.state.firstName} placeholder="Your Email *" value={this.state.email}/>
                                <span className='text-danger'>{this.state.emailError}</span>
                            </div>
                            <div className="form-group">
                                <input onChange={this.handleChange} type="text" id='phoneNumber' className={this.state.phoneNumberError ? "form-control is-invalid": "form-control is-valid"} placeholder="Your First name *" value={this.state.firstName} placeholder="Phone Number *" value={this.state.phoneNumber}/>
                                <span className='text-danger'>{this.state.phoneNumberError}</span>
                            </div>
                        </div>
                        <div onChange={this.isChecked} className="col-md-6">
                            <label htmlFor="sel1">Select gender: *</label><br/>
                            <label><input type="radio" value="Male" name="gender"/> Male</label>
                            <br/>
                            <label><input type="radio" value="Female" name="gender"/> Female</label>
                            <br/>
                            <span className='text-danger'>{this.state.genderError}</span>
                        </div>
                        <div onChange={this.isChecked} className="col-md-6">
                            <label htmlFor="sel1">Select age: *</label><br/>
                            <label>
                            <input type="radio" value="5 - 11 years" name="age"/> 5 - 11 years</label>
                            <br/>
                            <label>
                            <input type="radio" value=">= 12 years" name="age"/> >= 12 years</label>
                            <br/>
                            <span className='text-danger'>{this.state.ageError}</span>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="sel1">Select location: *</label>
                                <select onChange={this.handleChange} className="form-control" id="location">
                                    <option value="">--location--</option>
                                    <option value='Ntinda'>Ntinda</option>
                                    <option value='Kiwatule'>Kiwatule</option>
                                    <option value='UMA Show ground Lugogo'>UMA Show ground Lugogo</option>
                                    <option value='Namwokya'>Namwokya</option>
                                    <option value='Muyenga'>Muyenga</option>
                                    <option value='Kiwafu'>Kiwafu</option>
                                    <option value='Naalya'>Naalya</option>
                                    <option value='Bugolobi'>Bugolobi</option>
                                </select>
                                <span className='text-danger'>{this.state.locationError}</span>
                            </div>
                        </div>
                    
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea onChange={this.handleChange} value={this.state.comment} id='comment' className="form-control" rows="5" id="comment" placeholder="Comments and/or questions"></textarea>
                            </div>
                        </div>
                        
                        
                    </div>
                    <button type="button" className="btnSubmit">Submit</button>
                </div>
            </div>
        </div>
        )
    }
}

export default Register;