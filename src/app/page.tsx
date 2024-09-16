import About from "@/components/Home/About";
import Appointment from "@/components/Home/Appointment";
import Banner from "@/components/Home/Banner";
import OurServices from "@/components/Home/OurServices";
import Services from "@/components/Home/services";
import Team from "@/components/Home/Team";


export default function Home() {
  return (
   <div className="overflow-hidden"> 
    <Banner/>
    <Services/>
    <About/>
    <OurServices/>
    <Team/>
    <Appointment/>
   </div>
  );
}
