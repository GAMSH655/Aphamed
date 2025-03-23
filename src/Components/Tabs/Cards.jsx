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
    <div>
       <div className="block md:grid md:grid-cols-3 gap-5">
             {
              cardArray.map(({cardImg , CardTitle , cardContent}, index)=>{ 
                 return <div className="shadow-lg rounded-md  p-2 w-full m-[20px]:" key={index}>
                  <img src={cardImg} alt="" className='size-[200px] object-cover w-full  rounded-tl-md rounded-tr-md'/>
                   <h3 className="text-colorPrimary font-merriweather-sans text-lg font-bold">{CardTitle}</h3>
                    <p className="font-merriweather-sans text-sm">{cardContent}</p>
                </div>
              })
             }
       </div>
    </div>
  )
}

export default Cards