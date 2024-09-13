
import Image from 'next/image';
import bgImage from '../../../public/services.jpg';
import { User2 } from 'lucide-react';

const OurServices = () => {
    return (
        <div>
            <div 
                style={{ backgroundImage: `url('https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/section-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className=' w-full pb-10 mt-20'>

                <div className='' > 
                <h1 className="lg:text-[150px] 
                    text-[50px] 

                    font-bold text-black/30 opacity-20  
                   

                    lg:relative 
                    text-center
                 
                    
                    ">
                       Our Services
                    </h1>

                    <div className="relative lg:mt-[-90px] 
                    lg:mb-20 mb-5 mt-[-30px] bg-[#ffffffcb] lg:text-left text-center 
                     lg:w-[62%] lg:h-[45px] mx-auto ">
                        <h1 className="text-primary font-semibold text-center text-3xl lg:text-4xl  ">
                          Our Services
                        </h1>
                       
                        </div>
                  
                </div>
                <div className=' grid lg:grid-cols-3 gap-5  '>
                    <div> 
                        <div className=' shadow-2xl shadow-gray-200 lg:w-[60%] mx-auto p-5 py-14
                       bg-white  '> 
                            <User2 size={30} />
                            <h1 className='text-[24px] font-bold leading-8 mt-2' > 
                                Our Services
                            </h1>
                            <p className='w-[90%]'>
                            Sit consectetur adipiscin elit sed do eiusmod tempor
                            </p>
                            <p className='text-[16px] font-bold text-primaryown mt-5'>
                                Read More
                            </p>
                        </div>
                        
                        <div className='shadow shadow-white lg:w-[60%] mx-auto p-5 py-14
                       bg-white mt-5 lg:ml-[250px]  z-20 relative '> 
                            <User2 size={30} />
                            <h1 className='text-[24px] font-bold leading-8 mt-2' > 
                                Our Services
                            </h1>
                            <p className='w-[90%]'>
                            Sit consectetur adipiscin elit sed do eiusmod tempor
                            </p>
                            <p className='text-[16px] font-bold text-primaryown mt-5'>
                                Read More
                            </p>
                        </div>
                      
                    </div>
                    <div className='
                    w-[90%]
                    z-10
           
                    lg:relative
                    lg:block
                    hidden
                    '>
                        <Image src='https://i0.wp.com/demo.themedraft.net/wp/doctio/wp-content/uploads/2022/06/service-center-image.png'
                            width={1000}
                            height={500}
                            alt='services' />
                        

                    </div>
                    <div>
                    <div> 
                        <div className='shadow shadow-white lg:w-[60%] mx-auto p-5 py-14
                       bg-white  '> 
                            <User2 size={30} />
                            <h1 className='text-[24px] font-bold leading-8 mt-2' > 
                                Our Services
                            </h1>
                            <p className='w-[90%]'>
                            Sit consectetur adipiscin elit sed do eiusmod tempor
                            </p>
                            <p className='text-[16px] font-bold text-primaryown mt-5'>
                                Read More
                            </p>
                        </div>

                        <div className='shadow shadow-white lg:w-[60%] mx-auto p-5 py-14
                       bg-white mt-5 lg:mr-[200px]  '> 
                            <User2 size={30} />
                            <h1 className='text-[24px] font-bold leading-8 mt-2' > 
                                Our Services
                            </h1>
                            <p className='w-[90%]'>
                            Sit consectetur adipiscin elit sed do eiusmod tempor
                            </p>
                            <p className='text-[16px] font-bold text-primaryown mt-5'>
                                Read More
                            </p>
                        </div>
                    </div>
                    </div> 

                </div>

               
            </div>
        </div>
    );
};

export default OurServices;
