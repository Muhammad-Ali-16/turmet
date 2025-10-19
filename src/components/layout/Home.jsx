import About from "../../homeSections/About"
import Destination from "../../homeSections/Destination"
import Hero from "../../homeSections/Hero"
import Services from "../../homeSections/Services"


function Home() {
    return (
        <>
            <Hero />
            <About />
            <Destination/>
            <Services/>
        </>
    )
}

export default Home