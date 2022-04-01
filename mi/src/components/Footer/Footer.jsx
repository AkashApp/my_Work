import './Footer.scss';
import { RiArrowRightSLine, RiFacebookFill, RiYoutubeFill, RiTwitterFill } from "react-icons/ri";
import { ImInstagram } from "react-icons/im";

export const Footer= ()=>{
    return(
        <div className="Footer_Page">
            <div className="Footer_Email">
                <div className="Left_side">
                    <div className="Left_first">
                        <h3>LET'S STAY IN TOUCH</h3>
                        <p>Get updates on sales specials and more</p>
                    </div>
                    <div className="Left_second">
                        <input type="email" placeholder='Enter Email Address'/>
                        <a href="#"><RiArrowRightSLine className="R_Arrow"/></a>
                    </div>
                </div>
                <div className="Right_side">
                    <div className="Right_first">
                        <h3>FOLLOW MI</h3>
                        <p>We want to hear from you!</p>
                    </div>
                    <div className="Right_second">
                        <a href="#"><RiFacebookFill className="L_Logos"/></a>
                        <a href="#"><RiYoutubeFill className="L_Logos"/></a>
                        <a href="#"><ImInstagram className="L_Logos"/></a>
                        <a href="#"><RiTwitterFill className="L_Logos"/></a>
                    </div>
                </div>
            </div>
            <img src="https://user-images.githubusercontent.com/93377428/160822436-e99824c6-bf2c-4892-9e39-ce83782e5fe6.png" className="Black_Image" alt="Footer_Image" />
        </div>
    );
}