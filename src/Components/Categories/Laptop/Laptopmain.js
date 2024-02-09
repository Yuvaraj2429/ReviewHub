import React from 'react'
import images1 from '../Assets/Banner/Laptop.svg'
import '../Css/Style.css'


function Laptopmain() {

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
                                <h2 class="banner-heading">Laptops</h2>
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

                        <button onClick={() => scrollToSection('section1')}>Apple</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section2')}>HP</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section3')}>Dell</button>


                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section4')}>Asus</button>


                    </div>
                </div>
            </div>

            <div class="full">
                <div id="section1">Apple</div>
                <div class="edu-comment">
                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">George</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“Really Good ”</span>
                        <p class="content">With its bigger MacBook Air, Apple ticks up the performance and battery life, while keeping the original Air's strengths intact.

                        </p>
                    </div>
                </div>



            </div>
            <div class="full">
                <div id="section2">HP</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Anu</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Worthable Product ”</span>
                        <p class="content">The HP Omen 16 is a just-fine gaming laptop with speedy performance,
                            but our test configuration does little to set itself apart from the field, considering the steep price.

                        </p>
                    </div>
                </div>


            </div>
            <div class="full">
                <div id="section3">Dell</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Kishore George</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Great ”</span>
                        <p class="content">
                            While you'll find faster and fancier convertible 2-in-1 Chromebooks, the Dell x360 13b is a compelling value with long battery life and lots of connectivity. </p>
                    </div>
                </div>


            </div>
            <div class="full">
                <div id="section4">Asus</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Hariharan</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Blown Away ”</span>
                        <p class="content">With a gorgeous display, a sharp webcam, and deluxe tech support, Asus Dragonfly Pro Chromebook is the most elegant ChromeOS laptop on Earth—but it should have more ports.</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Laptopmain