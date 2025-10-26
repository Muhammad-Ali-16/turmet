import React, { useState } from 'react'
import Button from '../components/ui/Button'
import VideoUrl from '../assets/video.mp4'


function Video() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="video-main py-14 relative bg-[url('/map-bg.png'),linear-gradient(to_bottom,var(--bg-light)_50%,var(--bg-primary)_50%)] bg-cover bg-[center_top_120px] bg-no-repeat">
            <div className="video-content max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto relative px-3">
                {/* >------->-------->Video-Main-Heading<-------<--------< */}
                <div className="video-heading-main flex flex-col justify-center items-center space-y-4 text-center lg:pt-10 pb-15">
                    <div className="video-heading">
                        <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Watch Our Story</h6>
                        <h1 className='text-2xl md:text-4xl font-bold max-w-2xl'>Unforgettable Travel Experiences Get Your Guide</h1>
                    </div>
                    <div className="video-btns flex flex-col sm:flex-row sm:space-x-5 sm:space-y-0 space-y-6">
                        <Button path='/contact' text='Contact Us' additionalClass='bg-[var(--button-primary)] before:bg-[var(--button-secondary)] text-[var(--text-light)]' />
                        <Button path='/tour-details' text='Book Now' additionalClass='bg-[var(--button-secondary)] before:bg-[var(--button-primary)] text-[var(--text-light)]' />
                    </div>
                </div>

                {/* >------->-------->Video-Wrapper<-------<--------< */}
                <div className="video-wrapper relative overflow-hidden bg-[url('/video-bg.jpg')] bg-cover bg-center bg-fixed rounded-xl lg:rounded-3xl bg-no-repeat">
                    <div className="overlay bg-black/50 absolute w-[100%] h-[100%] rounded-xl lg:rounded-3xl"></div>
                    <button
                        onClick={() => { setIsOpen(true) }}
                        className='h-18 w-18 lg:h-26 lg:w-26 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 absolute z-2 text-white  bg-[var(--bg-secondary)] rounded-full cursor-pointer'>
                        <i className="bi bi-play-fill"></i>
                    </button>
                    <img src="/video-bg.jpg" alt="video-bg" className='w-[100%] relative -z-1 rounded-3xl' />
                    {isOpen && (
                        <div className='video-overlay bg-black/75 backdrop-blur-xs h-[100vh] w-full fixed z-50 inset-0 flex justify-center items-center'>
                            <button
                                className='absolute top-5 right-10 cursor-pointer text-white text-2xl'
                                onClick={() => setIsOpen(false)}
                            >
                                <i className='bi bi-x-lg'></i>
                            </button>

                            <video
                                src={VideoUrl}
                                className='w-[90%] md:w-[70%] lg:w-[60%] rounded-lg'
                                controls
                            />
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default Video