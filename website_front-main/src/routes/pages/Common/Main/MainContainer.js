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
            },
            {
                "lat": 35.100279,
                "lng": 129.039616,
            },
            {
                "lat": 35.123162,
                "lng": 129.066569,
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