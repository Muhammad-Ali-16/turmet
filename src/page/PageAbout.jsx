import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

import About from '../components/sharedSections/About'
import SocialMedia from '../homeSections/SocialMedia'
import Button from '../components/ui/Button'
import TeamMembers from '../components/sharedSections/TeamMembers'

import FeatureImg from '../assets/feature-1.png'
import FeatureIcon1 from '../assets/feature-icon-1.svg'
import FeatureIcon2 from '../assets/feature-icon-2.svg'

import TestimonialImg1 from '../assets/page-about-testimonials.png'
import TestimonialCardImg from '../assets/testimonial-client-1.png'

import counterIcon1 from '../assets/counter-icon-1.svg'
import counterIcon2 from '../assets/counter-icon-2.svg'
import counterIcon3 from '../assets/counter-icon-3.svg'
import counterIcon4 from '../assets/counter-icon-4.svg'

import TeamImg1 from '../assets/teams-1.jpg'
import TeamImg2 from '../assets/teams-2.jpg'
import TeamImg3 from '../assets/teams-3.jpg'
import TeamImg4 from '../assets/teams-4.jpg'

function PageAbout() {

  const TestimonialsCards = [
    { name: 'Emma Watson', profession: 'Web Designer', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia atque expedita iste sint commodi id esse minus. Accusantium, earum accusamus expedita culpa dolorum corporis sint itaque, dicta sequi laborum suscipit eligendi quis dolorem autem distinctio ipsa ipsam. Ullam, distinctio.' },
    { name: 'Lilly Wastson', profession: 'Influencer', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia atque expedita iste sint commodi id esse minus. Accusantium, earum accusamus expedita culpa dolorum corporis sint itaque, dicta sequi laborum suscipit eligendi quis dolorem autem distinctio ipsa ipsam. Ullam, distinctio.' },
    { name: 'Emma Watson', profession: 'Data Engineer', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia atque expedita iste sint commodi id esse minus. Accusantium, earum accusamus expedita culpa dolorum corporis sint itaque, dicta sequi laborum suscipit eligendi quis dolorem autem distinctio ipsa ipsam. Ullam, distinctio.' },
  ]

  const TeamCards = [
    { ImgUrl: TeamImg1, name: 'Esther Howard', profession: 'Tourist Guide' },
    { ImgUrl: TeamImg2, name: 'Leslie Alexander', profession: 'Tourist Guide' },
    { ImgUrl: TeamImg3, name: 'Theresa Web', profession: 'Tourist Guide' },
    { ImgUrl: TeamImg4, name: 'Floyd Miles', profession: 'Tourist Guide' },
  ]

  return (
    <section className='page-about-main'>
      <div className='page-about-content-main'>
        <About />

        {/* >------->-------->Feature-Section-Main<-------<--------< */}
        <section className='feature-main bg-[url(/services-bg.jpg)] bg-no-repeat bg-cover bg-center overflow-hidden mt-12'>
          <div className="feature-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto grid grid-rows-1 grid-cols-1 lg:grid-cols-2 px-3 py-16 md:py-18 lg:py-22">

            {/* >------->-------->Feature-Col-1<-------<--------< */}
            <div className="feature-col-1 relative z-1 before:content-[] before:bg-[url(/plane-shape-2.png)] before:absolute before:-left-1/2 before:top-0 before:bottom-0 before:right-0 before:opacity-50 before:bg-no-repeat before:-z-1 before:grayscale-100">
              {/* >------->-------->Feature-Main-Heading<-------<--------< */}
              <div className="feature-heading-main space-y-6">
                <div className="feature-heading">
                  <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Are you ready to travel?</h6>
                  <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>World Leading Online Tour Booking Platform</h1>
                </div>
                <p className='max-w-2xl text-xs lg:text-sm text-black/65'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum error minima ducimus vitae exercitationem sed adipisci saepe quas? Perspiciatis hic assumenda libero nesciunt quasi laudantium distinctio neque.</p>
              </div>

              {/* >------->-------->Feature-Items<-------<--------< */}
              <div className="feature-content relative my-10 space-y-6 z-1">

                <div className="feature-items space-y-8 flex md:flex-row flex-col space-x-6">
                  <div className="index flex flex-row items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-[var(--bg-secondary)]  flex flex-row items-center justify-center">
                      <img src={FeatureIcon1} alt="feature-icon" />
                    </div>
                    <h5 className='text-[var(--text-dark)] text-lg font-bold md:max-w-[180px]'>Most Adventure Tour Ever</h5>
                  </div>
                  <div className="content md:max-w-[250px] space-y-2">
                    <p className='text-[var(--text-primary)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div className="feature-items space-y-8 flex md:flex-row flex-col space-x-6">
                  <div className="index flex flex-row items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-[var(--bg-secondary)]  flex flex-row items-center justify-center">
                      <img src={FeatureIcon2} alt="feature-icon" />
                    </div>
                    <h5 className='text-[var(--text-dark)] text-lg font-bold md:max-w-[180px]'>Real Tour Starts from Here</h5>
                  </div>
                  <div className="content md:max-w-[250px] space-y-2">
                    <p className='text-[var(--text-primary)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                </div>

              </div>
              {/* >------->-------->Feature-Button<-------<--------< */}
              <Button text='Contact Us' path='/contact' additionalClass='bg-[var(--button-primary)] before:bg-[var(--button-secondary)] text-[var(--text-light)]' />
            </div>

            {/* >------->-------->Feature-Col-2<-------<--------< */}
            <div className="feature-col-2 place-self-center">
              <img src={FeatureImg} alt="feature-img" className="feature-img xl:max-w-[140%]" />
            </div>
          </div>
        </section>

        {/* >------->-------->Counter-Main<-------<--------< */}
        <section className='counter-wrapper w-full bg-[var(--bg-secondary)] text-[var(--text-light)]'>
          <div className="counter-main max-w-7xl mx-auto py-14 grid grid-rows-1 grid-cols-2  md:grid-cols-4 max-md:space-y-6 max-md:text-center md:place-items-center">

            <div className="space-y-5 text-center flex flex-col items-center justify-center ">
              <div className="icon flex items-center justify-center bg-white/30 rounded-full h-16 w-16 outline-8 outline-white/10">
                <img src={counterIcon1} alt="counter-icon" />
              </div>
              <div className="counter-heading">
                <h2 className='font-bold text-2xl xl:text-4xl'>100,000+</h2>
                <h5>Our Explorers</h5>
              </div>
            </div>

            <div className="space-y-5 text-center flex flex-col items-center justify-center ">
              <div className="icon flex items-center justify-center bg-white/30 rounded-full h-16 w-16 outline-8 outline-white/10">
                <img src={counterIcon2} alt="counter-icon" />
              </div>
              <div className="counter-heading">
                <h2 className='font-bold text-2xl xl:text-4xl'>5,000+</h2>
                <h5>Destinations</h5>
              </div>
            </div>

            <div className="space-y-5 text-center flex flex-col items-center justify-center ">
              <div className="icon flex items-center justify-center bg-white/30 rounded-full h-16 w-16 outline-8 outline-white/10">
                <img src={counterIcon3} alt="counter-icon" />
              </div>
              <div className="counter-heading">
                <h2 className='font-bold text-2xl xl:text-4xl'>10,000+</h2>
                <h5>More Trips</h5>
              </div>
            </div>

            <div className="space-y-5 text-center flex flex-col items-center justify-center ">
              <div className="icon flex items-center justify-center bg-white/30 rounded-full h-16 w-16 outline-8 outline-white/10">
                <img src={counterIcon4} alt="counter-icon" />
              </div>
              <div className="counter-heading">
                <h2 className='font-bold text-2xl xl:text-4xl'>2,000+</h2>
                <h5>Luxary Hotel</h5>
              </div>
            </div>
          </div>
        </section>

        {/* >------->-------->Teams-Main<-------<--------< */}
        <section className='teams-main px-3 pt-12 pb-28 relative overflow-hidden'>
          <div className="teams-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto relative animation-left-right-pseudo after:content-[] after:absolute after:-bottom-16 after:-right-15 after:left-0 after:top-0 after:bg-no-repeat after:bg-[url(/team-pattern.png)] after:bg-bottom-right">
            {/* >------->-------->Teams-Main-Heading<-------<--------< */}
            <div className="teams-heading-main flex flex-col items-center justify-center my-10">
              <div className="teams-heading text-center ">
                <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Meet with Guide</h6>
                <h1 className='text-2xl md:text-5xl font-bold max-w-xl'>Tour Guide</h1>
              </div>
            </div>

            <TeamMembers CardsData={TeamCards} />

          </div>
        </section>

        {/* >------->-------->Page-About-Testimonials-Main<-------<--------< */}
        <section className='testimonials-main px-3 py-12 relative overflow-hidden bg-[url(/testimonial-bg.jpg)] bg-cover bg-no-repeat '>
          <div className="testimonials-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto relative grid grid-rows-1 grid-cols-1 lg:grid-cols-2">
            {/* >------->-------->Testimonials-Col-1<-------<--------< */}
            <div className="testimonials-col-1 place-self-center">
              <img src={TestimonialImg1} alt="testimonial-img" className='rounded-2xl' />
            </div>
            {/* >------->-------->Testimonials-Col-2<-------<--------< */}
            <div className="testimonials-col-2 my-10 lg:my-28">
              {/* >------->-------->Testimonials-Main-Heading<-------<--------< */}
              <div className="testimonials-heading-main flex flex-col ">
                <div className="testimonials-heading">
                  <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Testimonials</h6>
                  <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>Travelers Love Our locals</h1>
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
                          <div className="flex flex-row space-x-3 items-center">
                            <img src={TestimonialCardImg} alt="card-img" />
                            <div className="testimonial-name">
                              <h3 className="text-lg font-semibold">{card.name}</h3>
                              <h5 className='text-sm text-black/60'>{card.profession}</h5>
                            </div>
                          </div>
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="37" viewBox="0 0 50 37" fill="none"><path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#1CA8CB"></path></svg>
                          </div>
                        </div>
                        <div className="card-description">
                          <p className="max-w-2xl text-md text-black/65">{card.discription}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>


            </div>
          </div>
        </section>


        <SocialMedia />
      </div>
    </section>
  )
}

export default PageAbout