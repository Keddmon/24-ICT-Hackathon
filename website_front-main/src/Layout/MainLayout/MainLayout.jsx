import Header from "../Header";
import SideBar from "../SideBar";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="mainlayout-container">
                <SideBar />
                <div className="content-container">
                    {children}
                </div>
            </div>
        </>
    );
};

export default MainLayout;