import React from 'react'
import { Link } from 'react-router-dom'
import images1 from '../Assets/Images/allen.png'
import images2 from '../Assets/Images/park.png'
import images3 from '../Assets/Images/louis.png'
import images4 from '../Assets/Images/peter.png'

function Fashion() {
  return (
    <>
    <div class="banner-main">
    <h1>
        Fashion
    </h1>
</div>
<div class="container">
                <div class="row my-5">

                    <div class="col-md-3 ">
                        <Link to="Fashionmain" className="mylink">
                            <div class="card card-1">
                                <img src={images1} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Allen Solly</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Fashionmain" className="mylink">
                            <div class="card card-2">
                                <img src={images2} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Park Avenue</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Fashionmain" className="mylink">
                            <div class="card card-3">
                                <img src={images3} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Louis Philippe</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Fashionmain" className="mylink">
                            <div class="card card-4">
                                <img src={images4} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Peter England</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </>
  )
}

export default Fashion