import React, {Component} from 'react'

const styles = {
    colorSquare: ({ bgColor }) => ({
        width: '15vh',
        height: '15vh',
        border: '1px solid gray',
        color: 'gray',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: bgColor,
    })
}

export default class Square extends Component {

    constructor(props) {
        super(props);
    }

        state = {
            background: {
                color: 'none',
            }
        }
        
    switchBgColor = () => {
        const {bgStyle} = this.props

        const bg = this.state.background//{ ...this.state.background } // Respaldo el state existente

        bg.color = bg.color === 'none' ?  bgStyle : 'none' // Modifico el valor
        
        this.setState({ bgColor: bg.color }) // Recargo el state

        console.log(bg.color)
    }
    
    render() {

        const {bgColor} = this.state
        const {txtSquare} = this.props

        return (

            <div 
                style={styles.colorSquare({ bgColor })}  
                onClick={this.switchBgColor.bind(this)}
                >
                {txtSquare}
            </div>

        )
    }
}