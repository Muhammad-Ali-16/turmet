import React from 'react'
import TourCard from '../components/sharedSections/TourCard'

function PageTour() {
    return (
        <section className='page-tour-main overflow-hidden'>
            <div className="page-tour-content-main relative max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto px-3 py-12">
                <TourCard />
            </div>
        </section>
    )
}

export default PageTour