/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Menu from './menu'
import MainContent from './main-content'
import Header from './header'

export default ({ children }) => (
  <div>
    <Header />
    <Menu />
    <MainContent />
    {children}
  </div>
)
