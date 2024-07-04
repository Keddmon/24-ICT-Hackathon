import { MainLayout } from "../../../../Layout";

const WarningsPresenter = ({
    id,
    data,
}) => {
    const imgUrl = data.positions[id];
    console.log(imgUrl.image)

    console.log(data.positions[id].image)
    return (
        <div>
            <img src={imgUrl.image}/>
        </div>
    );
};

export default WarningsPresenter;