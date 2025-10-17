import Button from '../components/ui/Button'
import Counter from '../components/ui/Counter'
import CheckIcon from '../assets/check.png'
import AboutImg1 from '../assets/about-1.jpg'
import AboutImg2 from '../assets/about-2.jpg'
import AboutImg3 from '../assets/about-3.png'
import AboutImgGroup from '../assets/group-about.png'


function About() {
    return (
        <>
            <section className='about-main relative w-full px-3 xl:py-20 lg:py-18 md:py-15 py-12'>
                <div className="about-content-main relative max-w-7xl mx-auto text-[var(--text-dark)] grid grid-rows-1 md:grid-cols-2 grid-cols-1">

                    <div className="about-col-1 relative mx-4 my-10 md:my-0 xl:bg-[url(/plane-shape-2.png)] bg-top-right bg-no-repeat  ">
                        <div className="relative rounded-2xl">
                            <img src={AboutImg1} alt="about-img" className='w-[100%] xl:w-auto object-cover rounded-2xl' />
                        </div>
                        <div className="absolute xl:right-26 xl:-bottom-14 bottom-0 rounded-2xl border-8 border-white">
                            <img src={AboutImg2} alt="about-img" className='max-xl:max-w-[150px] max-w-[250px] rounded-lg' />
                        </div>
                        <div className="about-animation-up-down  absolute xl:bottom-30 max-xl:top-0 xl:-left-4 rounded-2xl border-8 border-white">
                            <img src={AboutImg3} alt="about-img" className='rounded-lg' />
                        </div>
                        <div className="about-animation-left-right absolute right-5 bottom-5 xl:-bottom-12 xl:left-0">
                            <img src={AboutImgGroup} alt="about-img" className='max-xl:max-w-[120px] rounded-2xl'/>
                        </div>
                    </div>

                    <div className="about-col-2 space-y-6">
                        {/* >------->-------->About-Main-Heading<-------<--------< */}
                        <div className="about-heading-main">
                            <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>About Us</h6>
                            <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>We're Strived Only For The Best In The World</h1>
                        </div>
                        <p className='max-w-2xl text-xs lg:text-sm text-black/65'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum error minima ducimus vitae exercitationem sed adipisci saepe quas? Perspiciatis hic assumenda libero nesciunt quasi laudantium distinctio neque.</p>

                        {/* >------->-------->About-Content<-------<--------< */}
                        <div className="about-booking flex flex-col space-y-10 py-5">

                            <div className="booking flex flex-col lg:flex-row lg:space-x-12 space-y-5 lg:space-y-0 max-w-xl">
                                <div className="heading flex flex-row items-center space-x-4">
                                    <img src={CheckIcon} alt="check-icon" />
                                    <h3 className='text-[var(--text-dark)] font-semibold text-lg'>Easy Booking System</h3>
                                </div>
                                <div className="discription lg:border-s-3 border-[var(--bg-secondary)] lg:ps-3">
                                    <p className='text-[var(--text-primary)]'> Our hotel also prides itself on offering exceptional services.</p>
                                </div>
                            </div>
                            <div className="booking flex flex-col lg:flex-row lg:space-x-12 space-y-5 lg:space-y-0 max-w-xl">
                                <div className="heading flex flex-row items-center space-x-4">
                                    <img src={CheckIcon} alt="check-icon" />
                                    <h3 className='text-[var(--text-dark)] font-semibold text-lg'>Easy Booking System</h3>
                                </div>
                                <div className="discription lg:border-s-3 border-[var(--bg-secondary)] lg:ps-3">
                                    <p className='text-[var(--text-primary)]'> Our hotel also prides itself on offering exceptional services.</p>
                                </div>
                            </div>
                        </div>
                        <Button text='Discover More' path='/about' additionalClass='bg-[var(--button-secondary)] before:bg-[var(--button-primary)] text-[var(--text-light)]' />
                    </div>

                </div>
            </section>
            <Counter />
        </>
    )
}

export default About