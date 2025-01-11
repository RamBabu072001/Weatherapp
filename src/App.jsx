
import { useEffect, useState } from 'react'
import './App.css'
import Forcast from './components/Forcast'
import Search from './components/Search'
import TempandDetail from './components/TempandDetail'
import TimeandLocation from './components/TimeandLocation'
import TopButtons from './components/TopButtons'
import getformattedWeatherData from './services/WeatherServices'
import DailyForcast from './components/DailyForcast'

function App() {
  
  const [query , setquery] = useState({q:"london"});
  const [units , setunits] = useState('metric');
  const [weather , setWeather] = useState(null);

  const getWeather = async ()=>{
    await getformattedWeatherData({...query,units} ).then((data)=>{
      setWeather(data);
    })
    console.log(weather)
  }

  useEffect(()=>{
    getWeather()
    console.log(weather)
  },[query , units])

  return (
    <>
    <div className='md:mx-36'>
      <TopButtons setquery={setquery}/>
      <Search setquery={setquery} setunits={setunits}/>
      {weather && 
      <>
      <TimeandLocation weather={weather}/>
      <TempandDetail weather={weather}/>
      <Forcast data={weather.hourly}/>
      <DailyForcast data={weather.Daily}/>
      </>
      }
      </div>
    </>
  )
}

export default App
