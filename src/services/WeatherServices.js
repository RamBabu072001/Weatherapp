import { DateTime } from "luxon";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";


const getWeatherData =( info , Searchparams)=>{
        const url = new URL(BASE_URL + info);
        url.search = new URLSearchParams({...Searchparams , appid: import.meta.env.VITE_API_KEY})
    
        
        return fetch(url).then((res)=> res.json()).then((data)=> data);
        
    } ;

const FormatToLocalTime = (secs , offset ,  format = "cccc , dd LLL yyyy' | Local Time: 'hh: mm a")=> DateTime.fromSeconds(secs+offset,{zone:"utc"}).toFormat(format);
    
const iconUrlFromCode = (icon) =>`http://openweathermap.org/img/wn/${icon}@2x.png`;

const formatcurrent= (data) =>{
    

    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
        timezone,
      } = data;

    const {main:details , icon} = weather[0];
    const formattedLocaltime = FormatToLocalTime(dt,timezone)

    return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise:FormatToLocalTime(sunrise,timezone,"hh:mm a"),
    sunset: FormatToLocalTime(sunset,timezone,"hh:mm a"),
    details,
    icon: iconUrlFromCode(icon),
    speed,
    timezone,
    formattedLocaltime,
    };

}

const formatforcastweather= (secs , timezone , data)=>{
    console.log(secs);
    console.log(timezone)

    const Daily = data.filter((f)=>f.dt_txt.includes('12:00:00')).map((f)=>({
        temp:f.main.temp,
        day:f.dt_txt.split(' ')[0],
        icon : iconUrlFromCode(f.weather[0].icon)
    }))

    const hourly = data.filter((f)=>f.dt>secs).map((f)=>({
        
        temp:f.main.temp,
        
        title: FormatToLocalTime(f.dt,timezone,"hh:mm a"),
        
        icon : iconUrlFromCode(f.weather[0].icon),
        date:FormatToLocalTime(f.dt,timezone,"dd LLL"),
        

    })).slice(0,5);

    return {hourly , Daily}
}




const getformattedWeatherData = async(search)=>{
    const formattedcurrentweather = await getWeatherData("weather",search).then(formatcurrent);
    
    const {dt ,lat , lon , timezone} = formattedcurrentweather
    const  formattedforcast = await getWeatherData('forecast',{lat,lon , units : search.units}).then((d)=> formatforcastweather(dt,timezone,d.list))
    
    return {...formattedcurrentweather , ...formattedforcast}
}
export default getformattedWeatherData;