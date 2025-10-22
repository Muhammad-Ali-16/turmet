import CardImg1 from '../assets/activities-1.jpg'
import CardImg2 from '../assets/activities-2.jpg'
import CardImg3 from '../assets/activities-3.jpg'
import CardImg4 from '../assets/activities-4.jpg'
import CardImg5 from '../assets/activities-5.jpg'
import CardImg6 from '../assets/activities-6.jpg'
import CardImg7 from '../assets/activities-7.jpg'
import CardImg8 from '../assets/activities-8.jpg'
import CardImg9 from '../assets/activities-9.jpg'


function Activities() {

  const ActivitiesCards = [
    { imgUrl: CardImg1, Trip: '5', location: 'India', place: 'Taj Mahal' },
    { imgUrl: CardImg2, Trip: '7', location: 'China', place: 'The Greate Wall Of China' },
    { imgUrl: CardImg3, Trip: '2', location: 'Paris', place: 'Eiffel Tower' },
    { imgUrl: CardImg4, Trip: '3', location: 'Mexico', place: 'Chichen Itza' },
    { imgUrl: CardImg5, Trip: '1', location: 'Rome', place: 'Colosseum' },
    { imgUrl: CardImg6, Trip: '4', location: 'Italy', place: 'Pisa' },
    { imgUrl: CardImg7, Trip: '8', location: 'Pakistan', place: 'Kashmir' },
    { imgUrl: CardImg8, Trip: '10', location: 'Dubai', place: 'Palm Jumeirah' },
    { imgUrl: CardImg9, Trip: '5', location: 'Finland', place: 'Finland' },
  ]

  return (
    <section className="activities-main">
      <div className='activities-content-main relative max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto py-12 '>
        <div className="cards-main grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3">
          {ActivitiesCards.map((card, i) => (
            <div className="card space-y-3 group" key={i}>
              <div className="card-img relative overflow-hidden rounded-2xl w-fit max-md:place-self-center">
                <img src={card.imgUrl} alt={`${card.place} Img`} className='rounded-2xl relative transition-all duration-300 group-hover:scale-[1.2] cursor-pointer' />
                <div className="img-overlay absolute bg-[var(--bg-secondary)] top-4 left-4 w-auto h-auto rounded-full text-white text-xs px-3 py-1 font-semibold">({card.Trip} Trips)</div>
              </div>
              <h3 className="card-heading text-2xl font-bold mx-3">
                <a href="/activities_details" className='transition-colors duration-150 hover:text-[var(--text-secondary)]'>
                  {card.location}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities