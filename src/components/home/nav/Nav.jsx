import React, {Component} from 'react'
import './nav.css'
import logoIV from './img/logo IV - sin puntos.svg'
import ButtonMenu from './ButtonMenu'


export default class Nav extends Component {
    render() {
        
        return (
            <nav className="nav-fix">
            
                <section className="logo-section">
                    <img src={logoIV} alt="IV logo" />
                </section>

                <section className="btn-section-nav">
                    <ButtonMenu />
                </section>

            </nav>
        )
    }
}