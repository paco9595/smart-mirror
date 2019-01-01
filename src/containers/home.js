import React, { Component } from 'react'
import { Clock, Weather } from './../components'
import { FloatLeft, FloatRight } from "./../styled-Component";

export class Home extends Component{
    render(){
        return (
        <div>
            <FloatRight>
                <Clock/>
            </FloatRight>
            <FloatLeft>
                <Weather/>
            </FloatLeft>
        </div>
        )
    }
}