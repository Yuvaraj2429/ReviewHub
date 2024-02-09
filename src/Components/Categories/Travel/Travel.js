import React from 'react'
import { Link } from 'react-router-dom'
import images1 from '../Assets/Images/train.png'
import images2 from '../Assets/Images/rapido.png'
import images3 from '../Assets/Images/ola.png'
import images4 from '../Assets/Images/asia.png'

function Travel() {
  return (
    <>
    <div class="banner-main">
    <h1>
        Travel
    </h1>
</div>
<div class="container">
                <div class="row my-5">

                    <div class="col-md-3 ">
                        <Link to="Travelmain" className="mylink">
                            <div class="card card-1">
                                <img src={images1} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Railways</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Travelmain" className="mylink">
                            <div class="card card-2">
                                <img src={images2} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Rapido</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Travelmain" className="mylink">
                            <div class="card card-3">
                                <img src={images3} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Ola</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Travelmain" className="mylink">
                            <div class="card card-4">
                                <img src={images4} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Air Asia</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
</>
  )
}

export default Travel