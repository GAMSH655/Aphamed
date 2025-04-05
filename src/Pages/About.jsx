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
          Welcome to Aphamed Prints, your premier printing solutions provider. We are a standard printing company dedicated to delivering top-notch printing services that exceed our clients' expectations.
          At Aphamed Prints,We deliver topnotch services to individuals, businesses and organizations.
           <br />
           At Aphamed Prints, our mission is to provide high-quality printing services that meet the evolving needs of our clients. We strive to build long-lasting relationships with our clients, founded on trust, excellence, and customer satisfaction.

          </p>
        </div>
        <img src={Abt} alt="About Us" className="md:w-1/3 md:ml-10 mt-6 md:mt-0" />
      </div>
  
      {/* Meet the Founder Section */}
      <div className="flex flex-col md:flex-row-reverse justify-evenly items-center px-6 md:px-10 py-10">
        <div className="max-w-2xl">
          <h3 className="text-4xl font-merriweather-sans font-bold capitalize mb-4">Meet the Founder</h3>
          <p className="text-gray-700 leading-relaxed">
          HAMMED MUSTAPHA OLAWALE: A Visionary Entrepreneur
          HAMMED MUSTAPHA OLAWALE is the founder and driving force behind Aphamed Prints. With a passion for printing and a keen eye for detail, HAMMED MUSTAPHA OLAWALE has built a reputation for delivering high-quality printing services that exceed clients' expectations.
          </p>
          <p className=" leading-relaxed">
          After completing his education, HAMMED MUSTAPHA OLAWALE worked in the printing industry for several years, honing his skills and learning the intricacies of the trade. In 2018/2019 and he decided to take the leap and start his own printing company, Aphamed Prints.
            
          When he's not running Aphamed Prints, HAMMED MUSTAPHA OLAWALE enjoys Playing Football and watching football matches and spending time with his Family and friends..
          </p>
        </div>
        <img src={Bh} alt="Founder" className="w-full md:w-1/3 md:mr-10 mt-6 md:mt-0" />
      </div>
    </div>
  );
  
}

export default About