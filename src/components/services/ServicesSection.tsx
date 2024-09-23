import { Heart, Microscope } from "lucide-react";
import { GiAmbulance, GiDoctorFace } from "react-icons/gi";
import DynamicButton from "../CommonParts/DynamicButton";


const ServicesSection = () => {
  // json file with lucide icons
  const services = [
    {
      "id": 1,
      "name": "Free Doctor",
      "icon": <GiDoctorFace />
    },
    {
      "id": 2,
      "name": "Free Ambulance",
      "icon": <GiAmbulance />
    },
    {
      "id": 3,
      "name": "Free Medicine",
      "icon": <GiAmbulance />
    },
    {
      "id": 4,
      "name": "Free Pathology",
      "icon": <Microscope />
    },
    {
      "id": 5,
      "name": "Free Donor",
      "icon": <Heart />
    },
    {
      "id": 6,
      "name": "Free X-Rays",
      "icon": <Heart />
    },
  ]




  return (
    <>
      <div className=" mx-auto   lg:p-20 p-2 ">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center">

          {/* Left Section - Text */}
          <div className="lg:w-[40%] text-left">
            <span className="text-red-600 font-semibold text-lg">Popular Services</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mt-2">
              We Provide The Best Health Services.
            </h1>
            <div className="mt-4 h-1 w-12 bg-green-400"></div>
            <p className="text-gray-500 mt-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
            </p>
            <div className="relative inline-block mt-5 ">
              <DynamicButton
                buttonText="Learn  More About Us"
                textColor="text-red-500"
                px="px-8"
                py="py-4"
              />

            </div>

          </div>

          {/* Right Section - Services Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-3 mt-10 lg:mt-0">

            {



              services.map((service) => (
                <div className="relative group" key={service.id}>


                  {/* Main Content Div */}
                  <div className="relative cursor-pointer bg-gray-100 lg:p-6 py-6 lg:w-[180px] w-[150px]  rounded-lg flex lg:flex-row flex-col items-center hover:scale-110  transition-all overflow-hidden">

                    <div className=" absolute h-[15em] w-[100px] 
                          
                          left-[-50px] top-[-50px]
                          
                          rotate-[-45deg]
                         
                                           bg-secondary-100 group-hover:bg-secondary-100 group-hover:scale-[200%] duration-700 z-[-1]">
                    </div>

                    <div className="bg-gray-200 p-3 rounded-full">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-[16px]">{service.name}</h3>
                    </div>
                  </div>

                </div>
              ))
            }

          </div>
        </div>
      </div>



    </>
  );
};

export default ServicesSection;
