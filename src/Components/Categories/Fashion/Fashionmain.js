import React from 'react'
import images1 from '../Assets/Banner/Fashion.svg'
import '../Css/Style.css'


function Fashionmain() {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='pageheader'>
                <div class="row my-1 mx-3">
                    <div class="col-lg-6">


                        <div class="banner">
                            <div class="bnner-text">
                                <h2 class="banner-heading">Fashion</h2>
                                <span class="sub">Reviews</span>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div class="svg">
                            <img src={images1} class="topbanner" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabs">

                <div class="row mx-5">

                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section1')}>Allen Solly</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section2')}>Park Avenue</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section3')}>Louis Philippe</button>


                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section4')}>Peter England</button>


                    </div>
                </div>
            </div>

            <div class="full">
                <div id="section1">Allen Solly</div>
                <div class="edu-comment">
                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">AS</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Cancelled my order”</span>
                        <p class="content">
                        I’m completely unhappy with what Allen Solly has done to me. Why do you play around with loyal customers like me? I’ve faced similar issue earlier with regards to loyalty points and shipment and today I’m facing this issue.

                        </p>
                    </div>
                </div>



            </div>
            <div class="full">
                <div id="section2">Park Avenue</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">PA</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Regarding Order delivery ”</span>
                        <p class="content">Truthly not any pure cotton.also skin problem occurs.its quality is not so comfortable & good as they demand price. 

                        </p>
                    </div>
                </div>

            
            </div>
            <div class="full">
                <div id="section3">Louis Philippe</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">LP</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Pleasant purchase ”</span>
                        <p class="content">I tried a new shirt and almost all the boys were cheering me up, as though am on a ramp walk. Bought 3 instead of 1 (guess one for each sales boys) nd had a relaxed evening. Congrats guys. Keep up the spirit. </p>
                    </div>
                </div>


            </div>
            <div class="full">
                <div id="section4">Peter England</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">PE</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“Policy change ”</span>
                        <p class="content">To my surprise Peter England don’t have refund policy.. which is really very upsetting.. every good store keep such policy for the benefit of there customer.. </p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Fashionmain