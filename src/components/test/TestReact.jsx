import React, {Component} from 'react'

import ColorBox from './color-box/colorBox'
import P from './paragraph/P'

export default class TestReact extends Component {

  state = {
    name1: 'Nicholas Van Orton',
    name2: 'Dig Weed',
    name3: 'Paul Deep',
    parag: 'Paragraph'
  }

  changeTitleState = () => {
    this.setState({name3: this.state.name2})
  }

  changeParagraphState = () => {
    this.setState({parag: this.state.name1})
  }

  showConsole = data => {
    console.log(data)
  }

  render() {
    const {name3, parag} = this.state

    return (
      <div className='App'>

        <ColorBox showConsole={this.showConsole} />

        <h3 onClick={this.changeTitleState} >
          {name3}
        </h3>

        <P onClick={this.changeParagraphState}> 
          {parag} 
        </P>
              
      </div>
    );
  }
}
