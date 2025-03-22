import React from 'react'
import Abt from "../assets/Abt.jpg"
import Bh from "../assets/Bh.jpg"
// npm install -g @sanity/cli
const About = () => {
  return (
    <div>
      {/* About Us Header */}
      <div className="flex justify-center items-center text-center py-24 md:py-32  about">
        <h3 className="text-white font-sans text-4xl md:text-5xl capitalize">About Us</h3>
      </div>
  
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row justify-evenly items-center px-6 md:px-10 py-10">
        <div className="max-w-2xl">
          <h3 className="font-merriweather-sans font-bold text-3xl capitalize mb-4">About Us</h3>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolorum expedita corporis cum nam, ad ut amet consequatur quas! Modi nihil totam obcaecati nostrum esse possimus eaque asperiores iste quos.
            Deserunt, cum, distinctio est consequatur obcaecati ipsum id architecto consectetur et animi earum laboriosam natus deleniti voluptatum autem sapiente voluptate adipisci eveniet, repudiandae amet doloribus blanditiis quia. Sed, deserunt dolorem?
            Odit numquam, laudantium doloremque consequatur ex beatae dolor eum ipsam adipisci quisquam, rerum temporibus autem quae quas, aliquid non ducimus eaque? Animi officia minus excepturi, culpa eos molestias.
          </p>
        </div>
        <img src={Abt} alt="About Us" className="md:w-1/3 md:ml-10 mt-6 md:mt-0" />
      </div>
  
      {/* Meet the Founder Section */}
      <div className="flex flex-col md:flex-row-reverse justify-evenly items-center px-6 md:px-10 py-10">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-merriweather-sans font-bold capitalize mb-4">Meet the Founder</h3>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolorum expedita corporis cum nam, ad ut amet consequatur quas! Modi nihil totam obcaecati nostrum esse possimus eaque asperiores iste quos.
            Deserunt, cum, distinctio est consequatur obcaecati ipsum id architecto consectetur et animi earum laboriosam natus deleniti voluptatum autem sapiente voluptate adipisci eveniet, repudiandae amet doloribus blanditiis quia. Sed, deserunt dolorem?
            Odit numquam, laudantium doloremque consequatur ex beatae dolor eum ipsam adipisci quisquam, rerum temporibus autem quae quas, aliquid non ducimus eaque? Animi officia minus excepturi, culpa eos molestias.
          </p>
        </div>
        <img src={Bh} alt="Founder" className="w-full md:w-1/3 md:mr-10 mt-6 md:mt-0" />
      </div>
    </div>
  );
  
}

export default About