import React, {Component} from 'react'
import './DataHeader.css'

export default class BackgroundHeader extends Component {

    render() {
        return(
            <section className="data-header-section">

                <section className="top-data-section">
                    <section className="date-section">
                        <div className="date-box">
                            <h1>25.OCT</h1>
                        </div>
                    </section>
                </section>

                <section className="bottom-data-section">
                    <section className="getTickets-section">
                        <div className="getTickets-box">
                            <a href="tickets"><span className="color-primary">+</span> get Tickets</a>
                        </div>
                    </section>

                    <section className="djName-section">
                        <h1>PAUL DEEP</h1>
                    </section>

                    <section className="hour-section">
                        <div className="hour-box">
                            <span>23:59 HS</span>
                        </div>
                    </section>
                </section>

            </section>
        )
    }
}