import { useParams } from "react-router-dom";
import DateWarningsPresenter from "./DateWarningsPresenter"

const DateWarningsContainer = () => {
  
  const data = {
    "positions": [
      {
        "image": ["/images/1.png", "/images/2.png"],
        "month": 5
      },
      {
        "image": "images/3.png",
        "month": 6
      },
    ]
  };
  const { id } = useParams();
  console.log(id);
  return (
    <DateWarningsPresenter
    id={id}
    data={data}
    />
  );
};

export default DateWarningsContainer;