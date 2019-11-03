import React from 'react';
import './gallery';
import galleryData from './galleryData';

const Gallery = () => (
    // <!-- Page Content -->
<div className="container" id='gallery'>

    <h1 className="font-weight-light text-center mt-4 mb-0">CodeImpact Moments</h1>

    <hr className="mt-2 mb-5"/>

    <div className="row text-center text-lg-left">
        {
            galleryData.map((item, index) => {
                return (
                    <div className="col-lg-3 col-md-4 col-6" key={index}>
                        <span className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src={item.image} alt=""/>
                        </span>
                    </div>
                )
            })
        }
    </div>

</div>
)

export default Gallery;