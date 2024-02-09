import React from 'react'
import images1 from '../Assets/Banner/Watch.svg'
import '../Css/Style.css'


function Watchmain() {

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
                                <h2 class="banner-heading">Watches</h2>
                                <span class="sub">Reviews</span>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div class="svg">
                            <img src={images1} class="phone" width={450} height={450} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabs">

                <div class="row mx-5">

                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section1')}>Sonata</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section2')}>Fastrack</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section3')}>Titan</button>


                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section4')}>Rolex</button>


                    </div>
                </div>
            </div>

            <div class="full">
                <div id="section1">Sonata</div>
                <div class="edu-comment">
                 <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Mani Sharma</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“Watch Key Parts ”</span>
                        <p class="content">I bought a watch for my boy on his birthday from Ahmedabad-380061. On third day after bought, the switch key point of watch fall down due to loose manufacturer fitting.

</p>
                    </div>
                </div>
                
                
            </div>
            <div class="full">
                <div id="section2">Fastrack</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Surya Kumar</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Looks Better ”</span>
                        <p class="content">It's easy to to determine the time as it is numbers.
                         And in my watch the short and long hand is pink colour and the display is surrounded by a
                          aluminium border. And the rest of the watch is blue colour. 

</p>
                    </div>
                </div>

                
            </div>
            <div class="full">
                <div id="section3">Titan</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Keshav Mittal</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Did not reach my expectations ”</span>
                        <p class="content">The designs are very old fashioned. There is not much difference in design of watches but there js a lot of difference in their prices. </p>
                    </div>
                </div>

               
            </div>
            <div class="full">
                <div id="section4">Rolex</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Swamy Agarwal</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“Bad quality ”</span>
                        <p class="content">watch is not good for students beacause this watch is not using properly and I through this watch in the garbage 2- month ago.</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Watchmain