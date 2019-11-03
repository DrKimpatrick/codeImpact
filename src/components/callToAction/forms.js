import React from 'react';
import './form.scss';
class Register extends React.Component {
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
                                <input type="email" className="form-control" placeholder="Your Email *" value=""/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone Number *" value=""/>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <label for="sel1">Select age: *</label>
                            <br/>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value=""/>5 - 11 years
                                </label>
                            </div>
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value=""/> >= 12 years
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="form-group">
                                <label for="sel1">Select location: *</label>
                                <select class="form-control" id="sel1">
                                    <option>--location--</option>
                                    <option>Ntinda</option>
                                    <option>Kiwatule</option>
                                    <option>UMA Show ground Lugogo</option>
                                    <option>Namwokya</option>
                                    <option>Muyenga</option>
                                    <option>Kiwafu</option>
                                    <option>Naalya</option>
                                    <option>Bugolobi</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div class="form-check-inline">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" value=""/>Subscribe to our newsletter
                                </label>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div class="form-group">
                                <textarea class="form-control" rows="5" id="comment" placeholder="Comments and/or questions"></textarea>
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