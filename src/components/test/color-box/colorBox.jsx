import React, {Component} from 'react'
import Square from './square'

const styles = {
    colorBox: {
        width: '100%',
        height: '20vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}

export default class ColorBox extends Component {

    state = {
        colorR: 'lightgreen',
        colorG: 'crimson',
        colorB: 'royalblue',
    }

    setColorState = () => {
        this.setState({
            colorR: 'purple',
            colorG: 'none',
            colorB: 'none',
        })
    }
    
    render() {
        
        const bgColorR = this.state.colorR
        const bgColorG = this.state.colorG
        const bgColorB = this.state.colorB

        return(
            <div style={styles.colorBox}>
                
                <Square
                    onClick={this.setColorState}
                    bgStyle={bgColorR}
                    txtSquare={bgColorR}
                    />
                <Square
                    onClick={this.setColorState}
                    bgStyle={bgColorG}
                    txtSquare={bgColorG}
                    />
                <Square
                    onClick={this.setColorState}
                    bgStyle={bgColorB}
                    txtSquare={bgColorB}
                    />

            </div>
        )
    }
}