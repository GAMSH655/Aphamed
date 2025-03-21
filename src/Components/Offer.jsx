import React from 'react'
import Enq from "../assets/Enq.png"
import Veg from "../assets/Veg.png"
import Printer from "../assets/Printer.png"
import Project from "../assets/Project.png"
import Customer from "../assets/Customer.png"
import Research from "../assets/Res.png"
import Transparency from "../assets/Transparency.png"
import Trust from "../assets/Trust.png"
import Fast from "../assets/Fast.png"
import Expert from "../assets/Expert.png"
import Custom from "../assets/Custom.png"
import Afford from "../assets/Afford.png"
const Offer = () => {
  const OfferArray = [
    {OfferImg:Printer , OfferTitle:"Printing services", offerText:"At Aphamed, we bring your ideas to life with top-tier printing solutions. Whether it's marketing materials, packaging, or large-format prints, we guarantee premium quality, sharp details, and vibrant colors. Trust us to make your brand unforgettable!Get in touch today!"
     },
    {OfferImg:Veg , OfferTitle:"brand designing", offerText:"Your brand is more than just a logo—it's the face of your business. At Aphamed, we specialize in crafting distinctive brand identities that capture your vision and connect with your audience. From logo design and color palettes to complete brand guidelines, we create cohesive and impactful visuals that set you apart."
     },
    {OfferImg:Project , OfferTitle:"Project analysis", offerText:"Successful projects start with a solid foundation. At Aphamed, we provide in-depth project analysis to identify opportunities, assess risks, and create strategic roadmaps for success. Our expert team evaluates every aspect of your project, ensuring efficiency, feasibility, and optimal results."
     },
    {OfferImg:Customer , OfferTitle:"customer feedback", offerText:"At Aphamed, we value every customer's experience and strive for continuous improvement. Your feedback helps us enhance our services, refine our solutions, and better meet your needs. Whether it’s a suggestion, a compliment, or a concern, we’re here to listen and grow with you."
     },
    {OfferImg:Research , OfferTitle:"project reserach", offerText:"Every great project begins with thorough research. At Aphamed, we conduct in-depth market analysis, competitor assessments, and feasibility studies to ensure your project is built on a strong foundation. Our research-driven approach helps you make informed decisions, minimize risks, and maximize success."
     },
    {OfferImg:Enq , OfferTitle:"Printing enquiries", offerText:"Have questions about our printing services? At Aphamed, we’re here to assist you with custom printing solutions, pricing, materials, and design options. Whether you need business cards, brochures, banners, or packaging, we ensure top-quality prints tailored to your requirements."
     },
  ]
  
  const sayArray = [
    {
     sayImg:Transparency , sayHeading:"Transparency" , sayText:"We believe in 100% transparency—no hidden fees, no misleading promises. From pricing to processes, we keep you fully informed every step of the way, ensuring you always know what to expect.."
    },
    {
     sayImg:Trust , sayHeading:"Trust" , sayText:"Our commitment to honesty and excellence has earned us the trust of countless customers. With verified professionals, genuine customer reviews, and a strong track record, you can be confident you’re making the right choice."
    },
    {
     sayImg:Fast, sayHeading:"fast delivery" , sayText:"We prioritize fast turnaround times while maintaining the highest quality standards. Our streamlined processes ensure that your project is delivered on time, every time."
    },
    {
     sayImg:Afford, sayHeading:"affordabillity" , sayText:"Transparent Pricing – No Surprises!We offer competitive rates without compromising on quality. No hidden fees, no unexpected costs—just fair pricing that fits your budget"
    },
    {
     sayImg:Custom, sayHeading:"customization" , sayText:"Every client is unique, and so are their requirements. We provide fully customizable solutions to ensure you get exactly what you need—nothing less, nothing more."
    },
    {
     sayImg:Expert, sayHeading:"expert" , sayText:"With years of hands-on experience, we bring deep expertise and proven success in delivering top-quality services. Our skilled professionals ensure that every project is handled with precision and care."
    },
   ]
  return (
    <div className='mt-[100px]'>
      <h3 className="text-4xl capitalize text-center text-colorPrimary font-bold"> what we offer</h3>
      <div className="block md:grid md:grid-cols-3">
        {
          OfferArray.map(({OfferImg , OfferTitle , offerText}, index )=>{
            return <div className="shadow-md rounded-md m-5 p-3" key={index}>
                <div className="flex justify-center items-center">
                   <img src={OfferImg} alt="" className='size-[50px]' draggable="false"/>
                </div>
                <h3 className="text-lg font-semibold  capitalize text-center font-merriweather-sans text-colorPrimary">{OfferTitle}</h3>
                <p className="font-normal p-2  font-merriweather-sans ">{offerText}</p>
            </div>
          })
        }
      </div>
      <div className="mt-[100px]">
      <h3 className="text-4xl capitalize text-center text-colorPrimary font-bold"> why choose us</h3>
      <div className="block md:grid md:grid-cols-3">
      {
          sayArray.map(({sayImg , sayHeading , sayText}, index )=>{
            return <div className="shadow-md rounded-md m-5 p-3">
                <div className="flex justify-center items-center">
                   <img src={sayImg} alt="" className='size-[50px]' draggable="false"/>
                </div>
                <h3 className="text-lg font-semibold  capitalize text-center font-merriweather-sans text-colorPrimary">{sayHeading}</h3>
                <p className="font-normal p-2 font-merriweather-sans ">{sayText}</p>
            </div>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Offer