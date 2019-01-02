import styled from "styled-components";

export const WeatherContainer = styled.div`
    font-size: ${props=> props.size? props.size: '20'}px;
`
export const WeatherItem = styled.div`
    ${props=> props.size? 'font-size:' + props.size: ''}px;
`