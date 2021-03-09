import React, {Component} from 'react'
import './header.css'
import bgHeader0 from './img/paul-deep-0.png'
import bgHeader1 from './img/paul-deep-1.png'
import bgHeader2 from './img/paul-deep-2.png'
import bgHeader3 from './img/paul-deep-3.png'
import DataHeader from './data-header/DataHeader'

export default class BackgroundHeader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bgHeader: {value: bgHeader1}
        }
    }
    
    switchBgHeader = ()=> {
        const imgArr = [
            {bgHeader: {value: bgHeader0}},
            {bgHeader: {value: bgHeader1}},
            {bgHeader: {value: bgHeader2}},
            {bgHeader: {value: bgHeader3}}
        ]
        let num = Math.floor((Math.random()*4))
        this.setState(imgArr[num])
    }

    componentDidMount() {
        setInterval(this.switchBgHeader, 5000)
    }

    render() {
        return(
            <div className="bg-header-box">
                <DataHeader />
                <div className="gradient-header"></div>
                <img className="bg-header-img" src={this.state.bgHeader.value} alt="DJ-background" />
            </div>
        )
    }
}