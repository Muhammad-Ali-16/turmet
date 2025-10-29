import { Link } from 'react-router-dom'
import BlogImgMian from '../assets/blog-details-main.jpg'
import BlogImg1 from '../assets/blog-details-1.jpg'
import BlogImg2 from '../assets/blog-details-2.jpg'
import BlogComment1 from '../assets/blog-details-comment-1.png'
import BlogComment2 from '../assets/blog-details-comment-2.png'
import BlogRecentPost1 from '../assets/blog-details-recent-post-1.jpg'
import BlogRecentPost2 from '../assets/blog-details-recent-post-2.jpg'
import BlogRecentPost3 from '../assets/blog-details-recent-post-3.jpg'

function BlogDetails() {

  const Comments = [
    { imgUrl: BlogComment1, name: 'Leslie Alexander', date: 'February 10, 2024 at 2:37 pm' },
    { imgUrl: BlogComment2, name: 'Ralph Edwards', date: 'February 10, 2024 at 2:37 pm' },
  ]

  const ServicesBtns = [
    { label: 'Travel', count: '04' },
    { label: 'System', count: '03' },
    { label: 'Agency', count: '02' },
    { label: 'Restaurant', count: '08' },
    { label: 'Rent A Car', count: '05' },
    { label: 'Blueprint Builders', count: '04' },
  ]

  const RecentPosts = [
    { imgUrl: BlogRecentPost1, date: 'Apr 14, 2025', text: 'Get Best Advertised Your Side Pocket.' },
    { imgUrl: BlogRecentPost2, date: 'Jun 28, 2025', text: 'Supervisor Disapproved of Latest Work.' },
    { imgUrl: BlogRecentPost3, date: 'Oct 02, 2025', text: 'Sakura dreams and samurai tales.' },
  ]

  const Tags = [
    { label: 'Agency' },
    { label: 'Traveling' },
    { label: 'Design' },
    { label: 'Travel' },
    { label: 'Change' },
    { label: 'Video' },
    { label: 'World' },
    { label: 'Startup' },
    { label: 'Services' },
  ]

  return (
    <section className='blog-details-main'>
      <div className="blog-details-content-main relative max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto py-12 px-3 grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-8">

        <div className='blog-wrap my-10 col-span-full md:col-span-1 lg:col-span-2'>
          <div className="container">

            <div className="blog-main-img">
              <div className="img relative">
                <img src={BlogImgMian} alt="BlogImgMian" className='rounded-2xl relative' />
                <div className="img-overlay absolute top-8 left-8 bg-[var(--bg-secondary)] text-white text-center text-lg rounded-xl px-4 py-2 font-bold">
                  <h5>14 <br /> Dec</h5>
                </div>
              </div>
              <div className="img-discription flex flex-row items-center text-black/70 font-semibold text-sm gap-6 flex-wrap py-6 border-b border-black/15">
                <h5>By Admin</h5>
                <h5>2 Comments</h5>
                <h5>Tour</h5>
              </div>
            </div>

            <div className="overview my-6 space-y-5">
              <h1 className='text-2xl md:text-3xl font-bold'>Get Best Advertiser in Your Side Pocket</h1>
              <p className='text-sm text-black/70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis iste aliquam pariatur doloremque exercitationem quos corporis consequatur quae, laborum dolor laboriosam dolorum quam! Inventore ducimus culpa ut quam repudiandae
              </p>
              <p className='text-sm text-black/70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloribus, modi accusantium qui quisquam incidunt libero eaque labore numquam dolore, suscipit molestias necessitatibus tenetur veniam, consequatur voluptates cumque autem dolorum.
              </p>
              <div className="imgs flex flex-col lg:flex-row gap-6">
                <div className="h-full w-full">
                <img src={BlogImg1} alt="BlogImg1" className='w-[100%] h-[100%]' />
                </div>
                <div className="h-full w-full">
                <img src={BlogImg2} alt="BlogImg2" className='w-[100%] h-[100%]' />
                </div>
              </div>
              <p className='text-sm text-black/70'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae impedit beatae ut amet excepturi modi omnis assumenda, corrupti deleniti, illo tenetur nam perspiciatis minima minus explicabo, dicta ab velit
              </p>

              <div className="quote bg-[var(--bg-primary)] p-6 md:p-10 rounded-2xl border-l-4 border-[var(--bg-secondary)] flex items-end justify-between">
                <h4 className="max-w-[700px] font-bold italic">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, corporis? Dolorum maiores enim dignissimos sint perspiciatis nesciunt incidunt aut nisi, dolorem nam eius fugit quos
                </h4>
                <div className="icon shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z" stroke="#1CA8CB"></path>
                    <path d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z" stroke="#1CA8CB"></path>
                  </svg>
                </div>
              </div>

              <p className='text-sm text-black/70'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quae magni fuga minus odio culpa aperiam libero aliquid nesciunt? Sapiente, numquam assumenda recusandae fugit facere distinctio dicta dolorum. Doloremque, qui
              </p>
            </div>

            <div className="social-icons flex flex-row flex-wrap items-center justify-between my-8 py-8 border-y border-black/15 gap-6">
              <div className="btns-main space-x-2 text-sm font-semibold text-black/70">
                <Link to='/tour'><button className='transition-all duration-350 cursor-pointer border border-black/20 hover:border-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)] hover:text-white rounded-lg px-6 py-2'>Travel</button></Link>
                <Link to='/services'><button className='transition-all duration-350 cursor-pointer border border-black/20 hover:border-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)] hover:text-white rounded-lg px-6 py-2'>Services</button></Link>
                <Link to='/tour'><button className='transition-all duration-350 cursor-pointer border border-black/20 hover:border-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)] hover:text-white rounded-lg px-6 py-2'>Agency</button></Link>
              </div>
              <div className="icons flex flex-row items-center gap-2">
                <h5 className='font-bold'>Share: </h5>
                <a href="?"> <i className="hover:text-[var(--text-secondary)] duration-200 bi bi-facebook"></i></a>
                <a href="?"> <i className="hover:text-[var(--text-secondary)] duration-200 bi bi-instagram"></i></a>
                <a href="?"> <i className="hover:text-[var(--text-secondary)] duration-200 bi bi-linkedin"></i></a>
                <a href="?"> <i className="hover:text-[var(--text-secondary)] duration-200 bi bi-twitter-x"></i></a>
              </div>
            </div>

            <div className="blog-reviews space-y-8">
              <h1 className='text-2xl md:text-3xl font-bold'> {Comments.length} Comments</h1>

              {Comments.map((comment, i) => (
                <div className="item flex flex-col md:flex-row items-center pb-8 border-b border-black/15 gap-6" key={i}>
                  <img src={comment.imgUrl} alt="BlogCommentImg" className='self-start' />
                  <div className="content space-y-2">
                    <div className="heading flex flex-row items-center justify-between">
                      <h5 className='font-semibold text-lg'>{comment.name}</h5>
                      <a href='?'><button className='cursor-pointer text-white bg-[var(--bg-secondary)] rounded-full text-sm px-4 py-1'>Reply</button></a>
                    </div>
                    <div className="discription text-sm text-black/75 space-y-1">
                      <h5>{comment.date}</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet culpa maiores at animi eaque deleniti, labore quibusdam inventore nisi excepturi.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="blog-form my-10 space-y-8">
              <h1 className="text-2xl md:text-3xl font-bold">Leave a comment</h1>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full md:col-span-1">
                  <label htmlFor="name" className="block font-medium">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your Name"
                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                  />
                </div>

                <div className="col-span-full md:col-span-1">
                  <label htmlFor="email" className="block font-medium">
                    Your Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Your Email"
                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)]"
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="message" className="block font-medium">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write Message"
                    required
                    className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--button-primary)] h-32 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[var(--button-primary)] before:bg-[var(--button-secondary)] text-[var(--text-light)] font-semibold text-sm lg:text-[16px] cursor-pointer px-6 py-4 rounded-full min-w-[150px] w-fit relative z-10 overflow-hidden
      before:transition-all before:duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-full before:scale-x-0 hover:before:scale-x-100 before:origin-left before:-z-10 flex items-center justify-center gap-2"
                >
                  Post Comment
                  <i className="bi bi-arrow-right text-sm"></i>
                </button>
              </form>
            </div>

          </div>
        </div>

        <div className="blog-side-bar my-10 col-span-full md:col-span-1 space-y-6 overflow-hidden">

          <div className="search-bar p-6 border border-black/15 rounded-2xl space-y-4">
            <h5 className="text-xl font-bold">Search</h5>

            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder="Search here"
                className="w-full py-3 pl-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--button-primary)]"
              />
              <button
                type="submit"
                className="cursor-pointer absolute right-0 top-0 bottom-0 bg-[var(--bg-secondary)] text-white px-4 rounded-lg border border-[var(--bg-secondary)] "
              >
                <i className="bi bi-search text-lg"></i>
              </button>
            </div>
          </div>

          <div className="services p-6 border border-black/15 rounded-2xl space-y-4">
            <h5 className="text-xl font-bold">Services</h5>
            <div className="container space-y-2">
              {ServicesBtns.map((btn, i) => (
                <div className={`item flex items-center justify-between flex-row text-black/60 ${i < ServicesBtns.length - 1 ? 'border-b border-dashed border-black/20' : ''}  py-3`} key={i}>
                  <button className='hover:text-[var(--text-secondary)] duration-250'>
                    <a href="?">{btn.label}</a>
                  </button>
                  <h5>{btn.count}</h5>
                </div>
              ))}
            </div>
          </div>

          <div className="recent-post p-6 border border-black/15 rounded-2xl space-y-4">
            <h5 className="text-xl font-bold">Recent Posts</h5>
            {RecentPosts.map((post, i) => (
              <div className="item flex flex-row items-center gap-4" key={i}>
                <img src={post.imgUrl} alt={post.imgUrl} className='rounded-lg' />
                <div className="content space-y-2">
                  <h5 className='text-sm text-black/65'><i class="bi bi-calendar-check me-1 text-[var(--text-secondary)]"></i> {post.date}</h5>
                  <h5 className='text-md font-bold duration-200 hover:text-[var(--text-secondary)]'>
                    <a href="?">{post.text}</a>
                  </h5>
                </div>
              </div>
            ))}
          </div>

          <div className="tags p-6 border border-black/15 rounded-2xl space-y-4">
            <h5 className="text-xl font-bold">Tags</h5>
            <div className="container space-y-2 flex flex-wrap gap-2">
              {Tags.map((tag, i) => (
                <a href='?' key={i}>
                  <button className='transition-all duration-350 cursor-pointer border border-black/20 hover:border-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)] hover:text-white rounded-sm px-6 py-2 text-sm'>
                    {tag.label}
                  </button>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section >
  )
}

export default BlogDetails