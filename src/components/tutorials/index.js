import React from 'react';
import './index.scss';
import './modal.scss';
import tutorialData from './tutorialData';

const TutPeriodOne = () => (
    <div className="row text-center text-lg-left videos">
    {
        tutorialData.map((item, index) => {
            return (
                <div className="col-lg-3 col-md-4 col-12 height" key={index}>
                    <div className="d-block mb-4 h-100 hovereffect">
                        <img className='img'/>
                        <div className="overlay">
                            <h2>{item.heading}</h2>
                            <p>{item.paragraph}</p>
                            <span className="info" id={index.toString()} >Play</span>
                        </div>
                    </div>
                </div>
            )
        })
    }
        
    </div>
)


class TutorialSection extends React.Component {
    state = {
        tabId: 'today'
    }
    componentDidMount(){
        // Get the modal
        var modal = document.getElementById("myVideoModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("closeVideo")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }

        const videos = document.querySelectorAll('.videos span');

        // add onClick on all images
        videos.forEach(video => video.addEventListener('click', this.zoom))

    }

    zoom = (event) => {
        
        // Get the modal
        var modal = document.getElementById("myVideoModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var span = document.getElementById(event.target.id);
        var modalImg = document.getElementById("video-output");
        modal.style.display = "block";
        modalImg.src = tutorialData[span.id]["link"]
        
    }

    tabClick = (tab) => {
        this.setState({tabId: tab.target.id})
    }
    render(){
        return(
            <div className='container' id='tutorials'>
                <div className='row text-center text-lg-left top-section d-flex align-items-center'>
                    <div className='col-lg-6 col-md-6 col-12 tut-wording'><span id='top-tut-header'>Getting started with JavaScript</span><br/><span id='top-tut-p'>Learn and master JavaScript programming in 10 days</span></div>
                    {/* <div className='col-lg-6 col-md-6 col-12 '><button>SEE OUR PROGRAMS</button></div> */}
                </div>
                <div className='row text-center text-lg-left'>
                    <div className='col-lg-6 col-md-4 col-12 period align-middle' id='middle-header'>Trending Tutorials</div>
                    <div className='col-lg-6 col-md-8 col-12'>
                        <div className='row text-center text-lg-left'>
                            <div className='col-lg-3 col-md-3 col-3 period align-middle'><span className={this.state.tabId == 'today'? 'period-in active': 'period-in'} id='today' onClick={this.tabClick}>Today</span></div>
                            <div className='col-lg-3 col-md-3 col-3 period align-middle'><span className={this.state.tabId == 'week'? 'period-in active': 'period-in'} id='week' onClick={this.tabClick}>Week</span></div>
                            <div className='col-lg-3 col-md-3 col-3 period align-middle'><span className={this.state.tabId == 'month'? 'period-in active': 'period-in'} id='month' onClick={this.tabClick}>Month</span></div>
                            <div className='col-lg-3 col-md-3 col-3 period align-middle'><span className={this.state.tabId == 'year'? 'period-in active': 'period-in'} id='year' onClick={this.tabClick}>Year</span></div>
                        </div>
                    </div>
                </div>
                <hr className="mt-2 mb-5"/>
                {(
                () => {
                switch(this.state.tabId) {
                case 'today':
                    return <TutPeriodOne  />;
                case 'week':
                    return <TutPeriodOne />;
                case 'month':
                    return <TutPeriodOne />;
                default:
                    return <TutPeriodOne/>;
                }
            }
            )()}
            <div id="myVideoModal" className="modal">

                    <span className="closeVideo">&times;</span>
                
                    <iframe className="modal-content" id="video-output"
                    allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}
export default TutorialSection;