import React from 'react';
import '../Css/Style.css'
import images1 from '../Assets/Images/boi.png'
import images2 from '../Assets/Images/ib.png'
import images3 from '../Assets/Images/sbi.png'
import images4 from '../Assets/Images/hdfc.png'
import { Link } from 'react-router-dom';
function Bank() {
    return (
        <>
            <div class="banner-main">
                <h1>
                    Banking
                </h1>
            </div>
            <div class="container">
                <div class="row my-5">

                    <div class="col-md-3 ">
                        <Link to="Banking" className="mylink">
                            <div class="card card-1">
                                <img src={images1} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Bank of India</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Banking" className="mylink">
                            <div class="card card-2">
                                <img src={images2} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Indian Bank</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Banking" className="mylink">
                            <div class="card card-3">
                                <img src={images3} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">State Bank of India</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Banking" className="mylink">
                            <div class="card card-4">
                                <img src={images4} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">HDFC</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bank;