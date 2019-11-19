import React from 'react';
import './form.scss';
import { toast } from 'react-toastify';
import axios from 'axios';

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

    baseUrl = 'https://codeimpact-api.herokuapp.com';

    setStateAsync(state) {
        return new Promise((resolve) => {
          this.setState(state, resolve)
        });
    }

    handleChange = async (event) => {
        // await this.setStateAsync({ [event.target.id]: event.target.value });
        this.setState({ [event.target.id]: event.target.value });
        const value = event.target.value;
        if(event.target.id === 'firstName'){
           this.validateFirstName(value);
        } else if(event.target.id === 'lastName'){
            this.validateLastName(value);
        } else if(event.target.id === 'email') {
            this.validateEmail(value);
        } else if(event.target.id === 'phoneNumber'){
            this.validatePhoneNumber(value);
        } else if(event.target.id === 'location'){
            this.validateLocation(value);
        }
      }

    isChecked = async (event) => {
    // this.setState({ [event.target.name]: event.target.value });
    await this.setStateAsync({ [event.target.name]: event.target.value });
    }

    validateFirstName = async (firstName) => {
    if(firstName.length < 3){
        // this.setState({ firstNameError: "Invalid name" });
        await this.setStateAsync({ firstNameError: "Invalid name" });
    }else {
        // this.setState({ firstNameError: "" });
        await this.setStateAsync({ firstNameError: "" });
    }
    }

    validateLastName = async (lastName) => {
        if(lastName.length < 3){
            // this.setState({ lastNameError: "Invalid name" });
            await this.setStateAsync({ lastNameError: "Invalid name" });
        }else {
            // this.setState({ lastNameError: "" });
            await this.setStateAsync({ lastNameError: "" });
        }
    }

    validateEmail = async (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!re.test(String(email).toLowerCase())){
            // this.setState({ emailError :"Invalid Email" });
            await this.setStateAsync({ emailError: "Invalid Email" });
        }else {
            // this.setState({ emailError :"" });
            await this.setStateAsync({ emailError: "" });
        } 
    }

    validatePhoneNumber = async (value) => {
        const allRegex = /^078|^077|^075|^079|^070/;
            const re = /^[0-9]*$/;
            if (value.length !== 10 || !allRegex.test(value) || !re.test(value)) { //  || 
                // this.setState({ phoneNumberError: "valid format 07***" });
                await this.setStateAsync({ phoneNumberError: "valid format 07***"  });
            }else {
                // this.setState({ phoneNumberError: "" });
                await this.setStateAsync({ phoneNumberError: "" });
            }
    }
    validateAge = async (value) => {
       if(!value){
        //    this.setState({ageError: "Please select age"})
        await this.setStateAsync({ ageError: "Please select age" });
       } else {
        // this.setState({ageError: ""})
        await this.setStateAsync({ ageError: "" });
       }
    }
    validateGender = async (value) => {
        if(!value){
            // this.setState({genderError: "Please select gender"})
            await this.setStateAsync({ genderError: "Please select gender" });
        } else {
            // this.setState({genderError: ""})
            await this.setStateAsync({ genderError: "" });
        } 
    }
    validateLocation = async (value) => {
        if(value.length < 3){
            // this.setState({ locationError: "Please choose a location" });
            await this.setStateAsync({ locationError: "Please choose a location" });
        }else {
            // this.setState({ locationError: "" });
            await this.setStateAsync({ locationError: "" });
        }
    }
    validateAll = () => {
        return new Promise((resolve) => {
            const { firstName, lastName, email, age, gender, location, phoneNumber } = this.state;

            this.validateFirstName(firstName);
            this.validateLastName(lastName);
            this.validateEmail(email);
            this.validatePhoneNumber(phoneNumber);
            this.validateLocation(location);
            this.validateAge(age);
            this.validateGender(gender);
            resolve({});
        })
    
    }
    notifySuccess = (msg) => toast.success(msg);
    notifyInfo = (msg) => toast.info(msg);
    notifyError = (msg) => toast.error(msg);

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.validateAll().then(()=>{
        
            const { firstNameError, lastNameError, emailError, ageError, genderError, locationError, phoneNumberError } = this.state;
                if(firstNameError || lastNameError || emailError || ageError || genderError || locationError || phoneNumberError){
                    return;
                }else{
                    this.registerUser();
                    this.resetState();
                }
        }).catch();
        
        
    }
    resetState = () => {
        this.setState({
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
    )
    }

    registerUser = () => {
        this.props.closeSpan();
        const { firstName, lastName, email, phoneNumber, location, age, gender, comment } = this.state;
        return new Promise((resolve, reject) => {
            axios
                .post(
                    `${this.baseUrl}/register`,
                    JSON.stringify({
                        firstName, lastName, email, phoneNumber, location, age, gender, comment
                    }),
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    },
                )
                .then((res) => {
                    const { status, message, error } = res.data;
                    if(status == -1){
                        this.notifyInfo("You already registered for coding classes");
                        document.getElementById('register-form').reset();
                    } else {
                        this.notifySuccess(message);
                        document.getElementById('register-form').reset();
                    }
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        });
    };

    render(){
        return(  
            <form className="container register-form" onSubmit={this.handleSubmit} id='register-form'>
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
                    <button type="submit" className="btnSubmit">Submit</button>
                </div>
            </div>
        </form>
        )
    }
}

export default Register;