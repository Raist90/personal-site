import React from 'react'
import { Link } from 'gatsby'

const MainContent = () => {
    return (
        <main>
            <section class="m-banner purple-bg-gradient light-text">
                <div class="m-caption-wrapper">
                    <div class="m-caption">
                        <div class="author-img m-shadow"></div>
                        <h1>Manuel De Toma</h1>
                        <p class="subtitle yellow-text">Fullstack Web Developer</p>
                        <p>Cupidatat velit in nostrud sint ad id quis. Anim do consequat occaecat magna cillum occaecat ullamco id est. Officia deserunt elit nulla qui esse in esse.</p>
                        <Link to="#" class="m-caption-button purple-bg">Contattami</Link>
                    </div>
                </div>
            </section>

            <section class="m-blog-section purple-bg">
                <div class="m-blog-wrapper m-shadow">
                    <article class="m-featured">
                        <h1>Titolo articolo</h1>
                        <p class="subtitle yellow-text">Sottotitolo</p>
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
