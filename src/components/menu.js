import React from 'react'
import { Link } from 'gatsby'

const Menu = () => {
    return (
        <header>
            <nav class="m-nav purple-bg">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Chi Sono</Link></li>
                    <li><Link to='/'>Contattami</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu

