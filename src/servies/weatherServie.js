import { Observable } from 'rxjs';

const key ='ccc2ec2e41de68b88ccaa407bb4663c9'
const baseUrl = 'http://api.openweathermap.org/data/2.5/'
export const getCurrentWeather = (lat,long)=> Observable.create(obs=>{
    fetch(`${baseUrl}weather?lat=${lat}&lon=${long}&appid=${key}`).then(res=>res.json()).then(res=>obs.next(getweatherFormat(res)))
    setInterval(() => {
        fetch(`${baseUrl}weather?lat=${lat}&lon=${long}&appid=${key}`).then(res=>res.json()).then(res=>obs.next(res))
    }, 3600000);
})
const getweatherFormat = obj =>{
    return {
        ...obj,
        main:{
            ...obj.main,
            temp:  toCelsius(obj.main.temp),
            temp_max: toCelsius(obj.main.temp_max),
            temp_min: toCelsius(obj.main.temp_min)
        },
        sys:{
            ...obj.sys,
            sunrise: toDate(obj.sys.sunrise),
            sunset: toDate(obj.sys.sunset)
        }
    }



}

const toCelsius = (k)=>  k - 273.15
const toDate = (d)=> {
    const date = new Date(d*1000)
    return `${date.getHours()>=10 ? date.getHours(): '0'+date.getHours()}:${date.getMinutes()>=10 ? date.getMinutes(): '0'+date.getMinutes()}`
}