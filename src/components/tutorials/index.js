import React from 'react';
import './index.scss';

const New = () => (
    <div className="col-lg-3 col-md-4 col-12 height">
        <div className="d-block mb-4 h-100 hovereffect">
            <img className='img'/>
            <div className="overlay">
                <h2>Data structures</h2>
                <p>Learn and master JavaScript programming in 10 days</p>
                <a className="info" href="#">Play</a>
            </div>
        </div>
    </div>
)

const TutPeriodOne = () => (
    <div className="row text-center text-lg-left">
        <New/>
        <New/>
        <New/>
        <New/>
        <New/>
    </div>
)

const TutPeriodTwo = () => (
    <div className="row text-center text-lg-left">
        <New/>
        <New/>
    </div>
)


class TutorialSection extends React.Component {
    state = {
        tabId: 'today'
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
                    return <TutPeriodTwo />;
                case 'month':
                    return <TutPeriodOne />;
                default:
                    return <TutPeriodTwo/>;
                }
            }
            )()}
            </div>
        )
    }
}
export default TutorialSection;