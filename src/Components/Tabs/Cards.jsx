import React from 'react'
import Card from "../../assets/Plastic.jpg"
import Trans from "../../assets/Trans.jpg"
import Bl from "../../assets/Bl.jpg"
const Cards = () => {
  const cardArray = [
    {
      cardImg: Card , CardTitle: "Dasveg" , cardContent: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis, corrupti qui quam accusamus cum harum, quasi eius quisquam magnam consequatur autem delectus blanditiis ipsa porro atque, placeat hic repellendus?"
    },
    {
      cardImg: Trans, CardTitle: "Dasveg" , cardContent: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis, corrupti qui quam accusamus cum harum, quasi eius quisquam magnam consequatur autem delectus blanditiis ipsa porro atque, placeat hic repellendus?"
    },
    {
      cardImg: Bl, CardTitle: "Dasveg" , cardContent: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis, corrupti qui quam accusamus cum harum, quasi eius quisquam magnam consequatur autem delectus blanditiis ipsa porro atque, placeat hic repellendus?"
    },
    {
      cardImg: Card , CardTitle: "Dasveg" , cardContent: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis, corrupti qui quam accusamus cum harum, quasi eius quisquam magnam consequatur autem delectus blanditiis ipsa porro atque, placeat hic repellendus?"
    },
    {
      cardImg: Card , CardTitle: "Dasveg" , cardContent: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis, corrupti qui quam accusamus cum harum, quasi eius quisquam magnam consequatur autem delectus blanditiis ipsa porro atque, placeat hic repellendus?"
    },
    {
      cardImg: Card , CardTitle: "Dasveg" , cardContent: "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut corporis, corrupti qui quam accusamus cum harum, quasi eius quisquam magnam consequatur autem delectus blanditiis ipsa porro atque, placeat hic repellendus?"
    },
  ]
  return (
    <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cardArray.map(({ cardImg, CardTitle, cardContent }, index) => (
        <div className="shadow-lg rounded-md p-4 w-full" key={index}>
          <img
            src={cardImg}
            alt=""
            className="w-full h-[200px] object-cover rounded-t-md"
          />
          <h3 className="text-colorPrimary font-merriweather-sans text-lg font-bold">
            {CardTitle}
          </h3>
          <p className="font-merriweather-sans text-sm">{cardContent}</p>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Cards