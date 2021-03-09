import React, {Component} from 'react'
import './nav.css'
import logoIV from './img/logo IV.svg'
//import InnerStore from '../../../inner.store/InnerStore'


export default class NavHide extends Component {

    constructor(props) {
        super(props)
        this.state = {
            display: { value: 'nav-hide-box display-none'}
        }
    }

    render() {
        
        return (
            <div className={this.state.display.value}>
                <nav className="nav-hide">
                    <section className="logo-section-nav-hide">
                        <img src={logoIV} alt="IV logo" />
                    </section>
                    <section className="btn-Nav-section">
                        <button>Tickets</button>
                        <button>Events</button>
                        <button>Gallery</button>
                        <button>History</button>
                        <button>About</button>
                    </section>
                    <section className="nav-profile-section">
                        <div className="nav-profile-box">
                            <button>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </button>
                            <button>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                    <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                </svg>
                            </button>
                        </div>
                    </section>
                </nav>
                <button className="btn-hide-nav"></button>
            </div>
        )
    }
}