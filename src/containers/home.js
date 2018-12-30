import React, { Component } from 'react'
import { Clock, Date } from './../components'
import styled from 'styled-components'

const FlootRight = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
`
const FlootLeft = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
`

export class Home extends Component{
    render(){
        let date = {
            day: 28,
            dayWeek: 0,
            month: 11,
            year: 2018
        }
        return (
        <div>
            <FlootRight>
                <Clock hour='10:40'/>
                <Date data={date}/>
            </FlootRight>
        </div>
        )
    }
}