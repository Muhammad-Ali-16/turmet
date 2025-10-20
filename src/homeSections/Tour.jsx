import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Button from '../components/ui/Button'
import TourImg1 from '../assets/tour-1.jpg'
import TourImg2 from '../assets/tour-2.jpg'
import TourImg3 from '../assets/tour-3.jpg'
import TourImg4 from '../assets/tour-4.jpg'


function Tour() {

    const SwiperSliderCards = [
        { imgUrl: TourImg1, location: 'Nederland', heading: 'Best Time Ever To Explore Molinas Nature', pricing: '49.00' },
        { imgUrl: TourImg2, location: 'Thailand', heading: 'Bathing And Kayaking At Nonrival Beach', pricing: '35.00' },
        { imgUrl: TourImg3, location: 'Austria', heading: '5 Best Tips For An Amazing Monial Trip', pricing: '50.99' },
        { imgUrl: TourImg4, location: 'Slingerland', heading: 'Discover Most Beautiful Molvia: Nature Paradise', pricing: '70.00' },
       ]


    return (
        <section className="tour-main py-14 relative bg-[var(--bg-primary)]">
            <div className="tour-content max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto relative px-3">

                {/* >------->-------->Tour-Main-Heading<-------<--------< */}
                <div className="tour-heading-main flex flex-col justify-center space-y-4 lg:pt-10 pb-15">
                    <div className="tour-heading space-y-6">
                        <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Featured Tour</h6>
                        <h1 className='text-2xl md:text-4xl font-bold max-w-2xl'>Unforgettable Travel Discoveries</h1>
                    </div>
                    <p className='max-w-2xl text-xs lg:text-sm text-black/65'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum error minima ducimus vitae exercitationem sed adipisci saepe quas? Perspiciatis hic assumenda libero nesciunt quasi laudantium distinctio neque.</p>
                </div>

                {/* >------->-------->Tour-Cards<-------<--------< */}
                <div className="destination-swiper-slider relative  
                before:content-[] before:bg-[url(/plane-shape.png)] before:absolute before:top-10 before:-left-20 before:bottom-0 before:right-0 before:h-auto before:w-auto before:bg-no-repeat "
                >

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1024: { slidesPerView: 4, spaceBetween: 24 },
                            768: { slidesPerView: 3, spaceBetween: 16 },
                            576: { slidesPerView: 2, spaceBetween: 14 },
                            0: { slidesPerView: 1, spaceBetween: 10 },
                        }}
                        modules={[Autoplay]}
                    >
                        {[ ...SwiperSliderCards, ...SwiperSliderCards].map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="card relative rounded-2xl text-[var(--text-dark)] w-auto overflow-hidden">
                                    {/* >------->-------->Tour-Card-Img<-------<--------< */}
                                    <div className="card-img-main relative">
                                        <img
                                            src={card.imgUrl}
                                            alt={`${card.heading} Img`}
                                            className="card-img rounded-lg w-full h-full object-cover"
                                        />
                                        <div className="img-overlay py-0.5 px-2 absolute top-4 left-4 w-auto bg-white text-[var(--text-primary)] rounded-full space-x-2">
                                            <h5 className='text-sm'><i className="bi bi-geo-alt-fill text-[var(--text-secondary)]"></i> {card.location}</h5>
                                        </div>
                                    </div>
                                    {/* >------->-------->Tour-Card-Info<-------<--------< */}
                                    <div className="card-info mx-2 space-y-4.5 my-4">
                                        <h3 className="text-lg font-semibold hover:text-[var(--text-secondary)] transition-colors cursor-pointer line-clamp-2">
                                            <a href="/tour_details">
                                                {card.heading}
                                            </a>
                                        </h3>
                                        <div className="card-pricing flex flex-row justify-between items-center mx-1">
                                            <div className="price"><h5 className='font-bold'>${card.pricing} <sub className='font-normal text-[var(--text-primary)]'> / Per Day</sub></h5></div>
                                            <button className="card-btn border border-black/20 py-1 px-2 rounded-sm transition-colors cursor-pointer hover:border-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)] hover:text-white">
                                                <a href="/tour_details">
                                                    <i className="bi bi-arrow-right"></i>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    )
}

export default Tour