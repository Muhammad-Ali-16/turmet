import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

import TeamMemberImg1 from '../assets/teams-5.jpg'

import TeamImg1 from '../assets/teams-1.jpg'
import TeamImg2 from '../assets/teams-2.jpg'
import TeamImg3 from '../assets/teams-3.jpg'
import TeamImg4 from '../assets/teams-4.jpg'
import TeamImg6 from '../assets/teams-6.jpg'
import TeamImg7 from '../assets/teams-7.jpg'
import TeamImg8 from '../assets/teams-8.jpg'

function TeamDetails() {

    const TeamCards = [
        { ImgUrl: TeamImg1, name: 'Esther Howard', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg2, name: 'Leslie Alexander', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg3, name: 'Theresa Web', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg4, name: 'Floyd Miles', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg6, name: 'Darlene Roberston', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg7, name: 'Leslie Alxeander', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg8, name: 'Ralph Edwards', profession: 'Tourist Guide' },
    ]

    return (
        <section className='team-details-main relative py-12 lg:py-16 px-3'>
            <div className='team-details-content relative max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto text-[var(--text-dark)]'>

                <div className="team-member-detail border border-black/20 rounded-2xl p-6">
                    <div className="container flex flex-col lg:flex-row items-center justify-center lg:justify-start text-center lg:text-start gap-6">
                        <img src={TeamMemberImg1} alt="Team-Member=Img" className='rounded-2xl' />
                        <div className="content space-y-2">
                            <h4 className="heading text-xl lg:text-2xl font-bold">Kathryn Murphy</h4>
                            <h5 className="sub-heading text-black/65">Tourist Guide</h5>
                            <p className="discription text-black/65 border-b border-black/20 pb-4 max-w-[700px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, libero amet adipisci nihil dolor corporis? A excepturi ducimus delectus tempore, accusamus iste ea laborum recusandae!</p>
                            <div className="contact text-sm text-[var(--text-secondary)] flex flex-row flex-wrap items-center justify-between max-w-[600px] gap-2 py-4">
                                <h5 className="experience">Experience: <span className='text-black/90'> 10 Years</span></h5>
                                <h5 className="position">Position: <span className='text-black/90'> Guider</span></h5>
                                <h5 className="phone">Phone: <span className='text-black/90'> +208-555-0112</span></h5>
                            </div>
                            <div className="social-icons space-x-3 py-6">
                                <a href="?" className='p-2 rounded-md transition-all duration-300 text-[var(--text-secondary)] border border-[var(--bg-secondary)] bg-white hover:bg-[var(--bg-secondary)] hover:text-white'><i className="bi bi-facebook"></i></a>
                                <a href="?" className='p-2 rounded-md transition-all duration-300 text-[var(--text-secondary)] border border-[var(--bg-secondary)] bg-white hover:bg-[var(--bg-secondary)] hover:text-white'><i className="bi bi-instagram"></i></a>
                                <a href="?" className='p-2 rounded-md transition-all duration-300 text-[var(--text-secondary)] border border-[var(--bg-secondary)] bg-white hover:bg-[var(--bg-secondary)] hover:text-white'><i className="bi bi-linkedin"></i></a>
                                <a href="?" className='p-2 rounded-md transition-all duration-300 text-[var(--text-secondary)] border border-[var(--bg-secondary)] bg-white hover:bg-[var(--bg-secondary)] hover:text-white'><i className="bi bi-twitter-x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="professional-info py-12 lg:py-16 border-b border-black/20">
                    <div className="container grid grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="content space-y-4">
                            <h3 className='font-bold text-2xl lg:text-3xl'>Professional Info</h3>
                            <p className='text-sm text-black/65'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit provident veniam eius labore atque consequatur maiores. Nihil accusamus nisi culpa eos repellat ea dicta.
                            </p>
                            <p className='text-sm text-black/65'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde officia qui delectus corporis quasi, illo pariatur, perspiciatis architecto nihil expedita soluta cupiditate. Dolorem, earum necessitatibus!
                            </p>
                        </div>
                        <div className="progress-bar-main place-self-center max-w-[500px] w-full space-y-6">
                            <div className="progress-bar">
                                <div className="label flex justify-between mb-1 text-sm">
                                    <h5 className='font-semibold'>Language Skills</h5>
                                    <h5>80%</h5>
                                </div>
                                <div className="w-full bg-black/10 h-2.5 overflow-hidden">
                                    <div className="bg-[var(--bg-secondary)] h-2.5 w-[80%]"></div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="label flex justify-between mb-1 text-sm">
                                    <h5 className='font-semibold'>Tour Guide</h5>
                                    <h5>88%</h5>
                                </div>
                                <div className="w-full bg-black/10 h-2.5 overflow-hidden">
                                    <div className="bg-[var(--bg-secondary)] h-2.5 w-[88%]"></div>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="label flex justify-between mb-1 text-sm">
                                    <h5 className='font-semibold'>Pralaning</h5>
                                    <h5>95%</h5>
                                </div>
                                <div className="w-full bg-black/10 h-2.5 overflow-hidden">
                                    <div className="bg-[var(--bg-secondary)] h-2.5 w-[95%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="related-guider py-12 lg:py-18">
                    <div className="container">
                        <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>Related Guider</h1>
                        <div className="text-black pt-8">
                            <Swiper
                                slidesPerView={2.5}
                                spaceBetween={20}
                                loop={true}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    1024: { slidesPerView: 3, spaceBetween: 24 },
                                    768: { slidesPerView: 2, spaceBetween: 16 },
                                    576: { slidesPerView: 1, spaceBetween: 12 },
                                    0: { slidesPerView: 1, spaceBetween: 10 },
                                }}
                                modules={[Autoplay]}
                            >
                                {TeamCards.map((card, i) => (
                                    <SwiperSlide >
                                        <div className="card relative rounded-xl w-auto space-y-5" key={i}>
                                            <div className="card-img-main relative">
                                                <img
                                                    src={card.ImgUrl}
                                                    alt='teams Img'
                                                    className="card-img rounded-xl w-full h-full object-cover"
                                                />

                                                <div className="card-info relative bottom-10 z-1 bg-white shadow-md me-8 rounded-xl px-4 py-6 text-center group
                                                before:transition-all before:duration-300 before:content-[] before:absolute before:inset-0 before:h-[100%] before:w-[100%] before:bg-[var(--bg-secondary)] before:origin-left before:scale-x-0 hover:before:scale-x-[1] before:rounded-xl before:-z-1">
                                                    <h3 className='font-bold text-xl'><a href="?" className='transition-all duration-300 group-hover:text-white'>{card.name}</a></h3>
                                                    <p className='text-black/60 transition-all duration-300 group-hover:text-white'>{card.profession}</p>

                                                    <ul className='flex flex-row items-center justify-center space-x-3 my-2'>
                                                        <li>
                                                            <a href="?" className='h-8 w-8 text-lg bg-[var(--bg-light)] flex justify-center items-center rounded-full text-[var(--text-secondary)] '>
                                                                <i className="bi bi-instagram"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="?" className='h-8 w-8 text-lg bg-[var(--bg-light)] flex justify-center items-center rounded-full text-[var(--text-secondary)] '>
                                                                <i className="bi bi-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="?" className='h-8 w-8 text-lg bg-[var(--bg-light)] flex justify-center items-center rounded-full text-[var(--text-secondary)] '>
                                                                <i className="bi bi-twitter-x"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TeamDetails