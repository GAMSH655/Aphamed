import React from 'react'
import Enq from "../assets/Enq.png"
import Deg from "../assets/Deg.png"
import Printer from "../assets/Printer.png"
import Project from "../assets/Project.png"
import Customer from "../assets/Customer.png"
import Research from "../assets/Res.png"
const Offer = () => {
  const OfferArray = [
    {OfferImg:Printer , OfferTitle:"Printing services", offerText:"At Aphamed, we bring your ideas to life with top-tier printing solutions. Whether it's marketing materials, packaging, or large-format prints, we guarantee premium quality, sharp details, and vibrant colors. Trust us to make your brand unforgettable!Get in touch today!"
     },
    {OfferImg:Deg , OfferTitle:"brand designing", offerText:"At Aphamed, we bring your ideas to life with top-tier printing solutions. Whether it's marketing materials, packaging, or large-format prints, we guarantee premium quality, sharp details, and vibrant colors. Trust us to make your brand unforgettable!Get in touch today!"
     },
    {OfferImg:Project , OfferTitle:"Project analysis", offerText:"At Aphamed, we bring your ideas to life with top-tier printing solutions. Whether it's marketing materials, packaging, or large-format prints, we guarantee premium quality, sharp details, and vibrant colors. Trust us to make your brand unforgettable!Get in touch today!"
     },
    {OfferImg:Customer , OfferTitle:"customer feedback", offerText:"At Aphamed, we bring your ideas to life with top-tier printing solutions. Whether it's marketing materials, packaging, or large-format prints, we guarantee premium quality, sharp details, and vibrant colors. Trust us to make your brand unforgettable!Get in touch today!"
     },
    {OfferImg:Research , OfferTitle:"projct reserach", offerText:"At Aphamed, we bring your ideas to life with top-tier printing solutions. Whether it's marketing materials, packaging, or large-format prints, we guarantee premium quality, sharp details, and vibrant colors. Trust us to make your brand unforgettable!Get in touch today!"
     },
    {OfferImg:Enq , OfferTitle:"Printing enquiries", offerText:"At Aphamed, we bring your ideas to life with top-tier printing solutions. Whether it's marketing materials, packaging, or large-format prints, we guarantee premium quality, sharp details, and vibrant colors. Trust us to make your brand unforgettable!Get in touch today!"
     },
  ]
  return (
    <div className='mt-[100px]'>
      <h3 className="text-2xl capitalize text-center text-[#FF6B6B] font-bold"> what we offer</h3>
      <div className="block md:grid md:grid-cols-3">
        {
          OfferArray.map(({OfferImg , OfferTitle , offerText}, index )=>{
            return <div className="shadow-md rounded-md m-5 p-3">
                <div className="flex justify-center items-center">
                   <img src={OfferImg} alt="" className='size-[50px]' />
                </div>
                <h3 className="text-lg font-semibold  capitalize text-center">{OfferTitle}</h3>
                <p className="font-normal p-2 ">{offerText}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Offer