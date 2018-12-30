import React from 'react'
import { ClockContainer, ClockItem} from './../styled-Component'
export const Clock = props =>  {

    return(
        <ClockContainer size='150'>
            <ClockItem>{props.hour.split(':')[0]}</ClockItem>
            <ClockItem no>:</ClockItem>
            <ClockItem>{props.hour.split(':')[1]}</ClockItem>
        </ClockContainer>
    )
}
