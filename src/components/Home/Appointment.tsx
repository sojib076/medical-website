import { User2Icon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

const StatsAndAppointment = () => {
    return (
       <div className='bg-gray-800 py-5'> 
         <div className=" lg:mt-36  grid lg:grid-cols-2 grid-cols-1 gap-10 lg:w-[70%] lg:p-0 p-5 mx-auto  ">
            {/* Stats Section */}
            <div className="grid grid-cols-2">
                
                {/* fake map  */}
                {
                    [1, 2, 3, 4].map((item, index) => (
                        <div className="flex flex-col lg:justify-start items-center mt-5 ">
                    <User2Icon size={50} className='text-green-500' />
                    <div className="text-green-400 text-4xl font-bold mt-5">3568+</div>
                    <p className="mt-4 text-[15px] font-medium text-white ">Professional Doctors</p>
                </div>
                    ))
                }
            </div>



            {/* Appointment Form */}
            <div className="mt-16 lg:mt-0  bg-green-400 text-white rounded-xl p-8">
        <h3 className="lg:text-3xl text-2xl  font-bold mb-6">Make an Appointment</h3>
        
        <div className="space-y-4">
          {/* Service Dropdown */}
          <div>
            <label className="block text-xl mb-2">Choose A Service</label>
            <select className="w-full px-4 py-2 text-black rounded">
              <option>Select a service</option>
              <option>General Consultation</option>
              <option>Dental Care</option>
            </select>
          </div>

          {/* Doctors Dropdown */}
          <div>
            <label className="block text-xl mb-2">Select Doctors</label>
            <select className="w-full px-4 py-2 text-black rounded">
              <option>Select a doctor</option>
              <option>Dr. John Doe</option>
              <option>Dr. Jane Smith</option>
            </select>
          </div>

          {/* Date Picker */}
          <div>
            <label className="block text-xl mb-2">Appointment Date</label>
            <input type="date" className="w-full px-4 py-2 text-black rounded" />
          </div>

          {/* Submit Button */}
        <Button className="w-full">Book Appointment</Button>
        </div>
      </div>

        </div>
       </div>
    );
};

export default StatsAndAppointment;
