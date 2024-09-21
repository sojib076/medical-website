import Contactus from "@/components/About/Contact";
import FAQSection from "@/components/About/FAQ";
import Services from "@/components/Home/services";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Image from "next/image";


const page = () => {
  return (
    <div>

      <div className="lg:h-[380px] "
        style={
          {
            backgroundImage: `url('https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/banner.jpg')`,
            backgroundSize: 'cover',


          }

        }
      >

        <div className="flex items-center justify-center lg:h-[380px] lg:py-14  text-center text-white">
          <div>
            <h1 className="font-bold text-4xl">
              About Us
            </h1>
            <p>
              Doctio// <span className="text-secondary-100 font-medium">About Us</span>
            </p>
          </div>
        </div>


      </div>

      {/* about the company  */}
      <div className="grid lg:grid-cols-2 grid-cols-1   lg:gap-10 mt-0 md:mt-20 lg:mt-10 w-[90%] mx-auto items-center h-full  lg:py-0 pb-40 ">
             

                <div>
                    <h1 className="lg:text-[150px] 
                    text-[100px] 
                        
                    font-bold text-black/30 opacity-20  
                   


                    lg:relative 
                    text-center
                    lg:text-left
                    
                    ">
                        About
                    </h1>

                    <div />
                    <div className="relative lg:mt-[-90px] mt-[-50px] bg-[#ffffffcb] lg:text-left text-center ">
                        <h1 className="text-primary font-semibold ">
                            About Doctio
                        </h1>
                        <h1 className=" lg:text-[48px] text-3xl font-semibold  lg:leading-[58px] lg:w-[90%]  ">
                            Read Something About Doctio Health Care
                        </h1>

                        <Image
                            src="https://demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/line-1.png"
                            alt="line"
                            width={1000}
                            height={500}

                            className="lg:w-[25%] w-[40%] lg:mt-5 mt-2 mx-auto"
                        />

                        <p className="lg:w-[80%] text-justify my-5 text-[16px] p-2 font-light"> Sed ut pers piciatis unde omnis iste natus error sit volu ptatem accus antium one dolor emque laudan tium, totam rem aperiam, eaque ipsa quae ab illo invetore off veritatis et quasi and visit our service page architecto beatae vitae dicta suntpli. Nemoe ipsam volup and tate quia voluptas sit aspernatur aut odit aut fugit, sedon quia cquuntur magni dolores eos qui ratione.</p>
                        <p className="lg:w-[80%] text-justify my-5 text-[16px] p-2 font-light"> Sed ut pers piciatis unde omnis iste natus error sit volu ptatem accus antium one dolor emque laudan tium, totam rem aperiam, eaque ipsa quae ab illo invetore off veritatis et quasi and visit our service page architecto beatae vitae dicta suntpli. Nemoe ipsam volup and tate quia voluptas sit aspernatur aut odit aut fugit, sedon quia cquuntur magni dolores eos qui ratione.</p>
                        <div className="flex gap-5 p-2">
                            <Button

                                className="w-[200px] rounded-full bg-primaryown hover:bg-secondary-100 lg:mt-5 mt-2"
                            > Read More</Button>
                            {/* call with icons */}
                            <Button
                                className="w-[200px] rounded-full bg-transparent  text-black  text-[20px]
                                hover:bg-transparent hover:text-secondary-100
                            lg:mt-5 mt-2"
                            > <PhoneCall size={30} />
                                +123 456 7890

                            </Button>
                        </div>
                    </div>

                </div>

                <div className="relative top-5">
                    <Image
                        src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/caption-img-1.jpg"
                        alt="about"

                        width={1000}
                        height={500}
                        className=" w-[60%]
                          z-10
                        "
                    />
                    {/* only div in that  wiill have bg greena and text will be 25 year of experuce  */}
                    <div className=" bg-secondary-100 text-white  w-fit  lg:top-[17%] top-[50%] left-[40%]  absolute z-20 ">
                        <h1 className="  lg:w-[250px] lg:py-10 lg:pl-8 px-5 mx-auto">
                       <span className="lg:text-7xl text-5xl font-bold">25</span> <br/> <span className="lg:text-2xl">Years Of Experience in Medical Services</span>
                        
                        </h1>
                       

                    </div>

        
                    <Image
                        src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/caption-img-2.jpg "
                        alt="about"

                        width={1000}
                        height={500}
                        className=" w-[50%] lg:left-[30%] lg:top-[50%]   absolute top-[77%]  left-[40%]    "
                    />
                    </div>



               
               
            </div>

            <div className=""> 
            <Services />
            </div>

          <FAQSection />
          <Contactus />

    </div>
  );
};

export default page;