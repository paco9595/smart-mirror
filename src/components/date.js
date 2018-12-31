import React from 'react'
import { DateContainer, DateItem } from './../styled-Component';
import PropTypes from 'prop-types';

export const Date = props=>{
    const { date, size} = props
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    return(
        <DateContainer size={size}>
            <DateItem>{days[date.dayWeek]}</DateItem>
            <DateItem not>{date.day}</DateItem>
            <DateItem>{months[date.month]}</DateItem>
            <DateItem not>{date.year}</DateItem>
        </DateContainer>
    )
}
Date.propTypes= {
    date: PropTypes.shape({
        dayWeek: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired
    }).isRequired
}