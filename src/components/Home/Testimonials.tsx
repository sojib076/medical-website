
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { IoLogOutSharp } from "react-icons/io5";
const Testimonials = () => {
    return (
        <div className="lg:w-[78%] w-[75%] mx-auto md:mt-20 my-36">
           <div className="mb-10"> 
           <h1 className="text-sm  text-green-500 mb-2 w-[50%] font-bold"> 
              Testimonials
            </h1>
           <h1 className="text-5xl w-[50%] font-bold"> 
     What Our Patient Say About Our Caring
            </h1>

           </div>
            <Carousel className="">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-[50%] py-10  px-5 ">
                            <div className=" bg-white shadow-lg rounded-lg grid grid-cols-3 items-center p-5  ">
                                <div className="
        
                                   
                                w-[100%]
                                " >
                                    {/* Profile Image */}
                                    <img
                                        src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/team-member-3.jpg"
                                        alt="User"
                                        className="w-32 h-32 rounded-full"
                                    />
                                    

                                </div>

                                {/* Testimonial Content */}
                                <div className="col-span-2">
                                <h1 className="text-green-500 font-bold"> 
                                    SoftechLimited
                                </h1>
                                <p className="text-gray-600 mb-4">
                                    Lorem ipsum is a dolor sitae amet consectetur of and the voluptata
                                    laboriosam and then null on the often delenitie reiciendis as
                                    voluptatibus and the laboriosam on and nulla deleniti and many lore
                                    other important quotes.
                                </p>

                                {/* User Info */}
                                <div className="flex items-center">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800">
                                            John Doe
                                        </h3>
                                        <p className="text-gray-500">Web Developer</p>
                                    </div>
                                </div>
                                </div>
                               

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default Testimonials;