import './Gallery.css'
import photo from '../../assets/img/photik.png'

//import scr1 from '../../assets/img/img1'

export function Gallery() {
    return(
        <section className='gal-block'>
            <article className='head-gal'>
                <img src={photo} alt="photik" />
                <h1>Glimpse Of Us</h1>
                <div className='line1'></div>
                <div className='line2'></div>
            </article>
            <article className='main-gal'>
                
            </article>
        </section>
    )
}