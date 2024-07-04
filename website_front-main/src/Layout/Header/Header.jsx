import { Link } from "react-router-dom";
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
                        <span><Link to="/">오늘</Link></span>
                    </div>
                    <div className="header-time">
                        2024. 07. 05. 08:04
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