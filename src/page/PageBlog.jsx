import BlogImg1 from '../assets/page-blog-1.jpg'
import BlogImg2 from '../assets/page-blog-2.jpg'
import BlogImg3 from '../assets/page-blog-3.jpg'
import BlogImg4 from '../assets/page-blog-4.jpg'
import BlogImg5 from '../assets/page-blog-5.jpg'
import BlogImg6 from '../assets/page-blog-6.jpg'

function PageBlog() {

    const BlogCards = [
        { ImgUrl: BlogImg1, heading: 'The Surfing man Will Blow Your Mind', date: '28' , month: 'Nov'},
        { ImgUrl: BlogImg2, heading: 'Supervisor Disapproved Of Latest Work', date: '28' , month: 'Nov'},
        { ImgUrl: BlogImg3, heading: 'Get Best Advertiser In Your Side Pocket', date: '28' , month: 'Nov'},
        { ImgUrl: BlogImg4, heading: 'The Surfing man Will Blow Your Mind', date: '28' , month: 'Nov'},
        { ImgUrl: BlogImg5, heading: 'Supervisor Disapproved Of Latest Work', date: '28' , month: 'Nov'},
        { ImgUrl: BlogImg6, heading: 'Get Best Advertiser In Your Side Pocket', date: '28' , month: 'Nov'},
    ]

    return (
        <section className='blog-main px-3 py-12 relative overflow-hidden'>
            <div className="blog-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto relative">
                <div className="blog-cards-main grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* >------->-------->Blog-Cards<-------<--------< */}
                    {BlogCards.map((card, i) => (
                        <div className="card relative rounded-xl w-auto space-y-5" key={i}>
                            <div className="card-img-main relative">
                                <img
                                    src={card.ImgUrl}
                                    alt='teams Img'
                                    className="card-img rounded-xl w-full h-full object-cover"
                                />

                                <div className="card-info relative bottom-10 left-0 right-0 bg-white shadow-md space-y-3 mx-4 rounded-xl p-7">
                                    <div className="blog-discription flex flex-row items-center justify-between">
                                        <h3 className="blog-date bg-[var(--bg-secondary)] text-white text-center px-3 py-0.5 rounded-md"><span className='text-xl font-bold'>{card.date}</span><br /> {card.month}</h3>
                                        <h5 className='text-black/65'><i className="text-[var(--text-secondary)] bi bi-person"></i> By Admin</h5>
                                        <h5 className='text-black/65'><i className="text-[var(--text-secondary)] bi bi-tag-fill"></i> Travel</h5>
                                    </div>
                                    <h3 className='blog-heading font-bold text-xl'><a href="/blog_details" className=' hover:text-[var(--text-secondary)]'>{card.heading}</a></h3>
                                    <button className='blog-btn text-sm font-bold text-black/80'><a href="/blog_details">Read More <i className="ms-2 bi bi-arrow-right"></i></a></button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PageBlog