import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Button from '../components/ui/Button'
import NewZealand from '../assets/destination-1.jpg'
import Amazon from '../assets/destination-2.jpg'
import China from '../assets/destination-3.jpg'
import Venezuela from '../assets/destination-4.jpg'


function Destination() {

    const SwiperSliderCards = [
        { imgUrl: NewZealand, heading: 'New Zealand', discription: 'Destination 1', path: '/destination' },
        { imgUrl: Amazon, heading: 'The Amazon', discription: 'Destination 2', path: '/destination' },
        { imgUrl: China, heading: 'The Great Wall Of China', discription: 'Destination 3', path: '/destination' },
        { imgUrl: Venezuela, heading: 'Angel Falls, Venezuela', discription: 'Destination 4', path: '/destination' },
        { imgUrl: NewZealand, heading: 'New Zealand', discription: 'Destination 1', path: '/destination' },
        { imgUrl: Amazon, heading: 'The Amazon', discription: 'Destination 2', path: '/destination' },
        { imgUrl: China, heading: 'The Great Wall Of China', discription: 'Destination 3', path: '/destination' },
        { imgUrl: Venezuela, heading: 'Angel Falls, Venezuela', discription: 'Destination 4', path: '/destination' },
    ]

    return (
        <section className='destination-main px-3 py-12 relative overflow-hidden'>
            <div className="destination-content-main max-w-7xl mx-auto relative">
                <div className="destination-heading-main flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                    <div className="destination-heading">
                        <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Our Destination</h6>
                        <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>Our Top Location For You Property</h1>
                    </div>
                    <Button path='/destination' text='Learn More' additionalClass='bg-[var(--button-primary)] before:bg-[var(--button-secondary)] text-[var(--text-light)]' />
                </div>

                <div className="destination-swiper-slider relative overflow-hidden md:pr-[60px] my-10">

                    <div className="absolute right-0 top-0 bottom-0 w-[10px] md:bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1024: { slidesPerView: 3.2, spaceBetween: 24 },
                            768: { slidesPerView: 2.5, spaceBetween: 16 },
                            576: { slidesPerView: 1, spaceBetween: 12 },
                            0: { slidesPerView: 1, spaceBetween: 10 },
                        }}
                        modules={[Autoplay]}
                        className="destination-swiper"
                        style={{ overflow: 'visible' }}
                    >
                        {SwiperSliderCards.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="card relative rounded-2xl text-[var(--text-light)] w-auto overflow-hidden">
                                    <div className="card-img-main relative">
                                        <img
                                            src={card.imgUrl}
                                            alt={`${card.heading} Img`}
                                            className="card-img rounded-2xl w-full h-full object-cover"
                                        />
                                        <div className="img-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl"></div>
                                    </div>

                                    <div className="card-description absolute bottom-3 left-0 right-0 flex items-center justify-between px-6 pb-4">
                                        <div className="card-heading">
                                            <h3 className="text-xl font-bold hover:text-[var(--text-secondary)] transition-colors cursor-pointer">
                                                {card.heading}
                                            </h3>
                                            <h5 className="text-sm opacity-80">{card.discription}</h5>
                                        </div>
                                        <a href={card.path}>
                                            <button className="card-btn cursor-pointer flex items-center justify-center text-black bg-white hover:text-white hover:bg-[var(--bg-secondary)] rounded-full h-12 w-12 transition-all">
                                                <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </a>
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

export default Destination
