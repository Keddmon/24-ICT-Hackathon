import React from "react";

import './Main.css';
import { Graphe, Kakao } from "../../../../Layout";



const MainPresenter = ({
    data,
    navigate
}) => {

    return (
        <div className="main-container">
            <Kakao
                data={data}
                navigate={navigate}
            />
            {/* <Graphe
            
            /> */}
        </div>

    );
};

export default MainPresenter;