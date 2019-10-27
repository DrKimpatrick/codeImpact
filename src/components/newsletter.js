import React from 'react';
import './newsletter.scss';
import {
    Stitch,
    RemoteMongoClient
  } from "mongodb-stitch-browser-sdk";

class NewsLetter extends React.Component {
    state = {
        email: ''
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
      afterSubscribe = () => {
        
      }
      addSubscriber = (event) => {
        event.preventDefault();
        const { email } = this.state;
        // insert the subscriber into the remote Stitch DB
        this.db
          .collection("subscribers")
          .insertOne({
            email
          })
          .then(this.afterSubscribe)
          .catch(console.error);
        console.log(this.state.email);
      }

      handleChange = (event) => {
        this.setState({ email: event.target.value });
        console.log(this.state.email)
      }

      render(){
        return(
            <div className='letter-wrapper'>
                <div className='left-letter-div'>
                    <h3>Stay up to date on our latest news and events.</h3>
                    <form onSubmit={this.addSubscriber} id='subscriber'>
                        <input type='email' placeholder='Enter your email' className='email-input' value={this.state.email} onChange={this.handleChange}/><br/>
                        <input type='checkbox' className='checkbox-accept'/><span className='accept-parent'>I accept  the <span className='blue-accept'>Privacy Policy</span> and  the <span className='blue-accept'>Terms of use</span></span><br/>
                    </form>
                </div>
                <div className='right-letter-div'>
                    <button type='submit' form="subscriber">Get Updates</button>
                </div>
            </div>
        )
      }

}

export default NewsLetter;
