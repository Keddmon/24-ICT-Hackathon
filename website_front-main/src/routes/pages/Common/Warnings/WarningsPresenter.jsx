import { MainLayout } from "../../../../Layout";
import WarningImage from "./components/WarningImage";

const WarningsPresenter = ({
    id,
    data,
}) => {
    return (
        <div>
            <WarningImage
                id={id}
                data={data}
            />
        </div>
    );
};

export default WarningsPresenter;