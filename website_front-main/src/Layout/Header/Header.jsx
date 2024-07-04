import "./Header.css";

const Header = ({

}) => {
    return (
        <>
            <div className="header-list">
                <ul>
                    <li><a href="#">24시간전</a></li>
                    <li><a href="#">12시간전</a></li>
                    <li><a href="#">6시간전</a></li>
                </ul>
                <div className="header-time-box">
                    <div className="header-today">
                        <span>오늘</span>
                    </div>
                    <div className="header-time">
                        2024.04.14.18:09
                    </div>
                </div>
                <ul>
                    <li><a href="#">24시간전</a></li>
                    <li><a href="#">12시간전</a></li>
                    <li><a href="#">6시간전</a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;