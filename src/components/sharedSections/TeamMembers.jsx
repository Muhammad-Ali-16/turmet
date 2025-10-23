
function TeamMembers({ CardsData }) {
    const TeamCards = CardsData;

    return (
        <div className="teams-cards-main grid grid-rows-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* >------->-------->teams-Cards<-------<--------< */}
            {TeamCards.map((card, i) => (
                <div className="card relative rounded-xl w-auto space-y-5" key={i}>
                    <div className="card-img-main relative">
                        <img
                            src={card.ImgUrl}
                            alt='teams Img'
                            className="card-img rounded-xl w-full h-full object-cover"
                        />

                        <div className="card-info relative bottom-10 left-0 right-0 bg-white shadow-md mx-4 rounded-xl px-4 py-6">
                            <h3 className='font-bold text-xl'><a href="/team_details" className=' hover:text-[var(--text-secondary)]'>{card.name}</a></h3>
                            <p className='text-black/60'>{card.profession}</p>

                            <div className="group">
                                <div className="social-icons absolute -top-4 right-5 text-white bg-[var(--bg-secondary)] h-8 w-8 rounded-full flex justify-center items-center">
                                    <i className="bi bi-share"></i>

                                </div>
                                <ul className='absolute right-5 -top-4 flex flex-col items-center justify-center space-y-2 transition-ease-in-out duration-400 invisible opacity-0 group-hover:translate-y-[-153px] group-hover:visible group-hover:opacity-100'>
                                    <li>
                                        <a href="?" className='h-8 w-8 bg-[var(--bg-light)] hover:bg-[var(--bg-secondary)] flex justify-center items-center rounded-full text-[var(--text-secondary)] hover:text-white'>
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="?" className='h-8 w-8 bg-[var(--bg-light)] hover:bg-[var(--bg-secondary)] flex justify-center items-center rounded-full text-[var(--text-secondary)] hover:text-white'>
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="?" className='h-8 w-8 bg-[var(--bg-light)] hover:bg-[var(--bg-secondary)] flex justify-center items-center rounded-full text-[var(--text-secondary)] hover:text-white'>
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="?" className='h-8 w-8 bg-[var(--bg-light)] hover:bg-[var(--bg-secondary)] flex justify-center items-center rounded-full text-[var(--text-secondary)] hover:text-white'>
                                            <i className="bi bi-twitter-x"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamMembers