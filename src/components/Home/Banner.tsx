const Banner = () => {
    return (
        <div className="">
            <div
                className="grid lg:grid-cols-2 grid-cols-1 lg:px-48 lg:pt-10  bg-[#C0D3DD] lg:h-[600px]
            
                "
                style={{
                    backgroundImage: `url(https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/home-1-slider-2.jpg)`,
                    backgroundSize: 'cover',

                }}
            >
                <div className="lg:p-5 px-3 pb-5  ">
                    <div


                        className="absolute inset-0 lg:top-28  lg:left-[140px] top-[10px] left-2 z-0">
                        <h1

                            className="lg:text-[150px] text-[40px]  font-bold text-white lg:opacity-90 
                            opcaity-50
                        w-fit h-fit
                        
                        bg-gradient-to-b from-[#FFFFFFF2] to-[#D7E4EC29] bg-clip-text text-transparent

        
                        ">
                            Medical
                        </h1>

                    </div>

                    <div className="z-10 relative ">
                        <h6 className="font-medium 
                        lg:text-[20px]
                        text-[15px] 
                        mt-10
                        ">
                            Welcome to health care
                        </h6>
                        <h1 className="lg:text-[85px] text-3xl font-medium lg:leading-[90px]">
                            Medical & <br /> Health Care <br /> Solutions.
                        </h1>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
