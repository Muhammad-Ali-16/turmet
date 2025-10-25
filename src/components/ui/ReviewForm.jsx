import React from 'react'

function ReviewForm() {
    return (
        <div className="review-form bg-[var(--bg-primary)] p-10 rounded-2xl">
            <form>
                <h5 className='text-xl md:text-2xl font-semibold'>Add Your Reviews</h5>
                <div className="space-y-12">
                    <div className="mt-8 grid grid-rows-1 grid-cols-2 gap-x-6 gap-y-10">

                        <div className="col-span-full lg:col-span-1">
                            <div>
                                <input required placeholder='Name' id="name" type="text" name="name" autoComplete="name" className="block w-full rounded-md bg-white px-3 py-4 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--bg-secondary)] sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="col-span-full lg:col-span-1">
                            <div>
                                <input required placeholder='Email' id="email" type="email" name="email" autoComplete="email" className="block w-full rounded-md bg-white px-3 py-4 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--bg-secondary)] sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <div>
                                <input required placeholder='Subject' id="subject" type="text" name="subject" autoComplete="subject" className="block w-full rounded-md bg-white px-3 py-4 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--bg-secondary)] sm:text-sm/6" />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <div>
                                <textarea id="message" required placeholder='Write Your Message' name="message" rows="3" className="block w-full rounded-md bg-white px-3 py-4 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-[var(--bg-secondary)] sm:text-sm/6"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-start gap-x-6 mx-6">
                    <button
                        className='font-semibold text-sm lg:text-[16px] bg-[var(--button-primary)] before:bg-[var(--button-secondary)] text-[var(--text-light)] cursor-pointer px-5 py-4 rounded-full min-w-[150px] relative z-2 overflow-hidden 
                      before:transition-all before:duration-350 before:content-[] before:absolute before:inset-0 before:w-[100%] before:h-[100%] before:rounded-full before:-z-1 before:scale-x-0 hover:before:scale-x-100 before:origin-left'
                        type='submit'
                    >
                        Submit Review
                        <i className="ms-1 bi bi-arrow-right"></i>
                    </button>
                </div>


            </form>
        </div>
    )
}

export default ReviewForm