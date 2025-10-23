import { useState } from 'react'
import CheckIcon from '../assets/check.png'

function FAQ() {
    const [index, setIndex] = useState(null)

    const Accordion = [
        {
            heading: 'How Do I Book A Tour With Your Agency?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
        {
            heading: 'What Payment Methods Do You Accept?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
        {
            heading: 'Can I Customize My Travel Itinerary?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        },
        {
            heading: 'What Is Your Cancellation Policy?',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolore iure, inventore rem quo culpa corrupti ad illum alias magni.'
        }
    ]

    const toggleAccordion = (i) => {
        setIndex(index === i ? null : i)
    }

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
                    <div className="accordion-main divide-y divide-black/10 space-y-3">
                        {Accordion.map((item, i) => (
                            <div key={i} className="accordion-item">
                                <button
                                    className="text-lg w-full text-left font-medium py-4 flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleAccordion(i)}
                                >
                                    {item.heading}
                                    <i
                                        className={`bi bi-chevron-double-right transform transition-transform duration-300 ${index === i ? 'rotate-90' : ''}`}
                                    ></i>
                                </button>
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${index === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="text-sm text-black/70 pb-4">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
