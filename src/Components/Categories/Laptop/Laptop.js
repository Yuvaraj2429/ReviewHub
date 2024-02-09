import React from 'react'
import { Link } from 'react-router-dom'
import images1 from '../Assets/Images/iphone.png'
import images2 from '../Assets/Images/hp.png'
import images3 from '../Assets/Images/dell.png'
import images4 from '../Assets/Images/asus.png'

function Laptop() {
  return (
    <>
    <div class="banner-main">
    <h1>
        Laptops
    </h1>
</div>
<div class="container">
                <div class="row my-5">

                    <div class="col-md-3 ">
                        <Link to="Laptopmain" className="mylink">
                            <div class="card card-1">
                                <img src={images1} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Apple</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Laptopmain" className="mylink">
                            <div class="card card-2">
                                <img src={images2} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">HP</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Laptopmain" className="mylink">
                            <div class="card card-3">
                                <img src={images3} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Dell</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Laptopmain" className="mylink">
                            <div class="card card-4">
                                <img src={images4} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Asus</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
</>
  )
}

export default Laptop