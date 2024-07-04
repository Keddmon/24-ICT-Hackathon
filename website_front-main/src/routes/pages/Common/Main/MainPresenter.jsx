import React from "react";

import './Main.css';
import { Graphe, Kakao } from "../../../../Layout";



const MainPresenter = ({
    data,
    navigate
}) => {

    return (
        <>
        <Kakao
            data={data}
            navigate={navigate}
        />
        <Graphe />
        </>

    );
};

export default MainPresenter;