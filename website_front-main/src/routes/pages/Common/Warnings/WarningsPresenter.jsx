import { ImageBox } from "../../../../Layout";

const WarningsPresenter = ({
    id,
    data,
}) => {
    return (
        <div className="warnings-container">
            <ImageBox
                src={data.positions[id].image}
                content={data.positions[id].content}
            />
        </div>
    );
};

export default WarningsPresenter;