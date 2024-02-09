import React, { useState } from "react";
import Itemlist from "./Hook9";

const Hook8 = () => {
    const [item, setItem] = useState([
        { name: "Mango", pic: "mango.jpg", oprice: 360, nprice: 290, dt: "Good Buy it", },
        { name: "Milk", pic: "milk.jpg", oprice: 40, nprice: 45, dt: "Good Buy it", },
        { name: "Grape", pic: "grape.jpg", oprice: 90, nprice: 96, dt: "Good Buy it", },
        { name: "Rice", pic: "rice.jpg", oprice: 80, nprice: 75, dt: "Good Buy it", },
    ])
    return (<>
        <div className="container mt-3 text-center">
            <div className="row">
                <div className="col-lg-12">
                    <h4> ReactJS Props Using Hooks Method</h4>
                </div>
                <div className="row mt-3">
                    <Itemlist
                        itemname="Apple"
                        photo="apple.jpg"
                        oldprice="200"
                        newprice="300"
                        details="Good & tasty Apple"
                    />
                    {item.map((iteminfo, index) => {
                        return (
                            <Itemlist
                                itemname={iteminfo.name}
                                photo={iteminfo.pic}
                                oldprice={iteminfo.oprice}
                                newprice={iteminfo.nprice}
                                details={iteminfo.dt}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    </>);
};

export default Hook8;