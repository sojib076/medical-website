import Image from "next/image";


const Services = () => {
    return (
        <div className="  ">

            <div className="z-10 relative top-[-50px]">
                <div
                    className=" relative inset-0  top-[100px]  ">
                    <h1
                        className="lg:text-[150px] text-[78px]   font-bold text-green-900/30
                        
                        opacity-50   text-center
">
                        Services
                    </h1>

                </div>

                <div className="relative w-[100%] z-10 lg:w-[80%] mx-auto   ">
                    <h6 className="font-medium text-[20px] text-primary text-center ">
                        Our Services
                    </h6>
                    <h1 className="lg:text-[50px] text-3xl font-semibold text-center f">
                        Service We Provide
                    </h1>


                    <div className="grid lg:grid-cols-3 gap-4 lg:mt-5 items-cente lg:h-[400px]  ">
                        {
                            // fake map function
                            [1, 2, 3].map((item, index) => (
                                <div className="p-5 w-full  z-0 ">
                                    <Image
                                        src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/service-1.jpg"
                                        alt="service"

                                        width={1000}
                                        height={500}
                                    />

                                    <div className="shadow-lg p-5 bg-white mt-[-10%] lg:w-[90%] mx-auto z-10 rounded-md relative group">
                                        <h1 className="text-secondary-200 font-semibold text-center">
                                            Medical Consultation
                                        </h1>
                                        <p className="text-secondary-200 text-center">
                                            Lorem ipsum dolor sit amet,
                                        </p>
                                        {/* This will be shown on hover */}
                                        <h6 className="text-center mt-2 hidden group-hover:block font-medium
                                
                    
                                

                                ">
                                            <a href="#" className="text-primary">Read More</a>
                                        </h6>
                                    </div>


                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;