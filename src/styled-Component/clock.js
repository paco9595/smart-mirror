import styled from 'styled-components'

export const ClockContainer = styled.div`
    font-size: ${props=> props.size? props.size : '20'}px;
    display: flex;
    justify-content: center;
`
export const ClockItem = styled.div`
    ${props=> props.not ?'margin: 0 10px;': ''}

`