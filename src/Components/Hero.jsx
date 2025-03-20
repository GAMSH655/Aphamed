import React  , {useEffect}from 'react'
import Printing from "../assets/Printing.jpg"
import { FaLinkedin , FaTwitter , FaFacebook , FaInstagram} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Hero = () => {
    const socialMediaLink = [
        { socialLink: "https://www.linkedin.com/in/sheriff-adekoya-arpa-34084939/?originalSubdomain=ng", socialMediaName: "LinkedIn", socialMediaIcon: <FaLinkedin /> },
        { socialLink: "https://x.com/sheriffadekoya?lang=bn", socialMediaName: "Twitter", socialMediaIcon: <FaTwitter /> },
        { socialLink: "https://x.com/sheriffadekoya?lang=bn", socialMediaName: "Facebook", socialMediaIcon: <FaFacebook /> },
        { socialLink: "https://x.com/sheriffadekoya?lang=bn", socialMediaName: "Instagram", socialMediaIcon: <FaInstagram /> },
    ];

     useEffect(()=>{
        AOS.init();

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
          // Global settings:
          disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
          startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
          initClassName: 'aos-init', // class applied after initialization
          animatedClassName: 'aos-animate', // class applied on animation
          useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
          disableMutationObserver: false, // disables automatic mutations' detections (advanced)
          debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
          throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
          
        
          // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
          offset: 120, // offset (in px) from the original trigger point
          delay: 0, // values from 0 to 3000, with step 50ms
          duration: 400, // values from 0 to 3000, with step 50ms
          easing: 'ease', // default easing for AOS animations
          once: false, // whether animation should happen only once - while scrolling down
          mirror:true, // whether elements should animate out while scrolling past them
          anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        
        });
     },[])
  return (
    <div 
    className='flex justify-evenly m-5  shadow-lg p-6'
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
     > 
         <div className="p-5 mt-[10px] md:mt-[100px]">
         <h3 className="text-center md:text-left text-4xl font-bold m-5  text-[#FF6B6B] capitalize">
             Welcome to aphamed
             </h3>
         <h3 className="text-center md:text-left text-lg font-bold m-5 text-[#FF6B6B] capitalize">
           Bringing Your Ideas to Life with High-Quality Printing!
           </h3>
           <p  className=' break-words leading-loose text-black text-sm md:text-[16ox] font-semibold  m-5 mt-[10px] text-center md:text-left'>
           At Aphamed, we believe that every print tells a story. Whether you’re looking for business cards, brochures, banners, or custom packaging, we ensure precision, vibrant colors, and premium materials in every project. Our state-of-the-art printing technology guarantees sharp details and long-lasting prints that leave a lasting impression.
           </p>
           <div className="flex justify-center md:justify-start mt-[10px] m-5">
                    {socialMediaLink.map(({ socialLink, socialMediaName, socialMediaIcon }, index) => (
                        <a key={index} href={socialLink} className='text-black text-2xl font-semibold m-1 transition-all hover:text-[#704ff2cf] text-center md:text-left'>
                            {socialMediaIcon}
                        </a>
                    ))}
                </div>
         </div>
         <img src={Printing} alt="" className='size-[500px]' />
    </div>
  )
}

export default Hero