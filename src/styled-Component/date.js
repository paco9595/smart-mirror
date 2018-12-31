import styled from 'styled-components'

export const DateContainer = styled.div`
    display: flex;
    font-size: ${props=> props.size ? props.size: '20'}px
`
export const DateItem = styled.div`
    ${props=> props.not ?'margin: 0 10px;': ''}
    
`