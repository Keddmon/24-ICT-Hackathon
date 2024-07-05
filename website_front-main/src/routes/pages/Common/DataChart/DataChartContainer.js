import { useParams } from "react-router-dom";
import DateChartPresenter from "./DataChartPresenter";


const DateChartContainer = () => {
  
  // const data = {
  //   "positions": [
  //     {
  //       "image": ["/images/1.png", "/images/2.png"],
  //       "month": 5
  //     },
  //     {
  //       "image": "images/3.png",
  //       "month": 6
  //     },
  //   ]
  // };
  const { id } = useParams();
  console.log(id);
  return (
    <DateChartPresenter/>

    
  );
};

export default DateChartContainer;