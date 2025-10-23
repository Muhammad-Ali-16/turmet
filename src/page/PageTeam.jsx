import TeamMembers from '../components/sharedSections/TeamMembers'

import TeamImg1 from '../assets/teams-1.jpg'
import TeamImg2 from '../assets/teams-2.jpg'
import TeamImg3 from '../assets/teams-3.jpg'
import TeamImg4 from '../assets/teams-4.jpg'
import TeamImg5 from '../assets/teams-5.jpg'
import TeamImg6 from '../assets/teams-6.jpg'
import TeamImg7 from '../assets/teams-7.jpg'
import TeamImg8 from '../assets/teams-8.jpg'

function PageTeam() {

    const TeamCards = [
        { ImgUrl: TeamImg1, name: 'Esther Howard', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg2, name: 'Leslie Alexander', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg3, name: 'Theresa Web', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg4, name: 'Floyd Miles', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg5, name: 'Kathryn Murphy', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg6, name: 'Darlene Roberston', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg7, name: 'Leslie Alxeander', profession: 'Tourist Guide' },
        { ImgUrl: TeamImg8, name: 'Ralph Edwards', profession: 'Tourist Guide' },
    ]

    return (
        <section className='teams-main px-3 py-12 relative overflow-hidden'>
            <div className="teams-content-main max-w-lg md:max-w-2xl lg:max-w-7xl mx-auto relative">
                <TeamMembers CardsData={TeamCards} />
            </div>
        </section>
    )
}

export default PageTeam