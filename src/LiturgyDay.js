import React, { Component } from 'react';
import './LiturgyDay.css';
import Label from './Label';
import axios from 'axios';
import moment from 'moment';



class LiturgyDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liturgy: {},
            date: {},
            season: {},
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
                    <i class="far fa-sun fa-spin"></i>
                </h1>
            );
        }
        const style = {
            backgroundColor: liturgy.celebrations.map(c => c.colour).reverse()[0]
        };
        const date = moment(liturgy.date).format('MMMM-DD');
        
        return (
            <div className="LiturgyDay-container">
                <div className='LiturgyDay-today' style={style}>
                    <h1 className='LiturgyDay-info'>
                        {liturgy.celebrations[0]['title']}
                    </h1>
                    <p className='LiturgyDay-date'>{date}</p>
                    <i class="fas fa-dove"></i>
                    {this.props.title ? <Label title={liturgy.celebrations[1]['title']} /> : null}
                </div>
            </div>
        );
    }
}

export default LiturgyDay;