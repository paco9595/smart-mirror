import { from, Observable } from "rxjs";

const baseUrl = 'http://api.ipstack.com/'
const access_key= 'c7b69e8ae64748eafcee1542267df56c'
let IP;
let Location;
export const getIpServie = ()=>
    Observable.create(o=> 
        fetch('https://api.ipify.org/?format=json').then(res=>res.json()).then(res=> o.next(res.ip)))


export const getLocationServie = ()=>
    Observable.create(o=>{
        getIpServie().subscribe(res=>{
            console.log(res)
            fetch(`${baseUrl}${res}?access_key=${access_key}`).then(res=>res.json()).then(res=> o.next(res))
        })  
    })

