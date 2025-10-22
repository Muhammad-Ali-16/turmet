import BlogImg1 from '../assets/blog-1.jpg'
import BlogImg2 from '../assets/blog-2.jpg'
import BlogImg3 from '../assets/blog-3.jpg'
import BlogImg4 from '../assets/blog-4.jpg'
import GroupImg from '../assets/group-about.png'


function Blog() {

    const BlogCards = [
        { ImgUrl: BlogImg1, noComments: '02', Date: 'Jun 28, 2024', Heading: 'Ultimate Guide To Planning Your Dream Vacation', Path: '/blog_details' },
        { ImgUrl: BlogImg2, noComments: '02', Date: 'May 15, 2022', Heading: 'Unforgettable Adventures Travel Agency Bucket List Experiences', Path: '/blog_details' },
        { ImgUrl: BlogImg3, noComments: '02', Date: 'Oct 12, 2020', Heading: 'Exploring Culture and way Cuisine Travel Agency', Path: '/blog_details' },
        { ImgUrl: BlogImg4, noComments: '02', Date: 'Feb 01, 2019', Heading: 'Travel Agency is they Best Foodie Destinations', Path: '/blog_details' },
    ]

    return (
        <section className='blog-main px-3 py-12 relative overflow-hidden'>
            <div className="blog-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto relative">
                {/* >------->-------->Blog-Main-Heading<-------<--------< */}
                <div className="blog-heading-main flex flex-col items-center justify-center my-10">
                    <div className="blog-heading text-center ">
                        <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>News & Updates</h6>
                        <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>Our Latest News & Articles</h1>
                    </div>
                </div>

                <div className="blog-cards-main grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {/* >------->-------->Blog-Cards<-------<--------< */}
                    {BlogCards.map((card, i) => (
                        <div className="card relative rounded-xl w-auto overflow-hidden p-3 shadow-xl space-y-5" key={i}>
                            <div className="card-img-main relative">
                                <img
                                    src={card.ImgUrl}
                                    alt='Blog Img'
                                    className="card-img rounded-xl w-full h-full object-cover"
                                />
                            </div>
                            <div className="blog-card-review flex flex-row items-center justify-between">
                                <h5 className='text-sm text-black/70'><i className="me-0.5 text-[var(--text-secondary)] bi bi-chat"></i>{card.noComments} Comments</h5>
                                <h5 className='text-sm text-black/70'><i className="me-0.5 text-[var(--text-secondary)] bi bi-calendar"></i> {card.Date}</h5>
                            </div>
                            <div className="card-description line-clamp-2">
                                <div className="card-heading">
                                    <h3 className="text-lg font-semibold hover:text-[var(--text-secondary)] transition-colors cursor-pointer">
                                        {card.Heading}
                                    </h3>
                                </div>
                            </div>
                            <div className="card-btn flex flex-row justify-between items-center pb-4">
                                <button className='text-md font-bold text-black/70'>
                                    <a href={card.Path}>
                                        Read More <i className="bi bi-arrow-right"></i>
                                    </a>
                                </button>
                                <img src={GroupImg} alt="group-img" className='max-w-[100px]' />
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Blog