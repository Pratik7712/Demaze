import About from "../Components/About";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import ServiceHome from "../Components/ServiceHome";
import Solution from "../Components/Solution";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <ServiceHome/>
        <About/>    
        <Solution/>
        <ContactUs/>
        <Footer/>
        </>
    )
}

export default Home;



