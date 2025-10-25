import CheckIcon from '../assets/check.png'
import Accordion from '../components/ui/Accordion'

function FAQ() {
   
    return (
        <section className='faq-main bg-[var(--bg-light)] overflow-hidden'>
            <div className="faq-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto grid grid-rows-1 grid-cols-1 lg:grid-cols-2 px-3 py-16 md:py-18 lg:py-22 gap-10">
                {/* >------->-------->FAQ-Main-Heading<-------<--------< */}
                <div className="faq-col-1">
                    <div className="faq-heading-main space-y-6">
                        <div className="faq-heading">
                            <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Choose Your Place</h6>
                            <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>Frequently Asked Questions</h1>
                        </div>
                        <p className='max-w-2xl text-xs lg:text-sm text-black/65'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum error minima ducimus vitae exercitationem sed adipisci saepe quas? Perspiciatis hic assumenda libero nesciunt quasi laudantium distinctio neque.
                        </p>
                    </div>

                    <div className="faq-content my-10 border-y border-black/10">
                        <div className="flex flex-wrap items-center max-sm:justify-between sm:space-x-6 gap-6 py-6">
                            <div className="faq-item flex items-center gap-3">
                                <img src={CheckIcon} alt="icon" className="w-5 h-5" />
                                <h5 className="text-black/60 text-sm sm:text-md">Top Quality Service</h5>
                            </div>

                            <div className="faq-item flex items-center gap-3">
                                <img src={CheckIcon} alt="icon" className="w-5 h-5" />
                                <h5 className="text-black/60 text-sm sm:text-md">Most Adventure Tour Ever</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* >------->-------->FAQ-Accordion<-------<--------< */}
                <div className="faq-col-2 place-self-center">
                    <Accordion/>
                </div>
            </div>
        </section>
    )
}

export default FAQ
