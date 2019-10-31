import React from 'react';
import axios from 'axios';
import './newsletter.scss';
import { toast } from 'react-toastify';

toast.configure({
  autoClose: 8000,
  draggable: false,
})
class NewsLetter extends React.Component {
    state = {
        email: '',
        isChecked: true,
        error: '',
        loading: false,
    }

    baseUrl = 'https://codeimpact-api.herokuapp.com';

    saveSubScriber = (email) => {
      return new Promise((resolve, reject) => {
          axios
              .post(
                  `${this.baseUrl}/subscribe`,
                  JSON.stringify({
                      email,
                  }),
                  {
                      headers: {
                          'Content-Type': 'application/json',
                      },
                  },
              )
              .then((response) => {
                  resolve(response);
              })
              .catch((error) => {
                  reject(error);
              });
      });
  };
    
      notifySuccess = (msg) => toast.success(msg);
      notifyInfo = (msg) => toast.info(msg);

      addSubscriber = (event) => {
        event.preventDefault();

        const { email, isChecked } = this.state;
        if(!email){
          this.setState({ error: "Please provide your email" });
          return;
        }
        if(!isChecked){
          this.setState({ error: "Please check the box to agree to the terms & conditions" });
          return;
        }
        this.setState({ loading: true });
        // insert the subscriber into the remote Stitch DB

        this.saveSubScriber(email).then((res) => {
          console.log(res)
          const { status, message, error } = res.data;
          if(status == -1){
            this.notifyInfo("You already subscribed to our news letter");
          } else {
            this.notifySuccess(message);
          }
          this.setState({ loading: false });
          this.setState({ email: '', error: '' });
          
        }).catch((err)=> { console.log(err)})
      }

      handleChange = (event) => {
        this.setState({ email: event.target.value });
        var re = /\S+@\S+\.\S+/;
        if(!re.test(event.target.value)){
          this.setState({ error: "Email is invalid" });
        }else {
          this.setState({ error: "" });
        }
      }

      toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }

      render(){
        return(
            <div className='letter-wrapper'>
                <div className='left-letter-div'>
                    <h3>Stay up to date on our latest news and events.</h3>
                    <form onSubmit={this.addSubscriber} id='subscriber'>
                        <input type='email' placeholder='Enter your email' className='email-input' value={this.state.email} onChange={this.handleChange}/><br/>
                        <input type='checkbox' className='checkbox-accept' checked={this.state.isChecked} onChange={this.toggleChange}/><span className='accept-parent'>I accept  the <span className='blue-accept'>Privacy Policy</span> and  the <span className='blue-accept'>Terms of use</span></span><br/>
                    </form>
                    <span id='error'>{this.state.error}</span>
                    <div className={this.state.loading ? 'loader': 'hide-loader'} ></div>
                </div>
                <div className='right-letter-div'>
                    <button type='submit' form="subscriber">Get Updates</button>
                </div>
            </div>
        )
      }

}

export default NewsLetter;
