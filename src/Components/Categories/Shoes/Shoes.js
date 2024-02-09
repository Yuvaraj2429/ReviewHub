import React from 'react'
import { Link } from 'react-router-dom'
import images1 from '../Assets/Images/nike.png'
import images2 from '../Assets/Images/adidas.png'
import images3 from '../Assets/Images/reebok.png'
import images4 from '../Assets/Images/sparx.png'

function Shoes() {
  return (
    <>
    <div class="banner-main">
    <h1>
        Shoes
    </h1>
</div>
<div class="container">
                <div class="row my-5">

                    <div class="col-md-3 ">
                        <Link to="Shoemain" className="mylink">
                            <div class="card card-1">
                                <img src={images1} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Nike</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Shoemain" className="mylink">
                            <div class="card card-2">
                                <img src={images2} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Adidas</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Shoemain" className="mylink">
                            <div class="card card-3">
                                <img src={images3} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Reebok</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="col-md-3">
                        <Link to="Shoemain" className="mylink">
                            <div class="card card-4">
                                <img src={images4} class="card-img-top mx-auto icons" alt="....." />
                                <h4 class="title">Sparx</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
</>
  )
}

export default Shoes