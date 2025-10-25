import { useState } from 'react'

function Accordion() {

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
        </div>)
}

export default Accordion