import React, {Component} from 'react'
import './nav.css'

//import * as InnerActions from '../../../inner.actions/InnerActions'

export default class ButtonMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: { value: 'circle-btn-menu'}
        }
    }

    componentDidUpdate() {
        localStorage.setItem('mermelada key', JSON.stringify(this.state.backgroundColor))
    }

    componentDidMount() {
        const localInfo = localStorage.getItem(this.state.backgroundColor)
        if(localInfo) {
            this.setState({
                backgroundColor: JSON.parse(localInfo)
            })
        }
    }
    
    switchBgColor = () => {
        const bg = {...this.state.backgroundColor}
        bg.value = bg.value === 'circle-btn-menu' ? bg.value +' showBg' : 'circle-btn-menu'
        this.setState({ backgroundColor: bg })

        //InnerActions.changeColor({ backgroundColor: bg })
    }
    
    render() {

        return (
            <button id="btn-menu">
                <div 
                    className={this.state.backgroundColor.value} 
                    onClick={this.switchBgColor.bind(this)} >

                </div>                
            </button>
        )
    }
}