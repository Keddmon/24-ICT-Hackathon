import Graphe from "../Graphe";
import Header from "../Header";
import SideBar from "../SideBar";
import "./MainLayout.css";

const MainLayout = ({
    children
}) => {
    return (
        <>
            <Header />
            <SideBar />
            <div className="mainlayout-container">
                {children}
            </div>
        </>
    );
};

export default MainLayout;