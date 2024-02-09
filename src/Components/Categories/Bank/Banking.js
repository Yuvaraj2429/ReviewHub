import React from 'react'
import images1 from '../Assets/Banner/Bank.svg'
import '../Css/Style.css'


function Banking() {

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
                                <h2 class="banner-heading">Banking</h2>
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

                        <button onClick={() => scrollToSection('section1')}>BOI</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section2')}>INDIAN</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section3')}>SBI</button>


                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section4')}>HDFC</button>


                    </div>
                </div>
            </div>

            <div class="full">
                <div id="section1">Bank of India</div>
                <div class="edu-comment">
                 <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">BOI</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“So Careless ”</span>
                        <p class="content">Employees of the bank are so irresponsible and they treat people as they are slaves. Very worst bank service is at Arambakkam branch and no employee in the bank responds to any queries of people.

</p>
                    </div>
                </div>
                <div class="edu-comment">
                 <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">BOI</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Very Worst Banking Services”</span>
                        <p class="content">Document summited It's been 4-6 days, I want to link aadhaar with NPCI but your staff say that we have mailed, no one is able to respond properly even your branch manager, how long will it be please tell me, Very poor sevice your satwas branch please imporve your service I am not sartisfeid your service</p>
                    </div>
                </div>

                
            </div>
            <div class="full">
                <div id="section2">Indian Bank</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">IB</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Please See from Priority ”</span>
                        <p class="content">Document summited It's been 4-6 days, I want to link aadhaar with NPCI but your staff say that we have mailed, no one is able to respond properly even your branch manager, how long will it be please tell me, Very poor sevice your satwas branch please imporve your service I am not sartisfeid your service

</p>
                    </div>
                </div>

                <div class="edu-comment">
                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">IB</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Need to Improve ”</span>
                        <p class="content">Employees of the bank are so irresponsible and they treat people as they are slaves. Very worst bank service is at Tambaram branch and no employee in the bank responds to any queries of people.
</p>
                    </div>
                </div>
            </div>
            <div class="full">
                <div id="section3">State Bank of India</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">SBI</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Great ”</span>
                        <p class="content">State Bank Of India is located nearby in our area so i open my saving account from that bank ,customer service was good, </p>
                    </div>
                </div>

               
            </div>
            <div class="full">
                <div id="section4">HDFC Bank</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">HDFC</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Blown Away ”</span>
                        <p class="content">I maintain salary cum saving account with SBI. On 2015, my company has suggested to opened an account. Need to maintain a minimum balance of 3K. There is no hidden charge.</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Banking