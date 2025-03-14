import { ScreenFitText } from "@/framer/Screenfit";
import { VelocityText } from "@/framer/Velocitytext";

const Footer = () => {
    return (
      <footer className="p-0 relative  bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e]
text-center text-white">

    <ScreenFitText/>
        <p>&copy; 2025 Imkris. All rights reserved.</p>
    {/* <VelocityText/> */}
      </footer>
    );
  };
  
  export default Footer;
  