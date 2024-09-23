import { Check, X } from 'lucide-react';
import PricingCard from '../components/PricingCard';

const plans = [
  {
    id: 1,
    planName: "Regular Plan",
    price: 23.5,
    discount: "Save 20%",
    features: {
      "Neurology Care": true,
      "Medical Care": true,
      "Child & Old Care": true,
      "Dental Care": false,
      "On-Time Delivery": false
    }
  },
  {
    id: 2,
    planName: "Business Plan",
    price: 24.5,
    discount: "Save 20%",
    features: {
      "Neurology Care": true,
      "Medical Care": true,
      "Child & Old Care": true,
      "Dental Care": true,
      "On-Time Delivery": false
    },
    middle: true
  },
  {
    id: 3,
    planName: "Exclusive Plan",
    price: 25.5,
    discount: "Save 20%",
    features: {
      "Neurology Care": true,
      "Medical Care": true,
      "Child & Old Care": true,
      "Dental Care": true,
      "On-Time Delivery": true
    }
  }
];

const Pricing = () => {
  return (
    <div className="bg-gray-100 lg:py-36  py-10 relative">
      <div className="container mx-auto text-center ">
      <h1 className="lg:text-[150px] 
                    text-[50px] 

                    font-bold text-black/30 opacity-20  
                   
                    z-0
                    lg:absolute
                    lg:top-[10%]
                    text-center
                    left-[240px]
                 
                    
                    ">
                 Our Pricing  
                    </h1>
        <h2 className="text-4xl font-bold mb-6">Our Pricing Packages </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0 gap-6 lg:px-20 px-10 lg:mt-[7%] relative z-10">
          {plans.map((plan) => (
       <div className={`bg-white rounded-lg shadow-md p-6 mx-auto lg:w-[80%] transition-all duration-300 ${
        plan.middle ? "lg:h-[500px] lg:shadow-2xl lg:shadow-red-400 lg:mt-[-10%] " : "lg:h-[450px]"
      }`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-700">{plan.planName}</h3>
            <span className="bg-green-200 text-green-700 text-sm font-medium px-2 py-1 rounded-full">
              {plan.discount}
            </span>
          </div>
    
          {/* Price Section */}
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-gray-800">${plan.price}</span>
            <span className="text-sm font-medium text-gray-500">/Month</span>
          </div>
    
          {/* Plan Description */}
          <p className="text-gray-500 text-center mb-6">
            Sed ut persp iciatis unde omnis natus volu ptatem accusantium dolorem.
          </p>
    
          {/* Plan Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold text-sm flex items-center hover:bg-pink-600">
              Choose Plan <span className="ml-2">+</span>
            </button>
          </div>
    
          {/* Features List */}
          <ul className="space-y-2 text-sm">
            {Object.entries(plan.features).map(([feature, available], index) => (
              <li key={index} className="flex items-center">
                {available ? (
                  <Check className="text-green-500 w-5 h-5 mr-2" />
                ) : (
                  <X className="text-gray-300 w-5 h-5 mr-2" />
                )}
                <span className={available ? "text-gray-700" : "text-gray-400"}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
