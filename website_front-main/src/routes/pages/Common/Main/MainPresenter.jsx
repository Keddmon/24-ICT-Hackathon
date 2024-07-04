import React from "react";

import './Main.css';
import { Kakao } from "../../../../Layout";



const MainPresenter = ({
    data,
    navigate
}) => {

    return (

        <Kakao
            data={data}
            navigate={navigate}
        />

    );
};

export default MainPresenter;