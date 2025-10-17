import React from 'react'

function Counter() {
    return (
        <section className='counter-wrapper w-full bg-[var(--bg-secondary)] text-[var(--text-light)] my-12 lg:my-16'>
            <div className="counter-main max-w-7xl mx-auto py-14 grid grid-rows-1 grid-cols-2  md:grid-cols-4 max-md:space-y-6 max-md:text-center md:place-items-center">
                <div className="experience space-y-2">
                    <h2 className='font-bold text-4xl lg:text-5xl'>26+</h2>
                    <h5>Years Experiences</h5>
                </div>
                <div className="customers space-y-2">
                    <h2 className='font-bold text-4xl lg:text-5xl'>3.6+</h2>
                    <h5>Yearly Customers</h5>
                </div>
                <div className="visitors space-y-2">
                    <h2 className='font-bold text-4xl lg:text-5xl'>46+</h2>
                    <h5>Visitors daily</h5>
                </div>
                <div className="awards space-y-2">
                    <h2 className='font-bold text-4xl lg:text-5xl'>56+</h2>
                    <h5>Awards & honors</h5>
                </div>
            </div>
        </section>
    )
}

export default Counter