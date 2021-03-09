import React, {Component} from 'react'
import './p.css'

export default class P extends Component {
    render() {

        {/*const {children} = this.props*/}

        return(
            <p {...this.props} />
/*            <p>{children}</p>*/
        )
    }
}