import React from 'react';
import './gallery.scss';
import galleryData from './galleryData';

class Gallery extends React.Component {

    componentDidMount(){
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        span.onclick = function() {
            modal.style.display = "none";
        }

        const imgs = document.querySelectorAll('.imgs img');

        // add onClick on all images
        imgs.forEach(img => img.addEventListener('click', this.zoom))

    }

    zoom = (event) => {
        
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        var img = document.getElementById(event.target.id);
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");


        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        
    }
    render(){
        return (
            <div className="container" id='gallery'>

            <h1 className="font-weight-light text-center mt-4 mb-0">CodeImpact Moments</h1>

            <hr className="mt-2 mb-5"/>

            <div className="row text-center text-lg-left imgs">
                {
                    galleryData.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6" key={index}>
                                <span className="d-block mb-4 h-100">
                                    <img className="img-fluid img-thumbnail myImg" src={item.image} alt="" id={index.toString()}/>
                                </span>
                            </div>
                        )
                    })
                }
                </div>
                <div id="myModal" className="modal">

                    <span className="close">&times;</span>

                    <img className="modal-content" id="img01" alt=""/>

                    <div id="caption"></div>
                </div>
        </div>
        )
    }
}

export default Gallery;