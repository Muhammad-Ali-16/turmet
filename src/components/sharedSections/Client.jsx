import ClientImg1 from '../../assets/client-1.jpg'
import ClientImg2 from '../../assets/client-2.jpg'
import ClientImg3 from '../../assets/client-3.jpg'


function Client() {

    const ClientCards = [
        { img: ClientImg1, name: 'Andrew James', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum magnam delectus eum culpa. Quae rerum assumenda vero praesentium voluptates natus ad itaque, officiis amet.' },
        { img: ClientImg2, name: 'Emma Watson', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum magnam delectus eum culpa. Quae rerum assumenda vero praesentium voluptates natus ad itaque, officiis amet.' },
        { img: ClientImg3, name: 'Alex', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum magnam delectus eum culpa. Quae rerum assumenda vero praesentium voluptates natus ad itaque, officiis amet.' },
    ]


    return (
        <div className="clients space-y-4">
            <h5 className='text-xl md:text-2xl font-semibold'>Client Review</h5>

            <div className="clients-cards space-y-8 md:space-y-10">
                {ClientCards.map((card, i) => (
                    <div className="item flex md:flex-row flex-col md:items-center gap-6" key={i}>
                        <div className="item-img">
                            <img src={card.img} alt="Client-Img" className='min-w-[100px] rounded-xl' />
                        </div>
                        <div className="item-content text-md space-y-1">
                            <div className="icon space-x-0.5 text-[var(--color-golden)]">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <h5 className='font-bold'>{card.name}</h5>
                            <p className='text-black/70'>{card.discription}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Client