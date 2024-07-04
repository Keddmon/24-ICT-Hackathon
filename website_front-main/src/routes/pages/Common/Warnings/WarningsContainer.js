import { useParams } from "react-router-dom";
import WarningsPresenter from "./WarningsPresenter";

const data = {
    "positions": [
        {
            "image": "images/1.png"
        },
        {
            "image": "images/2.png"
        },
        {
            "image": "images/3.png"
        },
    ]
}

const WarningsContainer = () => {

    const { id } = useParams();
    console.log(id)
    
    return (
        <WarningsPresenter
            id={id}
        />
    );
};

export default WarningsContainer;