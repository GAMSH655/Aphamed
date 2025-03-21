import React from 'react'
import Abt from "../assets/Abt.jpg"
import Bh from "../assets/Bh.jpg"
const About = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-center p-[9%] md:p-[10%]  about">
        <h3 className="text-white  font-sans text-[4rem] md:text-[5rem] capitalize">about us</h3>
        </div>
        
        <div  className=" block md:flex md:justify-evenly">
        <div>
           <h3 className="font-merriweather-sans font-bold text-3xl capitalize p-2 md:m-5"> about us</h3>
           <p className="p-2 md:m-5">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolorum expedita corporis cum nam, ad ut amet consequatur quas! Modi nihil totam obcaecati nostrum esse possimus eaque asperiores iste quos.
             Deserunt, cum, distinctio est consequatur obcaecati ipsum id architecto consectetur et animi earum laboriosam natus deleniti voluptatum autem sapiente voluptate adipisci eveniet, repudiandae amet doloribus blanditiis quia. Sed, deserunt dolorem?
             Odit numquam, laudantium doloremque consequatur ex beatae dolor eum ipsam adipisci quisquam, rerum temporibus autem quae quas, aliquid non ducimus eaque? Animi officia minus excepturi, culpa eos molestias
           </p>
        </div>
         <img src={Abt} alt="" className='md:m-5' />
        </div>
       <div className=" md:flex md:justify-evenly md:flex-row-reverse md:m-5">
         <div className="md:m-5">
             <h3 className="text-4xl  font-merriweather-sans font-bold p-2 capitalize">meet the founder</h3>
             <p className="p-2 break-words leading-loose">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolorum expedita corporis cum nam, ad ut amet consequatur quas! Modi nihil totam obcaecati nostrum esse possimus eaque asperiores iste quos.
             Deserunt, cum, distinctio est consequatur obcaecati ipsum id architecto consectetur et animi earum laboriosam natus deleniti voluptatum autem sapiente voluptate adipisci eveniet, repudiandae amet doloribus blanditiis quia. Sed, deserunt dolorem?
             Odit numquam, laudantium doloremque consequatur ex beatae dolor eum ipsam adipisci quisquam, rerum temporibus autem quae quas, aliquid non ducimus eaque? Animi officia minus excepturi, culpa eos molestias
           </p>
         </div>
         <img src={Bh} alt="" />
       </div>
    </div>
  )
}

export default About