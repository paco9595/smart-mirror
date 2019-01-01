import React, { Component }from 'react'
import { getLocationServie, getCurrentWeather} from './../servies'
export class Weather extends Component {

    state={
    }

    componentDidMount(){
        getLocationServie().subscribe(loc=>{
            console.log(loc.latitude,loc.longitude)
            getCurrentWeather(loc.latitude,loc.longitude).subscribe(res=>console.log(res))
        },e=> console.log(e))
    }

    render(){
        return(
            <div>
                {this.state.ip}
            </div>
        )
    }
}