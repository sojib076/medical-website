import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from "../ui/button";

const Banner = () => {
    return (

        <>
            <Carousel>
                <CarouselContent>
                    <CarouselItem> <div className="">
                        <div
                            className="grid lg:grid-cols-2 grid-cols-1 lg:px-48 lg:pt-10  bg-[#C0D3DD] lg:h-[700px] h-[100vh]"
                            style={{
                                backgroundImage: `url(https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/home-1-slider-2.jpg)`,
                                backgroundSize: 'cover',
                            }}
                        >
                            <div className="  ">
                                <div
                                    className="relative  z-0">
                                    <h1
                                        className="lg:text-[153px] text-[97px]  font-bold 
                                        text-white  
                                         lg:opacity-90 opcaity-50 w-fit h-fit bg-clip-text text-transparent">
                                        Medical
                                    </h1>

                                </div>

                                <div className="z-10 relative lg:mt-[-20%] mt-[-20%] lg:p-0 p-3 ">
                                    <h6 className="font-medium lg:text-[20px]text-[15px] lg:bg-transparent bg-[#fffffff1]">
                                        Welcome to health care
                                    </h6>
                                    <h1 className="lg:text-[85px] text-6xl font-medium lg:leading-[90px]">
                                        Medical &  Health Care Solutions.
                                    </h1>
                                    <Button
                                        
                                      className="bg-[#E12354] text-white rounded-full px-14 py-7  hover:bg-secondary-100 lg:mt-10 mt-5 "
                                    >
                                        Get Started








                                        
                                    </Button>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    </CarouselItem>



                </CarouselContent>
                <CarouselPrevious className="ml-20 mt-40
                lg:mt-0
                   
                " />

                <CarouselNext
                    className="mr-20 mt-40 
                    lg:mt-0
                    "



                />
            </Carousel>

        </>
    );
};

export default Banner;
