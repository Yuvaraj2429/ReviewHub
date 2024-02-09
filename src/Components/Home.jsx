import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import images1 from '../Assets/Logo/bank.png'
import images2 from '../Assets/Logo/travel.png';
import images3 from '../Assets/Logo/phone.png';
import images4 from '../Assets/Logo/lap.png';
import images5 from '../Assets/Logo/shoes.png';
import images6 from '../Assets/Logo/watch.png';
import images7 from '../Assets/Logo/fashion.png';
import images8 from '../Assets/Logo/herbals.png';
import images10 from '../Assets/Images/main2.svg';
import animation from "./animation.json";
import work from "./work.json";
import Lottie from "lottie-react";



import '../Css/Style.css'
<style>
    @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
</style>

function Home() {

    return (
        <>
            <div class="special">

                <div class="row">

                    <div class="col-lg-6  text-center default">
                        <div class="lottie">
                            <div style={{ width: "80%" }}>
                                <Lottie loop={true} animationData={work} />
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-6  text-center">
                        <div className='section2'>
                            <h3 class="flicker">Explore Your Reviews</h3>
                            <div class="desc">Are you a review? Because I'd love to explore all the wonderful things and give a five-star rating!</div>
                            <div class="read">
                                <button type="submit" placeholder="" > <Link to="/ReviewList" className="my"> Explore Reviews</Link></button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="category">
                <div class="d-flex justify-content-center align-items-center mt-5"> <button class='footer-btn'>OUR CATEGORIES</button> </div>
                <div class="d-flex justify-content-center mt-3"> <span class="mask">Finding Best Products Now in Your Fingertips</span> </div>
                <div class="cat">
                    <div class="row mt-2 g-4 mx-5">
                        
                        <div class="col-md-3">
                            <Link to="/Bank" className="mylink">
                                <div class="exp"> <img src={images1} height="60" width="60" /> </div>
                                <div class="write"> <span>Banking</span></div>


                            </Link>
                        </div>
                        <div class="col-md-3">
                            <Link to="/Travel" className="mylink">
                            <div class="exp"> <img src={images2} height="60" width="60" /> </div>
                                <div class="write"> <span>Travel</span></div>
                            </Link>
                        </div>
                        <div class="col-md-3">
                            <Link to="/Phone" className="mylink">
                            <div class="exp"> <img src={images3} height="60" width="60" /> </div>
                                <div class="write"> <span>Mobiles</span></div>
                            </Link>
                        </div>
                        <div class="col-md-3">
                            <Link to="/Laptop" className="mylink">
                            <div class="exp"> <img src={images4} height="60" width="60" /> </div>
                                <div class="write"> <span>Laptops</span></div>
                            </Link>
                        </div>
                        <div class="col-md-3">
                            <Link to="/Shoes" className="mylink">
                            <div class="exp"> <img src={images5} height="60" width="60" /> </div>
                                <div class="write"> <span>Shoes</span></div>
                            </Link>
                        </div>
                        <div class="col-md-3">
                            <Link to="/Watches" className="mylink">
                            <div class="exp"> <img src={images6} height="60" width="60" /> </div>
                                <div class="write"> <span>Watches</span></div>
                            </Link>
                        </div>
                        <div class="col-md-3">
                            <Link to="/Fashion" className="mylink">
                            <div class="exp"> <img src={images7} height="60" width="60" /> </div>
                                <div class="write"> <span>Fashion</span></div>
                            </Link>
                        </div>
                        <div class="col-md-3">
                            <Link to="/Herbal" className="mylink">
                            <div class="exp"> <img src={images8} height="60" width="60" /> </div>
                                <div class="write"> <span>Herbals</span></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="homereviews">
                <section>
                    <div class="container py-5">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-10 col-xl-8 text-center">
                                <h3 class="fw-bold mb-4">Popular Reviews</h3>
                                <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                                    See here the popular reviews and explore your thoughts too!!
                                </p>
                            </div>
                        </div>

                        <div class="row text-center">
                            <div class="col-md-4 mb-4 mb-md-0">
                                <div class="card5">
                                    <div class="card5">
                                        <div class="d-flex justify-content-center mb-4">

                                        </div>
                                        <h5 class="font-weight-bold">Begum</h5>
                                        <h6 class="font-weight-bold my-3">"Moderate Price and Valuable"</h6>
                                        <ul class="list-unstyled d-flex justify-content-center">
                                            <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                                        </ul>
                                        <p class="mb-2">
                                            It instantly brightens my skin and provides a nice calming effect to
                                            my tired skin. This is one of the few clay masks in the budget category that even dry skin people can use.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4 mb-md-0">
                                <div class="card5">
                                    <div class="card5">
                                        <div class="d-flex justify-content-center mb-4">

                                        </div>
                                        <h5 class="font-weight-bold">Vikram</h5>
                                        <h6 class="font-weight-bold my-3">"Excellent Product"</h6>
                                        <ul class="list-unstyled d-flex justify-content-center">
                                            <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                                        </ul>
                                        <p class="mb-2">
                                            <i class="fas fa-quote-left pe-2"></i>It's easy to to determine the time as it is numbers.
                                            And in my watch the short and long hand is pink colour and the display is surrounded by a
                                            aluminium border.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-0">
                                <div class="card5">
                                    <div class="card5">
                                        <div class="d-flex justify-content-center mb-4">

                                        </div>
                                        <h5 class="font-weight-bold">Arif </h5>
                                        <h6 class="font-weight-bold my-3">"Not a Worthable Product"</h6>
                                        <ul class="list-unstyled d-flex justify-content-center">
                                            <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
                                        </ul>
                                        <p class="mb-2">
                                            <i class="fas fa-quote-left pe-2"></i>The HP Omen 16 is a just-fine gaming laptop with speedy performance,
                                            but our test configuration does little to set itself apart from the field, considering the price.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </section>
            </div>

        </>
    )
}

export default Home;