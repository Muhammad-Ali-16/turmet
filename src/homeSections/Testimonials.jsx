import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import TestimonialImg1 from '../assets/testimonial-1.jpg'

function Testimonials() {

    const TestimonialsCards = [
        { name: 'Tom Cruise', location: 'Trader, USA', reviews: '01', rating: '4.7', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia atque expedita iste sint commodi id esse minus. Accusantium, earum accusamus expedita culpa dolorum corporis sint itaque, dicta sequi laborum suscipit eligendi quis dolorem autem distinctio ipsa ipsam. Ullam, distinctio.' },
        { name: 'Michael Faraday', location: 'Actor, Germany', reviews: '05', rating: '4.0', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia atque expedita iste sint commodi id esse minus. Accusantium, earum accusamus expedita culpa dolorum corporis sint itaque, dicta sequi laborum suscipit eligendi quis dolorem autem distinctio ipsa ipsam. Ullam, distinctio.' },
        { name: 'Albert Einstein', location: 'Trader, Singapore', reviews: '10', rating: '4.5', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia atque expedita iste sint commodi id esse minus. Accusantium, earum accusamus expedita culpa dolorum corporis sint itaque, dicta sequi laborum suscipit eligendi quis dolorem autem distinctio ipsa ipsam. Ullam, distinctio.' },]

    return (
        <section className='testimonials-main px-3 py-12 relative overflow-hidden bg-[var(--bg-primary)]'>
            <div className="testimonials-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto relative grid grid-rows-1 grid-cols-1 lg:grid-cols-2">
                {/* >------->-------->Testimonials-Col-1<-------<--------< */}
                <div className="testimonials-col-1 place-self-center">
                    <img src={TestimonialImg1} alt="testimonial-img" className='rounded-2xl' />
                </div>
                {/* >------->-------->Testimonials-Col-2<-------<--------< */}
                <div className="testimonials-col-2 my-10 lg:my-0">
                    {/* >------->-------->Testimonials-Main-Heading<-------<--------< */}
                    <div className="testimonials-heading-main flex flex-col ">
                        <div className="testimonials-heading">
                            <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Testimonials</h6>
                            <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>What They Say About Us</h1>
                        </div>
                    </div>
                    {/* >------->-------->Testimonials-Slider<-------<--------< */}
                    <div className="destination-swiper-slider relative my-10">

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                1024: { slidesPerView: 1, spaceBetween: 24 },
                                768: { slidesPerView: 1, spaceBetween: 16 },
                                576: { slidesPerView: 1, spaceBetween: 12 },
                                0: { slidesPerView: 1, spaceBetween: 10 },
                            }}
                            modules={[Autoplay]}
                        >
                            {TestimonialsCards.map((card, i) => (
                                <SwiperSlide key={i}>
                                    <div className="card relative rounded-xl w-auto overflow-hidden bg-white p-10 space-y-8">
                                        <div className="card-img-main relative flex flex-row justify-between items-center">
                                            <div className="icon">
                                                <div class="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 54 48" fill="none"><path d="M2 24.8696H16.4927C20.3157 24.8696 22.9395 27.7946 22.9395 31.3751V39.4945C22.9395 43.075 20.3157 45.9998 16.4927 45.9998H8.44679C4.89858 45.9998 2 43.075 2 39.4945V24.8696" stroke="#1CA8CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 24.8699C2 9.6148 4.82365 7.09343 13.3194 2" stroke="#1CA8CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.0605 24.8696H45.5532C49.3763 24.8696 52 27.7946 52 31.3751V39.4945C52 43.075 49.3763 45.9998 45.5532 45.9998H37.5073C33.9591 45.9998 31.0605 43.075 31.0605 39.4945V24.8696" stroke="#1CA8CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path><path d="M31.0605 24.8699C31.0605 9.6148 33.884 7.09343 42.3798 2" stroke="#1CA8CB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="testimonial-rating flex flex-row items-center space-x-2 text-xs">
                                                <div className="start-icons text-[var(--color-golden)]">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                </div>
                                                <h5>{card.rating} / 5.0</h5>
                                            </div>
                                        </div>
                                        <div className="card-description">
                                            <p className="max-w-2xl text-md text-black/65">{card.discription}</p>
                                        </div>
                                        <div className="card-info flex flex-row justify-between items-center">
                                            <div className="testimonial-name">
                                                <h3 className="text-lg font-semibold">{card.name}</h3>
                                                <h5 className='text-sm text-black/60'>{card.location}</h5>
                                            </div>
                                            <div className="reviews text-black/60">
                                                <h3>({card.reviews} / 2000) Reviews</h3>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Testimonials