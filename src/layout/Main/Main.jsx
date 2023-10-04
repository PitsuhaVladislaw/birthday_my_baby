
import './Main.css'

import Girl from '../../assets/img/186037.png'
import Letters from '../../assets/img/IMG_20220726_234911-removebg-preview 1.png'

function Main() {
    return(
        <main>
            <section>
                <article className='menu_button'>
                    <div>
                        <img src={Girl} alt="you)" />
                        <h2>About You</h2>
                    </div>
                    <div>
                        <img src={Letters} alt="letters" />
                        <h2>Greetings for you</h2>
                    </div>
                </article>
                <article className='gallery'>
                    <img src="" alt="collage" />
                    <button>Glimpse Of Us</button>
                </article>
            </section>
        </main>
    )
}

export default Main