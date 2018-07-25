import React from 'react';
// import 'Label.css';
import PropTypes from 'prop-types';

const Label = (props) =>
    <section>
        <h1>{props.title}</h1>
    </section>

Label.propTypes = {
    title: PropTypes.string
};

export default Label;