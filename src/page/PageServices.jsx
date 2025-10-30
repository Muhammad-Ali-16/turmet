import AppBooking from '../homeSections/AppBooking'
import Services from '../homeSections/Services'
import SocialMedia from '../homeSections/SocialMedia'
import Video from '../homeSections/Video'

function PageServices() {
    return (
        <section className='page-services-main'>
            <div className="page-services-content-main">
                <Services />
                <Video/>
                <AppBooking/>
                <SocialMedia/>
            </div>
        </section>
    )
}

export default PageServices