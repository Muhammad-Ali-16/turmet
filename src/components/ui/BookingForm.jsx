import React from 'react'

function BookingForm() {
    return (
        <div className="contact-form-main col-span-full lg:col-span-1 border border-black/20 rounded-2xl h-fit">
            <form className="container flex flex-col p-5 space-y-6">
                <h5 className='text-xl font-semibold'>Contact for Booking</h5>
                <input
                    type="text"
                    placeholder='Your Name'
                    required
                    autoComplete='Name'
                    className='outline-none bg-[var(--bg-primary)] rounded-md p-4 text-black/75'
                />
                <input
                    type='email'
                    placeholder='Your Email'
                    required
                    autoComplete='Email'
                    className='outline-none bg-[var(--bg-primary)] rounded-md p-4 text-black/75'
                />
                <textarea
                    placeholder='Type Comment Here'
                    className='outline-none bg-[var(--bg-primary)] rounded-md p-4 text-black/75 h-48'
                />
                <button className='font-semibold text-sm lg:text-[16px] cursor-pointer px-5 py-4 rounded-md min-w-[150px] relative z-2 overflow-hidden bg-[var(--button-primary)] before:bg-[var(--button-secondary)] text-[var(--text-light)]
            before:transition-all before:duration-350 before:content-[] before:absolute before:inset-0 before:w-[100%] before:h-[100%] before:rounded-md before:-z-1 before:scale-x-0 hover:before:scale-x-100 before:origin-left'
                    type='submit'
                >
                    Send Now
                    <i className="ms-1 bi bi-arrow-right"></i>
                </button>
            </form>
        </div>
    )
}

export default BookingForm