import React, {Component} from 'react'

import Nav from './nav/Nav'
import NavHide from './nav/NavHide'
import Header from './header/Header'
import Footer from './footer/Footer'

export default class Home extends Component {

    render() {
        return(
            <section className="home-section">

                <Nav />
                <NavHide />
                <Header />
                <Footer />
                
            </section>
        )
    }
}