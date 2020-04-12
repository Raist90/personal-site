import React from 'react'
import { Link } from 'gatsby'


const MainContent = () => {
    return (
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
    )
}

export default MainContent
