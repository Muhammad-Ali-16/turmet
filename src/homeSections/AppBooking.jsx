import AppStoreImg from '../assets/apple-shape.png'
import PlayStoreImg from '../assets/google-shape.png'
import GroupPhoneImg from '../assets/group-phone.png'

function AppBooking() {
    return (
        <section className='app-booking-main px-3 py-14 relative overflow-hidden'>
            <div className="app-booking-content-main max-w-lg md:max-w-2xl lg:max-w-7xl px-12 mx-auto relative grid grid-rows-1 grid-cols-1 lg:grid-cols-2 bg-[url(/app-booking-bg.jpg)] bg-center rounded-3xl">
                {/* >------->-------->App-Booking-Col-1<-------<--------< */}
                <div className="app-booking-col-1 mt-18 md:mt-10">
                    {/* >------->-------->App-Booking-Main-Heading<-------<--------< */}
                    <div className="app-booking-heading-main flex flex-col justify-center space-y-4 lg:pt-10 pb-15">
                        <div className="app-booking-heading space-y-6">
                            <h6 className='text-md lg:text-xl text-[var(--text-light)]'>Special offer for you</h6>
                            <h1 className='text-2xl md:text-5xl font-bold max-w-2xl text-[var(--text-light)]'>50% Offer For Online 1stApp Booking</h1>
                        </div>
                        <p className='max-w-2xl text-xs lg:text-sm text-[var(--text-light)]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum error minima ducimus vitae exercitationem sed adipisci saepe quas.</p>
                        <div className="store-icons flex flex-col max-md:items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-6 ">
                            <img src={AppStoreImg} alt="AppStoreImg" className='max-w-[150px]' />
                            <img src={PlayStoreImg} alt="PlayStoreImg"  className='max-w-[150px]' />
                        </div> 
                    </div>
                </div>
                {/* >------->-------->App-Booking-Col-2<-------<--------< */}
                <div className='app-booking-col-2 place-self-end'>
                    <img src={GroupPhoneImg} alt="" />
                </div>

            </div>
        </section>
    )
}

export default AppBooking