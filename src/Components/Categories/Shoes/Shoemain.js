import React from 'react'
import images1 from '../Assets/Banner/Shoe.svg'
import '../Css/Style.css'


function Shoemain() {

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
                                <h2 class="banner-heading">Shoes</h2>
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

                        <button onClick={() => scrollToSection('section1')}>Nike</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section2')}>Adidas</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section3')}>Reebok</button>


                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section4')}>Sparx</button>


                    </div>
                </div>
            </div>

            <div class="full">
                <div id="section1">Nike</div>
                <div class="edu-comment">
                 <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Virat</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“So Careless ”</span>
                        <p class="content">Nice Shoes with comfort... I heard the product feedback from my friend and found the same. Thanks to Nike...



</p>
                    </div>
                </div>
                
                
            </div>
            <div class="full">
                <div id="section2">Adidas</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Arun Kumar</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Please See from Priority ”</span>
                        <p class="content"> “Adidas are my favorite shoe because they look the best, and they're comfy plus they go with everything, ”


</p>
                    </div>
                </div>

                
                
            </div>
            <div class="full">
                <div id="section3">Reebok</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Shivin</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“False Advertisement”</span>
                        <p class="content">My promo code was not working so I called and they said the promo was only good until 9:00 pm. I had a screen shot of the

promo so I could use it in the checkout and the time stamp says 9:50.

(I attached the screenshot with the timestamp at the bottom)

The promo code was also on there website! They were still advertising the promo code even tho it was no longer valid.</p>
                    </div>
                </div>

               
            </div>
            <div class="full">
                <div id="section4">Sparx</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Raj Agarwal</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Blown Away ”</span>
                        <p class="content">Sparx shoes are known for their high-quality materials, innovative designs, and excellent performance.</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Shoemain