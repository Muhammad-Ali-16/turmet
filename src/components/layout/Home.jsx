import AppBooking from "../../homeSections/AppBooking"
import Blog from "../../homeSections/Blog"
import Counter from "../ui/Counter"
import Destination from "../../homeSections/Destination"
import Hero from "../../homeSections/Hero"
import Services from "../../homeSections/Services"
import SocialMedia from "../../homeSections/SocialMedia"
import Testimonials from "../../homeSections/Testimonials"
import Tour from "../../homeSections/Tour"
import Video from "../../homeSections/Video"
import About from "../sharedSections/About"


function Home() {
    return (
        <>
            <Hero />
            <About />
            <Counter />
            <Destination />
            <Services />
            <Video />
            <Tour />
            <AppBooking />
            <Testimonials />
            <Blog />
            <SocialMedia />
        </>
    )
}

export default Home