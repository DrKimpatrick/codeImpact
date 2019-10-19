import React from 'react';
import './index.scss';

class TutorialSection extends React.Component {
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <span>One</span>
                </div>
                <div className='row text-center text-lg-left'>
                    <div className='col-lg-6 col-md-4 col-12'>Trending Tutorials</div>
                    <div className='col-lg-6 col-md-8 col-12'>
                        <div className='row text-center text-lg-left'>
                            <div className='col-lg-3 col-md-3 col-3'>Today</div>
                            <div className='col-lg-3 col-md-3 col-3'>Week</div>
                            <div className='col-lg-3 col-md-3 col-3'>Month</div>
                            <div className='col-lg-3 col-md-3 col-3'>Year</div>
                        </div>
                    </div>
                </div>
                <div class="row text-center text-lg-left">
                    <div class="col-lg-3 col-md-4 col-6">
                        <span class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/G9Rfc1qccH4/400x300" alt=""/>
                        </span>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <span class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/aJeH0KcFkuc/400x300" alt=""/>
                        </span>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <span class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300" alt=""/>
                        </span>
                    </div>
                    <div class="col-lg-3 col-md-4 col-6">
                        <span class="d-block mb-4 h-100">
                            <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300" alt=""/>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default TutorialSection;