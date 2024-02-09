import React from 'react'
import images1 from '../Assets/Banner/Herbal.svg'
import '../Css/Style.css'


function Herbalmain() {

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
                                <h2 class="banner-heading">Herbals</h2>
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

                        <button onClick={() => scrollToSection('section1')}>Lotus Herbals</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section2')}>Himalaya</button>

                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section3')}>Just Herbs</button>


                    </div>
                    <div class="col-lg-3">

                        <button onClick={() => scrollToSection('section4')}>Nykaa</button>


                    </div>
                </div>
            </div>

            <div class="full">
                <div id="section1">Lotus Herbals</div>
                <div class="edu-comment">
                 <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Ajooni</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“Good ”</span>
                        <p class="content">The Lotus Cocomoist is a semi-thick lotion that is quite creamy & moisturizing. It does not absorb quickly. But, it is lighter than basic cold creams and has higher absorbancy than those.

</p>
                    </div>
                </div>

                
            </div>
            <div class="full">
                <div id="section2">Himalaya</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">John</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Please See from Priority ”</span>
                        <p class="content"> It instantly brightens my skin and provides a nice calming effect to
                         my tired skin. This is one of the few clay masks in the budget category that even dry skin people can use.
</p>
                    </div>
                </div>

                <div class="edu-comment">
                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Allen</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Need to Improve ”</span>
                        <p class="content">I gave this moisturizer to my mom and it worked excellently
                         on her normal to dry mature skin. This moisturizer gave long-lasting suppleness and 
                         relief from winter dryness on her skin. This would make a great body moisturizer.
</p>
                    </div>
                </div>
            </div>
            <div class="full">
                <div id="section3">Just Herbs</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Alicia</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Great ”</span>
                        <p class="content">I gave this moisturizer to my mom and it worked excellently
                         on her normal to dry mature skin. This moisturizer gave long-lasting suppleness and 
                         relief from winter dryness on her skin. This would make a great body moisturizer. </p>
                    </div>
                </div>

               
            </div>
            <div class="full">
                <div id="section4">Nykaa</div>
                <div class="edu-comment">

                    <div class="comment-content">
                        <div class="comment-top">
                            <h6 class="title">Preethi</h6>
                            <div class="rating"> <i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </div>
                        </div>
                        <span class="subtitle">“ Blown Away ”</span>
                        <p class="content">ust like its other products, this does have pore-clogging ingredients, so it’s not acne skin-friendly.</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Herbalmain