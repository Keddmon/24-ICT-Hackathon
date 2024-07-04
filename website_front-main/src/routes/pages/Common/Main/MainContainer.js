import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MainPresenter from "./MainPresenter";

const MainContainer = () => {
    const navigate = useNavigate();

    const data = {
        "positions": [
            {
                "lat": 35.103067,
                "lng": 129.043083,
                "image": "images/1.png",
            },
            {
                "lat": 35.100279,
                "lng": 129.039616,
                "image": "images/2.png",
            },
            {
                "lat": 35.123162,
                "lng": 129.066569,
                "image": "images/3.png",
            },
        ]
    }

    return (
        <MainPresenter
            data={data}
            navigate={navigate}
        />
    )
}

export default MainContainer;