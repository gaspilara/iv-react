import React, {Component} from 'react'
import './header.css'
import BackgroundHeader from './BackgroundHeader'

export default class Header extends Component {

    render() {
        return(
            <header>
                <BackgroundHeader />
            </header>
        )
    }
}