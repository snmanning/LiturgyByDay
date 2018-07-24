import React, { Component } from 'react';
import './LiturgyDay.css';
import axios from 'axios';
import moment from 'moment';

class LiturgyDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liturgy: {},
            date: {},
            isLoading: true,
        };
    }
    
componentDidMount() {
    const  date = moment().format('YYYY/MM/DD');
    const url = `/general-en/${date}`;
    axios.get(url).then(response => {
        this.setState({
            liturgy: response.data,
            isLoading: false,
        });
    }).catch((error) => {
        this.setState({
            isLoading: true,
            error: error,
        });
    });
}

    render () {
        const {isLoading, error, liturgy} = this.state;
        if(error) {
            return (
                <p>
                    Today's information is not available at this time. 
                    Please check again later.
                </p>
            );
        }
        if(isLoading) {
            return (
                <h1>
                    Retrieving today's Liturgical Calendar...
                </h1>
            );
        }
        return (
            <div className="LiturgyDay-container">
                <h1>
                    {liturgy.celebrations[0]['title']}
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