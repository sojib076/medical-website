import { Clock, Phone, X } from "lucide-react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";


const Header = () => {
    return (
        <div 
        className="lg:block hidden"
        >
            <div className="  flex justify-between px-1 bg-secondary-200 p-3 text-white text-[15px]">
                <div className="flex justify-between items-center gap-10">
                    <div className="flex items-center gap-2">
                        <Clock size={15}
                            className="
                    text-secondary-100
                    font-bold
                    "
                        />
                        <h1 className="font-medium">
                            Working Hour: 08.00am - 09.00pm
                        </h1>
                    </div>

                    |
                    <div className="flex items-center gap-2">
                        <Phone size={15}
                            className="
                    text-secondary-100
                    font-bold
                    "
                        />
                        <h1 className="font-medium">
                            Call Us: +91 1234567890
                        </h1>
                    </div>
                </div>
                {/* social links and email  from lucide ic */}
                 <div className="flex justify-between items-center gap-5">
                    <div className="flex items-center gap-5">
                      <FaFacebook size={20} className="text-white font-bold hover:text-secondary-100 
                        transition duration-300 ease-in-out
                        hover:scale-75
                      
                      " />
                      <BsYoutube size={20} className="text-white font-bold" />
                      <BsInstagram size={20} className="text-white font-bold" />
                            

                    </div>

                    |
                    <div className="flex items-center gap-1">
                        <Phone size={20}
                            className="
                    text-secondary-100
                    font-bold
                    "
                        />

                        <h1 className="font-medium">
                            sojib@1gmail.com
                        </h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center px-4 py-5"> 

                        <div> 
                            <h1 className="text-2xl font-bold text-primary-100">Logo</h1>
                        </div>
                        
                        <ul className="flex gap-10 items-center text-[15px] font-medium">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>

                        <button className="bg-primary px-14 py-3
                         font-medium rounded-full 
                         text-white
                            hover:scale-90
                            transition-all
                         ">

                            Contact us 
                        </button>
            </div>
        </div>
    );
};

export default Header;