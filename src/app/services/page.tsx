import { DynamicBanner } from "@/components/CommonParts/DynamicBanner";
import StatsAndAppointment from "@/components/Home/Appointment";
import Pricing from "@/components/services/Price";
import ServicesMore from "@/components/services/ServicesMore";
import ServicesSection from "@/components/services/ServicesSection";


export const metadata = {
    title: "Services",
    description: " Services - Next.js Tailwind CSS",
  };
  


const Services = () => {
    return (
        <div>
            <DynamicBanner
                title="Services"
                subText="Home"
                highlightText="Services"
            />
            <ServicesSection />
            <ServicesMore />
            <StatsAndAppointment />
            <Pricing />
            
        </div>
    );
};

export default Services;