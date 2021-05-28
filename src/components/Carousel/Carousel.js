import React from 'react';
import c1 from '../../images/c1.jpg'
import c2 from '../../images/c2 .jpg'
import c3 from '../../images/c3.jpg'

const Carousel = () => {
    return (
        <section className="container my-4">
            <h2 className="text-center">TRENDING</h2>
            <div id="carouselExampleControls" classNameName="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                       <div className="row">
                           <div className="col-md-4">
                               <img className="img-fluid" src={c1} alt="" />
                           </div>
                           <div className="col-md-8 d-flex align-items-center">
                              <div className="m-3 p-2">
                              <h4>Your most unhappy customers are your greatest source of learning</h4>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat eius ipsa. Reiciendis dolores saepe accusantium aut illo nihil, quidem quae ipsa beatae, delectus quaerat?</p>
                              <p><small>Jack Doe - <span className="text-secondary">NY - 1:30PM</span></small></p>
                              </div>
                           </div>
                       </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                           <div className="col-md-4">
                               <img className="img-fluid" src={c2} alt="" />
                           </div>
                           <div className="col-md-8 d-flex align-items-center">
                              <div className="m-3 p-2">
                              <h4>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat eius ipsa. Reiciendis dolores saepe accusantium aut illo nihil, quidem quae ipsa beatae, delectus quaerat?</p>
                              <p><small>Jack Doe - <span className="text-secondary">NY - 1:30PM</span></small></p>
                              </div>
                           </div>
                       </div>
                    </div>
                    <div className="carousel-item">
                    <div className="row">
                           <div className="col-md-4">
                               <img className="img-fluid" src={c3} alt="" />
                           </div>
                           <div className="col-md-8 d-flex align-items-center">
                              <div className="m-3 p-2">
                              <h4>Your most unhappy customers are your greatest source of learning</h4>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quaerat eius ipsa. Reiciendis dolores saepe accusantium aut illo nihil, quidem quae ipsa beatae, delectus quaerat?</p>
                              <p><small>Jack Doe - <span className="text-secondary">NY - 1:30PM</span></small></p>
                              </div>
                           </div>
                       </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Carousel;