import AccommodationIcon from '../../assets/activities-details-icon-1.svg'
import AdmissionIcon from '../../assets/activities-details-icon-2.png'
import ArrivalIcon from '../../assets/activities-details-icon-3.svg'
import LanguageIcon from '../../assets/activities-details-icon-4.svg'
import HotelIcon from '../../assets/activities-details-icon-5.svg'
import TourIcon from '../../assets/activities-details-icon-6.svg'
import GuideIcon from '../../assets/activities-details-icon-7.svg'
import AgeIcon from '../../assets/activities-details-icon-8.svg'


function Details() {
const ActivitiesDetailsInfo = [
    { icon: AccommodationIcon, heading: 'Accommodation', details: 'Star Hotel' },
    { icon: AdmissionIcon, heading: 'Admission Fee', details: 'No' },
    { icon: ArrivalIcon, heading: 'Arrival City', details: 'London' },
    { icon: LanguageIcon, heading: 'Language', details: 'English' },
    { icon: HotelIcon, heading: 'Hotel Transfer', details: 'Available' },
    { icon: TourIcon, heading: 'Next Tour', details: 'Available' },
    { icon: GuideIcon, heading: '01 Guide', details: 'Guided' },
    { icon: AgeIcon, heading: 'Maximum Age', details: '60' },
  ]


  return (
    <div className="box-wrap bg-[var(--bg-primary)] rounded-2xl">
                <div className="container grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 gap-8">

                  {ActivitiesDetailsInfo.map((info, i) => (
                    <div className="accommodation flex flex-row items-center space-x-3" key={i}>
                      <div className="icon border border-black/30 p-2 rounded-md">
                        <img src={info.icon} alt={`${info.heading} Icon`} />
                      </div>
                      <div className="content text-sm">
                        <h5 className='text-black/65'>{info.heading}</h5>
                        <h4 className='font-bold'>{info.details}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  )
}

export default Details