import { useState } from "react";

const DateWarningsPresenter = ({
  id, data,
}) => {
  const imgs = []
  console.log(data.positions[0].image)
  const imgUrl = data.positions[0].image.map((img, idx)=>{
  console.log(img)
  console.log(idx)
  console.log(data.positions[idx].image[0])
  })
  console.log(imgUrl)

  return (
    <div>
      {
        data.positions[0].image.map((img, idx) => {
          return (
            <img src={img}/>
          )
        })
      }
      
    </div>
  );
};

export default DateWarningsPresenter;