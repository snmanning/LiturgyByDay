import React, { Component } from 'react';
import './LiturgyDay.css';
import axios from 'axios';
import Moment from 'react-moment';

class LiturgyDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
        };
    }
    
componentDidMount() {

    }



    render () {
        return (
            <div className="LiturgyDay-container">
                <h1>
                    Time and week
                </h1>
                <p>Date</p>
                {/* stateless component for the label name. If the <p/>
                below is null, then the label should not show */}
                <label>Celebrations</label>
                <p>Feast Day</p>
            </div>
        );
    }
}

export default LiturgyDay;