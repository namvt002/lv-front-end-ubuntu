import React from 'react'
import Header from '../components/Header/header.component'
import Footer from '../components/Footer/footer.component'
import Nav from '../components/Nav'

export default function Layout({children}) {
  return (
    <div>
        <Nav /> 
          {children}
        <Footer />

    </div>
  )
}