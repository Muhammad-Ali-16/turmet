import {Link} from 'react-router-dom'

function PagesLayout({ title }) {
    return (
        <section className='page-hero-main h-[70vh] bg-[url(/page-hero-bg.jpg)] text-white bg-no-repeat bg-cover bg-center  flex justify-center items-center relative z-1 before:content-[] before:bg-[#0a1f24a6] before:absolute before:inset-0 before:-z-1'>
            <div className="page-hero-content  flex flex-col justify-center items-center space-y-4">
                <h1 className='text-3xl md:text-6xl font-bold max-w-xl'>{title}</h1>
                <h1 className='bg-white/30 px-5 py-3 border border-white rounded-full'><Link to='/'> Home</Link> <i class="bi bi-chevron-double-right"></i> {title}</h1>
            </div>
        </section>
    )
}

export default PagesLayout