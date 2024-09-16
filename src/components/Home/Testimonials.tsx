
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Testimonials = () => {
    return (
        <div className="lg:w-[78%] w-[80%] mx-auto md:mt-20 my-36">
           <div className="mb-10"> 
           <h1 className="text-sm  text-green-500 mb-2 w-[50%] font-bold"> 
              Testimonials
            </h1>
           <h1 className="lg:text-5xl text-3xl lg:w-[50%] font-bold"> 
     What Our Patient Say About Our Caring
            </h1>

           </div>
            <Carousel className="" autoScrollInterval={2000} >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-[60%] py-10  px-5 
                    
                        ">
                            <div className=" bg-white shadow-lg rounded-lg grid lg:grid-cols-3 items-center p-5    hover:scale-110  
                            transition duration-300 ease-in-out transform
                            ">
                                <div className="
        
                                   
                                w-[100%]
                                " >
                                 
                                    <img
                                        src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/team-member-3.jpg"
                                        alt="User"
                                        className="lg:w-32 lg:h-32 rounded-full lg:ml-0 ml-[62%] w-[70%] "
                                    />
                                    

                                </div>

                                {/* Testimonial Content */}
                                <div className="col-span-2">
                                <h1 className="text-green-500 font-bold text-center"> 
                                    SoftechLimited
                                </h1>
                                <p className="text-gray-600 mb-4 text-sm  text-justify">
                                    Lorem ipsum is a dolor sitae amet consectetur of and the voluptata
                                    laboriosam and then null on the often delenitie reiciendis as
                                    voluptatibus and the laboriosam on and nulla deleniti and many lore
                                    other important quotes.
                                </p>

                                {/* User Info */}
                                <div className="flex items-center justify-center lg:justify-start">
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
                </CarouselContent >
                <CarouselPrevious 
                    className="bg-primaryown w-14 h-14 rounded-full text-white"
                />
                <CarouselNext  
                className="bg-primaryown w-14 h-14 rounded-full text-white"
                />
            </Carousel>
        </div>
    );
};

export default Testimonials;