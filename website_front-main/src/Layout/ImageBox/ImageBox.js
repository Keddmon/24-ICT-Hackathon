import "./ImageBox.css";

const ImageBox = ({
    src,
    content,
}) => {
    return (
        <div className="imagebox-container">
            <div className="imagebox-wrap">
                <img
                    src={src}
                />
                <span>
                    {content}
                </span>
            </div>
        </div>
    );
};

export default ImageBox;