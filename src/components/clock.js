import React, { Component } from 'react'
import { ClockContainer, ClockItem } from './../styled-Component'
import { Date as DateC} from './../components'

export class Clock extends Component{
    state= {
        hour: '',
        min: '',
        
        date:{
            day: 0,
            dayWeek: 0,
            month: 0,
            year: 0
        }
    }
    componentDidMount(){
        const d = new Date();
        let date = {
            day: d.getDate(),
            dayWeek: d.getDay(),
            month: d.getMonth(),
            year: d.getFullYear()
        }
        this.setState({date})
        setInterval(() => {
            let date = new Date();
            this.setState({hour: date.getHours() >= 10 ? date.getHours(): '0'+date.getHours()})
            this.setState({min: date.getMinutes()>= 10 ? date.getMinutes(): '0'+ date.getMinutes() })
            if ( date.getDate()!= this.state.day ){
                let d = {
                    day: date.getDate(),
                    dayWeek: date.getDay(),
                    month: date.getMonth(),
                    year: date.getFullYear()
                }
                this.setState({date: d})
            }
        }, 1000);
    }
    render(){
        return(
            <div>
                <ClockContainer size='150'>
                    <ClockItem>{this.state.hour}</ClockItem>
                    <ClockItem not>:</ClockItem>
                    <ClockItem>{this.state.min}</ClockItem>
                </ClockContainer> 
                <DateC date={this.state.date} size='33' />
            </div>

        )
    }
}
