import React from 'react';
import './layout.scss'; 

const TopTutorial = () => (
        <iframe  id='top-iframe' frameBorder="0" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1" >
        </iframe>
)

const Tutorial = () => (
    <iframe id='bottom-iframe' frameBorder="0" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1" >
    </iframe>
)

const Caption = () => (
    <div className='caption'>
        <h3>Title</h3>
        <p>Description..............</p>
    </div>
)
const BottomTuts1 = () => (
    <div className='col-sm-12'>
        <div className='row '>
            <div className='col-md-4 '><Tutorial/><Caption/></div>
            <div className='col-md-4 '><Tutorial/><Caption/></div>
            <div className='col-md-4 '><Tutorial/><Caption/></div>
        </div>
    </div>
);

const BottomTuts2 = () => (
    <div className='col-sm-12'>
        <div className='row'>
            <div className='col-md-4'>
                <Tutorial/>
                <Caption/>
            </div>
            
        </div>
    </div>
);


class TutorialLayout extends React.Component {
    state = {
        tabId: 'today'
    }

    tabClick = (tab) => {
        this.setState({tabId: tab.target.id})
    }

    render(){
        return(
            <div className='container top-wrapper'>
        <div className='row no-gutters top-tutorial'>
            <div className='col-md-12' id='top-tutorial'><TopTutorial/></div>
        </div>
        <div className='row no-gutters bottom-section'>
            <div className='col-sm-12'>
                <div className='row  nav-row'>
                    <div className='col-md-6 header'>Trending Tutorials</div>
                    <div className='col-md-6 nav-section-left'>
                        <ul className="nav nav-group">
                            <li className={this.state.tabId == 'today'? 'nav-item active': 'nav-item'}>
                                <span id='today' onClick={this.tabClick}>Today</span>
                            </li>
                            <li className={this.state.tabId == 'week'? 'nav-item active': 'nav-item'}>
                                <span id='week' onClick={this.tabClick}>Week</span>
                            </li>
                            <li className={this.state.tabId == 'month'? 'nav-item active': 'nav-item'}>
                                <span id='month' onClick={this.tabClick}>Month</span>
                            </li>
                            <li className={this.state.tabId == 'year'? 'nav-item active': 'nav-item'}>
                                <span id='year' onClick={this.tabClick}>Year</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {(
                () => {
                switch(this.state.tabId) {
                case 'year':
                    return <BottomTuts2  />;
                case 'week':
                    return <BottomTuts2 />;
                case 'month':
                    return <BottomTuts1 />;
                default:
                    return <BottomTuts1/>;
                }
            }
            )()}
        </div>
    </div>
    )
}
    
}

export default TutorialLayout;