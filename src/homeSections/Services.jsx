import ServicesImg from '../assets/services-1.png'
import LineShape from '../assets/line-shape.png'

function Services() {
  return (
    <section className='services-main bg-[url(/services-bg.jpg)] bg-no-repeat bg-cover bg-center overflow-hidden'>
      <div className="services-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto grid grid-rows-1 grid-cols-1 lg:grid-cols-2 px-3 py-16 md:py-18 lg:py-22">

        {/* >------->-------->Services-Col-1<-------<--------< */}
        <div className="services-col-1">
          {/* >------->-------->Services-Main-Heading<-------<--------< */}
          <div className="services-heading-main space-y-6">
            <div className="services-heading">
              <h6 className='text-md lg:text-xl text-[var(--text-secondary)]'>Why Choose Us</h6>
              <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>Get The Best Travel Experience</h1>
            </div>
            <p className='max-w-2xl text-xs lg:text-sm text-black/65'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eum error minima ducimus vitae exercitationem sed adipisci saepe quas? Perspiciatis hic assumenda libero nesciunt quasi laudantium distinctio neque.</p>
          </div>

          {/* >------->-------->Services-Items<-------<--------< */}
          <div className="services-content relative my-10 lg:my-13 space-y-6 z-1">
            <div className="line">
              <img src={LineShape} alt="line-shape" className='hidden xl:block absolute left-6 -z-1' />
            </div>

            <div className="services-items space-y-8 flex xl:flex-row flex-col space-x-6">
              <div className="index h-12 w-12 rounded-full bg-[var(--bg-transparent)] text-[var(--text-secondary)] font-semibold text-xl flex items-center justify-center">
                <h3>01</h3>
              </div>
              <div className="content max-w-md space-y-2">
                <h5 className='text-[var(--text-dark)] text-lg font-bold'>Find ans enjoy a Trip that fits Your Lifestyle with your Friends</h5>
                <p className='text-[var(--text-primary)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus a tenetur eligendi quam magnam.</p>
              </div>
            </div>

            <div className="services-items space-y-8 flex xl:flex-row flex-col space-x-6">
              <div className="index h-12 w-12 rounded-full bg-[var(--bg-transparent)] text-[var(--text-secondary)] font-semibold text-xl flex items-center justify-center">
                <h3>02</h3>
              </div>
              <div className="content max-w-md space-y-2">
                <h5 className='text-[var(--text-dark)] text-lg font-bold'>Travel With More Confidence</h5>
                <p className='text-[var(--text-primary)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus a tenetur eligendi quam magnam.</p>
              </div>
            </div>

            <div className="services-items space-y-8 flex xl:flex-row flex-col space-x-6">
              <div className="index h-12 w-12 rounded-full bg-[var(--bg-transparent)] text-[var(--text-secondary)] font-semibold text-xl flex items-center justify-center">
                <h3>03</h3>
              </div>
              <div className="content max-w-md space-y-2">
                <h5 className='text-[var(--text-dark)] text-lg font-bold'>See What you really Get form us</h5>
                <p className='text-[var(--text-primary)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus a tenetur eligendi quam magnam.</p>
              </div>
            </div>

          </div>
        </div>

        {/* >------->-------->Services-Col-2<-------<--------< */}
        <div className="services-col-2 place-self-center">
          <img src={ServicesImg} alt="services-img" className="services-img xl:max-w-[140%]" />
        </div>
      </div>
    </section>
  )
}

export default Services