import Video from '../homeSections/Video'
import Tour from '../homeSections/Tour'
import TourCard from '../components/sharedSections/TourCard'

function PageDestination() {
    return (
        <section className='page-destination-main'>
            <div className='page-destination-content-main overflow-hidden mx-3'>

              <TourCard/>
                <Video />
                <Tour />
            </div>
        </section>
    )
}

export default PageDestination
