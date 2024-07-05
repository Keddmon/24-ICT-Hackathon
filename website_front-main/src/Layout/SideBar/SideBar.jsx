import "./SideBar.css";

const SideBar = ({

}) => {
    return (
        <div className="sidebar-container" >
            <div className="sidebar-box">
                <div className="sidebar-title">
                    <span>기능</span>
                </div>
                <div className="sidebar-subtitle">
                    현황을 확인해 보세요
                </div>
                <div className="sidebar-function">
                    <span><a href="/">실시간 모니터링</a></span>
                    <span><a href="/date">위험사건 발생추이</a></span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;