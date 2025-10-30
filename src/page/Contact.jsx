import LocationIcon from '../assets/contact-icon-location.svg'
import MailIcon from '../assets/contact-icon-mail.svg'
import PhoneIcon from '../assets/contact-icon-phone.svg'

function Contact() {

  const ContactCards = [
    { imgUrl: LocationIcon, heading: 'Our Address', text: '2464 Royal Ln. Mesa, New Jersey 45463.' },
    { imgUrl: MailIcon, heading: 'example@mail.com', text: 'Email us anytime for any kind of query.' },
    { imgUrl: PhoneIcon, heading: 'Hot:+208-666-0112', text: 'Call us any kind support, we will wait for it.' },
  ]

  return (
    <section className='contact-main'>
      <div className="contact-content-main relative max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto py-12 px-3">
        <div className="cards-main grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {ContactCards.map((card, i) => (
            <div className={`card rounded-xl p-5 cursor-pointer ${(i + 1) % 2 === 0 ? 'bg-[var(--bg-secondary)]' : 'bg-[var(--bg-primary)]'}`} key={i}>
              <div className={`conatiner text-center space-y-4 rounded-xl border ${(i + 1) % 2 === 0 ? ' border-white text-white' : ' border-black/20'} p-4`}>
                <div className="icon">
                  <img src={card.imgUrl} alt="location-icon" className='mx-auto' />
                </div>
                <div className="content space-y-2">
                  <h5 className='text-lg lg:text-xl font-bold'>{card.heading}</h5>
                  <p className={`max-w-[250px] mx-auto ${(i + 1) % 2 === 0 ? 'text-white' : 'text-black/70'}`}>{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="relative  bg-[#113D48] py-12 ">
        <div className="contact-form-main grid grid-rows-1 grid-cols-1 lg:grid-cols-2 mx-auto max-w-lg md:max-w-2xl lg:max-w-7xl px-3 gap-6">
          <div className="contact-form my-10 space-y-8">
            <div className="contact-heading-main text-white">
              <h6 className='text-md lg:text-xl'>Contact Us</h6>
              <h1 className='text-2xl md:text-4xl font-bold max-w-xl'>Send Message Anytime</h1>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
              <div className="col-span-full md:col-span-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your Name"
                  className="w-full mt-2 px-4 py-3 border border-white/25 rounded-lg outline-none"
                />
              </div>

              <div className="col-span-full md:col-span-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="Your Email"
                  className="w-full mt-2 px-4 py-3 border border-white/25 rounded-lg outline-none "
                />
              </div>

              <div className="col-span-full">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  autoComplete="subject"
                  required
                  placeholder="Subject"
                  className="w-full mt-2 px-4 py-3 border border-white/25 rounded-lg outline-none "
                />
              </div>

              <div className="col-span-full">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write Message"
                  required
                  className="w-full mt-2 px-4 py-3 border border-white/25 rounded-lg outline-none h-32 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-transparent border border-white/25 before:bg-[var(--button-primary)] text-[var(--text-light)] font-semibold text-sm lg:text-[16px] cursor-pointer px-6 py-4 rounded-full min-w-[150px] w-fit relative z-10 overflow-hidden
      before:transition-all before:duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-full before:scale-x-0 hover:before:scale-x-100 before:origin-left before:-z-10 flex items-center justify-center gap-2"
              >
                Submit Message
                <i className="bi bi-arrow-right text-sm"></i>
              </button>
            </form>
          </div>

          <div className="map w-full h-[300px] md:h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.383679975721!2d-122.08385148469263!3d37.38605197982967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cae4e08b6f%3A0x43a64c066e1b1e0a!2sMountain%20View%2C%20CA!5e0!3m2!1sen!2sus!4v1696450000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact