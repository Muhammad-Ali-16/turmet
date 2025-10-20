import About from "../../homeSections/About"
import AppBooking from "../../homeSections/AppBooking"
import Blog from "../../homeSections/Blog"
import Destination from "../../homeSections/Destination"
import Hero from "../../homeSections/Hero"
import Services from "../../homeSections/Services"
import SocialMedia from "../../homeSections/SocialMedia"
import Testimonials from "../../homeSections/Testimonials"
import Tour from "../../homeSections/Tour"
import Video from "../../homeSections/Video"


function Home() {
    return (
        <>
            <Hero />
            <About />
            <Destination/>
            <Services/>
            <Video/>
            <Tour/>
            <AppBooking/>
            <Testimonials/>
            <Blog/>
            <SocialMedia/>
        </>
    )
}

export default Home