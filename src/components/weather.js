import React, { Component }from 'react'
import { getLocationServie, getCurrentWeather} from './../servies'
import { WeatherContainer, WeatherItem } from './../styled-Component'

export class Weather extends Component {

    state={
        main: '',
        location: {
            country_name: '',
            region_name: '',
            city: ''

        }
    }
    componentDidMount(){
        getLocationServie().subscribe(loc=>{
            this.setState({location:{country_name: loc.country_name ,region_name: loc.region_name ,city: loc.city}})
            getCurrentWeather(loc.latitude,loc.longitude).subscribe(weather=>{
                console.log(weather)
                this.setState({...weather})
            })
        },e=> console.log(e))
    }

    render(){
        let { main, location} = this.state 
        return(
            <WeatherContainer size="150">
                <WeatherItem>{main.temp}</WeatherItem>
                <WeatherItem size="33">{ location.city} {location.region_name} {location.country_name}</WeatherItem>
            </WeatherContainer>
        )
    }
}