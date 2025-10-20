import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import SocialMediaImg1 from '../assets/social-media-1.jpg'
import SocialMediaImg2 from '../assets/social-media-2.jpg'
import SocialMediaImg3 from '../assets/social-media-3.jpg'
import SocialMediaImg4 from '../assets/social-media-4.jpg'
import SocialMediaImg5 from '../assets/social-media-5.jpg'
import SocialMediaImg6 from '../assets/social-media-6.jpg'

function SocialMedia() {

    const SocialMediaImgs = [
        { imgUrl: SocialMediaImg1 },
        { imgUrl: SocialMediaImg2 },
        { imgUrl: SocialMediaImg3 },
        { imgUrl: SocialMediaImg4 },
        { imgUrl: SocialMediaImg5 },
        { imgUrl: SocialMediaImg6 },
    ]

    return (
        <section className='social-media-main bg-[url(/social-media-bg.jpg)] bg-no-repeat bg-cover bg-center py-12 px-3'>
            <div className="social-media-content text-center">
                {/* >------->-------->Social-Media-Main-Heading<-------<--------< */}
                <div className="social-media-heading-main flex flex-col items-center pt-8">
                    <div className="social-media-heading text-center">
                        <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>Follow On Instagram</h1>
                    </div>
                </div>

                <div className="social-media-imgs my-8">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1024: { slidesPerView: 6, spaceBetween: 24 },
                            768: { slidesPerView: 4, spaceBetween: 16 },
                            576: { slidesPerView: 2, spaceBetween: 12 },
                            0: { slidesPerView: 1, spaceBetween: 10 },
                        }}
                        modules={[Autoplay]}
                    >
                        {[...SocialMediaImgs, ...SocialMediaImgs].map((socialmediaImg, i) => (
                            <SwiperSlide key={i}>
                                <div className="social-media-img relative group transition-all duration-300">
                                    <img src={socialmediaImg.imgUrl} alt="" className='w-[100%] h-[100%] object-cover rounded-xl relative' />
                                    <div className="img-overlay bg-[var(--bg-secondary)]/40 rounded-xl absolute inset-0 flex justify-center items-center transition-all duration-300 max-h-0 group-hover:max-h-[100vh] ">
                                        <button className='bg-[var(--bg-secondary)] w-15 h-15 rounded-full invisible group-hover:visible'>
                                            <a href="?">
                                                <i className="bi bi-instagram text-white"></i>
                                            </a>
                                        </button>
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

export default SocialMedia