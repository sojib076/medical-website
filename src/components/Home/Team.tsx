import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";


const Team = () => {
    return (
        <>
             <div className="bg-[#f5f5f5] pb-10 mt-24  md:mt-52">
            <div className=" mx-auto">
                <div className="flex flex-col items-center lg:mt-20 lg:py-0 py-10">
                <h1 className="lg:text-[150px] 
                    text-[100px] 
                    font-bold text-black/30 opacity-20  
                   

                    lg:relative 
                    text-center
    
                    ">
                        Team
                    </h1>
                    <h2 className="text-4xl font-bold text-cente mt-[-20%] lg:mt-[-5%]">Meet Our Team</h2>
                    <Image
                            src="https://demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/line-1.png"
                            alt="line"
                            width={1000}
                            height={500}

                            className="lg:w-[15%] w-[20%] lg:my-8 mt-2 mx-auto"
                        />
                </div>
                <Carousel className="lg:w-[80%] w-[75%] mx-auto md:mt-20">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3  ">
                                <div className="p-1">
                                    <div className=
                                    " grid grid-cols-1 text-center ">
                                        
                                            <img
                                                src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/team-member-3.jpg"
                                                alt="team"
                                                className=" w-[70%] mx-auto  "
                                            />

                                            <div> 
                                                {/* round div green bg white text abosulate  */}
                                                <div className="bg-secondary-100 hover:bg-primaryown   lg:w-20 lg:h-20 h-16 
                                                 w-16  rounded-full mx-auto mt-[-15%] 
                                                  relative left-[-29%]  flex justify-center
                                                   items-center">
                                                    <p className="text-white font-bold lg:text-[13px] text-[10px] "> 
                                                        Explore more 
                                                    </p>
                                                    </div>
                                            </div>
                                            
                                            <div className="mt-"> 
                                                <h1 className="text-[22px] font-semibold"> 
                                                    John Doe
                                                </h1>
                                                <p> 
                                                    CEO
                                                </p>
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
        </div>
        <div className="mt-20 py-5 bg-primaryown  text-center text-[18px] font-medium text-white  ">
                        <h1>
                        Ready to get our medical care? We’re always wait for serve you, <span className="underline">Make an Appointment.</span>
                        </h1>
        </div>
        </>
    )
}







export default Team;