import "./SideBar.css";

const SideBar = ({

}) => {


    return (
        <>
            <div className="sidebar-container" >
                <div className="sidebar-box">
                    <div className="sidebar-title">
                        <span>기능</span>
                    </div>
                    <div className="sidebar-subtitle">
                        현황을 확인해 보세요
                    </div>
                    <div className="sidebar-function">
                        <span>실시간 모니터링</span>
                        <span>경고 시스템</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;