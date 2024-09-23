import Image from 'next/image';
import { useEffect, useState } from 'react';


const ServicesMore = () => {
    const services = [
        {
            "id": 1,
            "title": "Neuro Surgery",
            "description": "Best Medical & Health Care",
            "category": "Neurology",
            "image": "/images/neuro.jpg",
            "icon": "🧠"
        },
        {
            "id": 2,
            "title": "Dental Surgery",
            "description": "Best Medical & Health Care",
            "category": "Dental Care",
            "image": "/images/dental.jpg",
            "icon": "🦷"
        },
        {
            "id": 3,
            "title": "Eye Surgery",
            "description": "Best Medical & Health Care",
            "category": "Eye Care",
            "image": "/images/eye.jpg",
            "icon": "👁️"
        },
        {
            "id": 4,
            "title": "Plastic Surgery",
            "description": "Best Medical & Health Care",
            "category": "Skin Care",
            "image": "/images/plastic.jpg",
            "icon": "💉"
        },
        {
            "id": 1,
            "title": "Neuro Surgery",
            "description": "Best Medical & Health Care",
            "category": "Neurology",
            "image": "/images/neuro.jpg",
            "icon": "🧠"
        },
        {
            "id": 2,
            "title": "Dental Surgery",
            "description": "Best Medical & Health Care",
            "category": "Dental Care",
            "image": "/images/dental.jpg",
            "icon": "🦷"
        },
        {
            "id": 3,
            "title": "Eye Surgery",
            "description": "Best Medical & Health Care",
            "category": "Eye Care",
            "image": "/images/eye.jpg",
            "icon": "👁️"
        },
        {
            "id": 4,
            "title": "Plastic Surgery",
            "description": "Best Medical & Health Care",
            "category": "Skin Care",
            "image": "/images/plastic.jpg",
            "icon": "💉"
        }
    ]


    return (
        <section className="  bg-gray-100 mt-20 relative lg:py-24 py-14  ">
            <div className="containe text-center lg:w-[70%] mx-auto">
            <h1 className="lg:text-[150px] 
                    text-[50px] 

                    font-bold text-black/30 opacity-20  
                   

                    lg:absolute
                    top-[-2%]
                    text-center
                 
                    
                    ">
                       Our Services
                    </h1>
                <h2 className="text-4xl font-bold mb-6">Services We Provide</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:py-10 gap-5 ">
                    {services.map((service) => (



                        <div className="bg-white  w-[90%] mx-auto rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300">
                            {/* Image Section */}
                            <div className="relative">


                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-auto object-cover"
                                />
                                {/* Icon Overlay */}
                                <div className="absolute top-4 right-4 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
                                    <span className="text-xl">{service.icon}</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-4">
                                <h3 className="text-sm font-medium text-green-600 mb-1">{service.category}</h3>
                                <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                                <a href="#" className="text-red-500 font-semibold text-sm">
                                    Read More &raquo;
                                </a>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesMore;
