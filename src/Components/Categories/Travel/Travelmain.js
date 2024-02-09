import React from 'react'
import images1 from '../Assets/Banner/Travel.svg'
import '../Css/Style.css'


function Travelmain() {

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
                                <h2 class="banner-heading">Travel</h2>
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

                        <button onClick={() => scrollToSection('section1')}>Train</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section2')}>Rapido</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section3')}>OLA</button>


                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section4')}>Air Asia</button>


                    </div>
                </div>
            </div>

            <div class="full">
                <div id="section1">Railways</div>
                <div class="edu-comment">
                 <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Harharan</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“Irctc website is useless ”</span>
                        <p class="content">The train is very late 6 hours. The Indian railway is not helping the customer with regards to delay.



</p>
                    </div>
                </div>
                

                
            </div>
            <div class="full">
                <div id="section2">Rapido</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Ajeestha</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Exploitation ”</span>
                        <p class="content">It's good for customers due to low fare, but not good for the riders. So, it's not win-win situation.

misunderstanding is due to: The rider captain doesn't know where the customer has to go. so, he is clue less. So, he calls customers and asks to cancel.
</p>
                    </div>
                </div>

                
                
            </div>
            <div class="full">
                <div id="section3">OLA Cabs</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Arul Subramaniam</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Different rates ”</span>
                        <p class="content">When I booked ola the rate was Rs.92 in my app but when I reached my destination the rate was Rs.177/- in the driver's app. </p>
                    </div>
                </div>

               
            </div>
            <div class="full">
                <div id="section4">Air Asia</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Asifa Begum</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Thumbs up to boarding crew ”</span>
                        <p class="content"> Would like to give big thumbs up to boarding crew Ms Noor at Tiruchirappalli Airport. We are four family, flying from Trichy(India) to Singapore). Boarding process went very smooth with her providing detailed explanation before keep luggage, what can bring and what cannot, She is quite knowledgeable and inform the passenger upfront to complete the boarding process smooth and fast</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Travelmain