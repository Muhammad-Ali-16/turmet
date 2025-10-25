import { Link } from 'react-router-dom'
import TourCardImg1 from '../../assets/tour-card-1.jpg'
import TourCardImg2 from '../../assets/tour-card-2.jpg'
import TourCardImg3 from '../../assets/tour-card-3.jpg'
import TourCardImg4 from '../../assets/tour-card-4.jpg'
import TourCardImg5 from '../../assets/tour-card-5.jpg'
import TourCardImg6 from '../../assets/tour-card-6.jpg'
import TourCardImg7 from '../../assets/tour-card-7.jpg'
import TourCardImg8 from '../../assets/tour-card-8.jpg'

function TourCard() {

    const SwiperSliderCards = [
        { imgUrl: TourCardImg1, location: 'Nederland', heading: 'Brooklyn Beach Resort Tour', pricing: '49.00', noOfDays: '10', PersonsTried: '50', reviews: '4.5' },
        { imgUrl: TourCardImg2, location: 'Thailand', heading: 'Pak Chumphon Town Tour', pricing: '35.00', noOfDays: '10', PersonsTried: '50', reviews: '4.5' },
        { imgUrl: TourCardImg3, location: 'Austria', heading: 'Java & Bali One Life Adventure', pricing: '50.99', noOfDays: '10', PersonsTried: '50', reviews: '4.5' },
        { imgUrl: TourCardImg4, location: 'Norway', heading: 'Places To Travel In November', pricing: '70.00', noOfDays: '10', PersonsTried: '50', reviews: '4.5' },
        { imgUrl: TourCardImg5, location: 'Pakistan', heading: 'Brooklyn Beach Resort Tour', pricing: '49.00', noOfDays: '10', PersonsTried: '50', reviews: '4.5' },
        { imgUrl: TourCardImg6, location: 'Germany', heading: 'Pak Chumphon Town Tour', pricing: '35.00', noOfDays: '10', PersonsTried: '50', reviews: '4.5' },
        { imgUrl: TourCardImg7, location: 'Poland', heading: 'Java & Bali One Life Adventure', pricing: '50.99', noOfDays: '10', PersonsTried: '50', reviews: '4.5' },
        { imgUrl: TourCardImg8, location: 'Finland', heading: 'Places To Travel In November', pricing: '70.00', noOfDays: '10', PersonsTried: '50', reviews: '4.5' },
    ]

    return (
        <div className="tour-cards-main relative max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto py-12 grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6
                animation-left-right-pseudo after:content-[] after:absolute after:-bottom-5 after:-left-15 after:right-0 after:top-0 after:bg-no-repeat after:bg-[url(/car.png)] after:bg-bottom-left">
            {SwiperSliderCards.map((card, i) => (
                <div className="card relative rounded-2xl text-[var(--text-dark)] w-auto overflow-hidden border border-black/14 group" key={i}>
                    {/* >------->-------->Card-Img<-------<--------< */}
                    <div className="card-img-main relative">
                        <div className='card-img overflow-hidden'>
                            <img
                                src={card.imgUrl}
                                alt={`${card.heading} Img`}
                                className="card-img rounded-lg w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.1]"
                            />
                        </div>
                        <div className="img-overlay px-2 py-1 absolute top-4 right-4 bg-[var(--text-dark)] rounded-md space-x-2 cursor-pointer">
                            <i className="bi bi-heart text-[var(--text-light)]"></i>
                        </div>
                    </div>
                    {/* >------->-------->Card-Details<-------<--------< */}
                    <div className="card-details mx-3 space-y-4.5 my-4">

                        <div className="rating flex flex-row items-center justify-between">
                            <h5 className='text-black/60 text-sm'><i className="me-0.5 text-[var(--text-secondary)] bi bi-geo-alt"></i> {card.location}</h5>
                            <h5 className='bg-[#1ca8cb29] text-[var(--text-secondary)] text-sm px-4 py-1 rounded-full'><i className="me-1.5 text-xs bi bi-star-fill"></i> {card.reviews}</h5>
                        </div>

                        <h3 className="text-lg font-semibold hover:text-[var(--text-secondary)] transition-colors cursor-pointer line-clamp-2">
                            <Link to="/tour-details">
                                {card.heading}
                            </Link>
                        </h3>

                        <div className="card-info flex flex-row items-center space-x-6 text-sm text-black/60">
                            <h5><i className="me-0.5 text-[var(--text-secondary)] bi bi-clock"></i> {card.noOfDays} Days</h5>
                            <h5><i className="me-0.5 text-[var(--text-secondary)] bi bi-person"></i> {card.PersonsTried}+</h5>
                        </div>

                        <div className="card-pricing flex flex-row justify-between items-center mx-1 pt-4 border-t border-dashed border-[var(--bg-secondary)]">
                            <div className="price"><h5 className='font-bold'>${card.pricing} <sub className='font-normal text-[var(--text-primary)]'> / Per Day</sub></h5></div>
                            <Link to='/tour-details' className='font-semibold text-sm lg:text-[16px]'>
                                <button className='bg-[var(--button-primary)] before:bg-[var(--button-secondary)] text-[var(--text-light)] cursor-pointer py-2 rounded-full min-w-[130px] relative z-2 overflow-hidden 
                                        before:transition-all before:duration-350 before:content-[] before:absolute before:inset-0 before:w-[100%] before:h-[100%] before:rounded-full before:-z-1 before:scale-x-0 hover:before:scale-x-100 before:origin-left'
                                >
                                    Book Now
                                    <i className="ms-1 bi bi-arrow-right"></i>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>
            ))}

        </div>

    )
}

export default TourCard