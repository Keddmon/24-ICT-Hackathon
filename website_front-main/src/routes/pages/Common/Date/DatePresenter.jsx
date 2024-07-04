import { Graphe } from "../../../../Layout";
import "./Date.css";

const DatePresenter = ({

}) => {
    return (
        <div className="date-container">
            <div className="date-wrap">
                <Graphe
                    title={'위험사건 발생추이'}
                    text={'년도별 사건 발생 차트'}
                    labels={['2022', '2023', '2024']}
                    datas={[41, 36, 30]}
                />
                <Graphe
                    title={'위험사건 발생추이'}
                    text={'분기별 사건 발생 차트'}
                    labels={['1분기', '2분기', '3분기', '4분기']}
                    datas={[21, 19, 13, 9]}
                />

            </div>
            <div className="date-wrap">
                <Graphe
                    title={'위험사건 발생추이'}
                    text={'월별 사건 발생 차트'}
                    labels={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']}
                    datas={[32, 21, 23, 12, 32, 19, 20, 11, 12, 8, 10, 5]}
                />
                <Graphe
                    title={'위험사건 발생추이'}
                    text={'주간별 사건 발생 차트'}
                    labels={['1', '2', '3', '4']}
                    datas={[10, 11, 8, 7]}
                />

            </div>
        </div>
    );
};

export default DatePresenter;