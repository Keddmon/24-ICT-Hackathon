const WarningImage = ({
    id,
    data
}) => {
    return (
        <div>
            <img src={data.positions[id].image}/>
        </div>
    );
};

export default WarningImage;