import React, { Component } from 'react';
import './LiturgyDay.css';
import axios from 'axios';
import Moment from 'react-moment';

class LiturgyDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liturgy: {},
        };
    }
    
componentDidMount() {
    const { date } = Moment();
    const url = `http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en/${date}`;
    axios.get(url).then(response => {
        this.setState({
            liturgy: response.data,
            success: true,
        });
    }).catch((error) => {
        this.setState({
            success: false,
            error: error,
        });
    });
}



    render () {
        return (
            <div className="LiturgyDay-container">
                <h1>
                    {liturgy.celebrations[title]}
                </h1>
                <p>{liturgy.date}</p>
                {/* stateless component for the label name. If the <p/>
                below is null, then the label should not show */}
                <label>Celebrations</label>
                <p>Feast Day</p>
            </div>
        );
    }
}

export default LiturgyDay;