import { useParams } from "react-router-dom";
import WarningsPresenter from "./WarningsPresenter";

const data = {
    "positions": [
        {
            "lat": 35.103067,
            "lng": 129.043083,
            "image": "/images/1.png",
            "content": "불완전하게 적재된 팔레트"
        },
        {
            "lat": 35.100279,
            "lng": 129.039616,
            "image": "/images/2.png",
            "content": "파손된 팔레트와 함께 적재"
        },
        {
            "lat": 35.123162,
            "lng": 129.066569,
            "image": "/images/3.png",
            "content": "팔레트 적재상태 불량"
        },
    ]
}

const WarningsContainer = () => {

    const { id } = useParams();

    return (
        <WarningsPresenter
            id={id}
            data={data}
        />
    );
};

export default WarningsContainer;