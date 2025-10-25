import React from 'react'

function Map() {
  return (
     <div className="map w-full h-[500px]  space-y-3 mb-20">
                <h5 className='text-xl md:text-2xl font-semibold'>View In Map</h5>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.383679975721!2d-122.08385148469263!3d37.38605197982967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cae4e08b6f%3A0x43a64c066e1b1e0a!2sMountain%20View%2C%20CA!5e0!3m2!1sen!2sus!4v1696450000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  className='shadow-lg rounded-2xl'
                ></iframe>
              </div>

  )
}

export default Map