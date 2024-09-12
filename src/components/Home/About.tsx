import Image from "next/image";

const About = () => {
    return (
        <div>
            <div className="lg:grid grid-cols-2 gap-10 ">
                <div className="grid grid-cols-2 lg:gap-5 relative lg:p-10 p-5 z-20" >
                    <div className="lg:w-[75%] w-[100%] h-56" >
                        <Image
                            src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/three-image-3.jpg"
                            alt="about"
                            layout="responsive"
                            width={100}
                            height={500}
                            className="relative inset-0 lg:top-[200px] top-[80px] 
                      lg:left-32
                      z-20
                        
                      "
                        />

                    </div>
                    <div className=" grid grid-cols-1 gap-4">
                        <Image
                            src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/three-image-1.jpg "
                            alt="about"
                            layout="responsive"
                            width={1000}
                            height={500}
                            className="  relative lg:left-8"
                        />
                        <Image
                            src="https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/three-image-2.jpg"
                            alt="about"
                            layout="responsive"
                            width={1000}
                            height={500}
                            className="z-10 "
                        />

                    </div>


                </div>
                <div>
                    <h1 className="lg:text-[150px] 
                    text-[100px] 
                        
                    font-bold text-gray-300 opacity-30  
                    bg-clip-text text-transparent text-center


                    
                    lg:relative left-[-100px]
                    
                    ">
                        About
                    </h1>

                    <div />
                    <div className="relative lg:mt-[-90px] mt-[-50px] bg-[#ffffffcb] lg:text-left text-center ">
                        <h1 className="text-primary font-semibold ">
                            About Doctio
                        </h1>
                        <h1 className=" lg:text-[48px] text-3xl font-semibold  lg:leading-[58px] lg:w-[90%] ">
                            Read Something About Doctio Health Care
                        </h1>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;