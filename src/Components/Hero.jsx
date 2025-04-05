import React  , {useEffect}from 'react'
import Printing from "../assets/Aphamedhome.jpg"
import { FaLinkedin , FaTwitter , FaFacebook , FaInstagram} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Hero = () => {
    const socialMediaLink = [
        { socialLink: "https://www.linkedin.com/in/aphamed-prints-b25a24328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", socialMediaName: "LinkedIn", socialMediaIcon: <FaLinkedin /> },
        { socialLink: "https://x.com/certifiedomoal1?s=21", socialMediaName: "Twitter", socialMediaIcon: <FaTwitter /> },
        { socialLink: "https://www.facebook.com/share/1Bff6352XN/?mibextid=LQQJ4d", socialMediaName: "Facebook", socialMediaIcon: <FaFacebook /> },
        { socialLink: "https://www.instagram.com/aphamedprints/profilecard", socialMediaName: "Instagram", socialMediaIcon: <FaInstagram /> },
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
          duration: 500, // values from 0 to 3000, with step 50ms
          easing: 'ease', // default easing for AOS animations
          once: false, // whether animation should happen only once - while scrolling down
          mirror:true, // whether elements should animate out while scrolling past them
          anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
        
        });
     },[])
  return (
    <div 
    className='  text-white hero ' data-aos="zoom-in"> 
      <img src={Printing} alt="" className="" />
      {
        socialMediaLink.map(({socialLink , socialMediaIcon , socialMediaName}, index)=>{
          return <div className="flex justify-center " key={index}>
            <a href={socialLink} className='text-colorPrimary' >
            {socialMediaIcon}
          </a>
          </div>
        })
      }
    </div>
  )
}

export default Hero