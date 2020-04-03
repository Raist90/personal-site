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
        </main>
    )
}

export default MainContent
