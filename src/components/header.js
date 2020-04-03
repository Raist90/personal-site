import React from 'react'
import { Helmet } from 'react-helmet'

const Header = () => {
    return (
        <Helmet>     
            <html lang="it"></html>
            <link href="https://fonts.googleapis.com/css?family=Arvo|Cabin|Indie+Flower&display=swap" rel="stylesheet"></link>
        </Helmet>
    )
}

export default Header