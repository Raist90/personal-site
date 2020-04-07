import React from 'react'
import { Link } from 'gatsby'
import BadalonaBeach from '../images/badalona beach.jpg'

const MainContent = () => {
    return (
        <main>
            <section className="m-banner purple-bg-gradient light-text">
                <div className="m-caption-wrapper">
                    <div className="m-caption">
                        <div className="author-img m-shadow"></div>
                        <h1>Manuel De Toma</h1>
                        <p className="subtitle yellow-text">Fullstack Web Developer</p>
                        <p>Cupidatat velit in nostrud sint ad id quis. Anim do consequat occaecat magna cillum occaecat ullamco id est. Officia deserunt elit nulla qui esse in esse.</p>
                        <Link to="#" className="m-caption-button purple-bg">Contattami</Link>
                    </div>
                </div>
            </section>

            <section className="m-blog-section purple-bg">
                <div className="m-blog-wrapper m-shadow">
                    <article className="m-featured">
                        <div className="m-featured-img">
                            <img src={ BadalonaBeach } className="img-fluid" alt="badalona beach" />
                        </div>
                        <h2>Titolo articolo</h2>
                        <p className="subtitle yellow-text">Sottotitolo</p>
                        <p>
                            Nulla amet do nulla et amet reprehenderit. Do et occaecat nisi anim eiusmod excepteur aliqua minim. Sit aliqua nulla sunt dolor duis fugiat occaecat culpa eiusmod duis ut aute ullamco. Sit ut duis eiusmod commodo. Deserunt Lorem occaecat enim deserunt tempor nulla proident enim sunt.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default MainContent
