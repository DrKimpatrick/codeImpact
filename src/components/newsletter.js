import React from 'react';
import './newsletter.scss';
import { toast } from 'react-toastify';
import {
    Stitch,
    RemoteMongoClient
  } from "mongodb-stitch-browser-sdk";

toast.configure({
  autoClose: 9000,
  draggable: false,
})
class NewsLetter extends React.Component {
    state = {
        email: '',
        isChecked: true,
        error: ''
    }
    componentDidMount() {
        // Initialize the App Client
        this.client = Stitch.initializeDefaultAppClient("codeimpact-efvqy");
        // Get a MongoDB Service Client
        // This is used for logging in and communicating with Stitch
        const mongodb = this.client.getServiceClient(
          RemoteMongoClient.factory,
          "mongodb-atlas"
        );
        // Get a reference to the todo database
        this.db = mongodb.db("codeimpact");
      }
      notify = () => toast.success("You have sucessfully subscribed to codeimpact newsletter");

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
        // insert the subscriber into the remote Stitch DB
        this.db
          .collection("subscribers")
          .insertOne({
            email
          })
          .then(() => {
            this.notify();
            this.setState({ email: '', error: '' });
          })
          .catch(console.error);
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
                </div>
                <div className='right-letter-div'>
                    <button type='submit' form="subscriber">Get Updates</button>
                </div>
            </div>
        )
      }

}

export default NewsLetter;
