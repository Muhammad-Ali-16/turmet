import About from "../../homeSections/About"
import Destination from "../../homeSections/Destination"
import Hero from "../../homeSections/Hero"
import Services from "../../homeSections/Services"
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
        </>
    )
}

export default Home