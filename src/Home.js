import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomeTemp from './HomeTemp.js'
import NextTemp from './NextTemp.js'
import './App.css'
import {Link} from 'react-router-dom'

function Home() {

  let [currentTemp, updateTemp] = useState(0)
  let [currentTime, updateTime] = useState('')
  let [currentIndex, updateCurrentIndex] = useState({})

  let [next24HoursTemp, update24HoursTemp] = useState(0)
  let [next24HoursTime, update24HoursTime] = useState('')
  let [next24HoursIndex, update24HoursIndex] = useState({})

  let [next48HoursTemp, update48HoursTemp] = useState(0)
  let [next48HoursTime, update48HoursTime] = useState('')
  let [next48HoursIndex, update48HoursIndex] = useState({})

  let [next72HoursTemp, update72HoursTemp] = useState(0)
  let [next72HoursTime, update72HoursTime] = useState('')
  let [next72HoursIndex, update72HoursIndex] = useState({})
  
  let [next96HoursTemp, update96HoursTemp] = useState(0)
  let [next96HoursTime, update96HoursTime] = useState('')
  let [next96HoursIndex, update96HoursIndex] = useState({})

  let [next120HoursTemp, update120HoursTemp] = useState(0)
  let [next120HoursTime, update120HoursTime] = useState('')
  let [next120HoursIndex, update120HoursIndex] = useState({})

  let [next144HoursTemp, update144HoursTemp] = useState(0)
  let [next144HoursTime, update144HoursTime] = useState('')
  let [next144HoursIndex, update144HoursIndex] = useState({})
  
  useEffect(() => {
    // Checks if user has geolocation available
    // if ('geolocation' in navigator) {
    //   console.log('Available')
    // } else {
    //   console.log('Not Available')
    // }
    

    // Request user to share their location
    navigator.geolocation.getCurrentPosition(function (position) {
      let userLatitude = position.coords.latitude
      let userLongitude = position.coords.longitude
      const callApi = async () => {
        const response = await axios(`https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=${userLatitude}&lon=${userLongitude}`)
      
        updateTemp(response.data.properties.timeseries[0].data.instant.details.air_temperature)
        updateTime(response.data.properties.timeseries[0].time)
        updateCurrentIndex(response.data.properties.timeseries[0].data)
        
        update24HoursTemp(response.data.properties.timeseries[24].data.instant.details.air_temperature)
        update24HoursTime(response.data.properties.timeseries[24].time)
        update24HoursIndex(response.data.properties.timeseries[24].data)

        update48HoursTemp(response.data.properties.timeseries[48].data.instant.details.air_temperature)
        update48HoursTime(response.data.properties.timeseries[48].time)
        update48HoursIndex(response.data.properties.timeseries[48].data)

        update72HoursTemp(response.data.properties.timeseries[64].data.instant.details.air_temperature)
        update72HoursTime(response.data.properties.timeseries[64].time)
        update72HoursIndex(response.data.properties.timeseries[64].data)

        update96HoursTemp(response.data.properties.timeseries[69].data.instant.details.air_temperature)
        update96HoursTime(response.data.properties.timeseries[69].time)
        update96HoursIndex(response.data.properties.timeseries[69].data)

        update120HoursTemp(response.data.properties.timeseries[73].data.instant.details.air_temperature)
        update120HoursTime(response.data.properties.timeseries[73].time)
        update120HoursIndex(response.data.properties.timeseries[73].data)

        update144HoursTemp(response.data.properties.timeseries[77].data.instant.details.air_temperature)
        update144HoursTime(response.data.properties.timeseries[77].time)
        update144HoursIndex(response.data.properties.timeseries[77].data)

      }
      callApi()
    })
  }, [])
  // Cannot make more than one call to the object!

  if (currentTime) {
    return (
      <>

        <Link to={{
          pathname: `/weather/${currentTime}`,
          state: { currentIndex }
        }} >
          <HomeTemp currentTime={currentTime} currentTemp={currentTemp} />
        </Link>
      
        <div className='container'>
          <Link to={{
            pathname: `/weatherIn24Hours/${next24HoursTime}`,
            state: { next24HoursIndex }
          }}>
            <NextTemp newTime={next24HoursTime} newTemp={next24HoursTemp} />
          </Link>

          <Link to={{
            pathname: `/weatherIn48Hours/${next48HoursTime}`,
            state: { next48HoursIndex }
          }}>
            <NextTemp newTime={next48HoursTime} newTemp={next48HoursTemp} />
          </Link>

          <Link to={{
            pathname: `/weatherIn72Hours/${next72HoursTime}`,
            state: { next72HoursIndex }
          }}>
            <NextTemp newTime={next72HoursTime} newTemp={next72HoursTemp} />
          </Link>

          <Link to={{
            pathname: `/weatherIn96Hours/${next96HoursTime}`,
            state: { next96HoursIndex }
          }}>
            <NextTemp newTime={next96HoursTime} newTemp={next96HoursTemp} />
          </Link>

          <Link to={{
            pathname: `/weatherIn120Hours/${next120HoursTime}`,
            state: { next120HoursIndex }
          }}>
            <NextTemp newTime={next120HoursTime} newTemp={next120HoursTemp} />
          </Link>

          <Link to={{
            pathname: `/weatherIn144Hours/${next144HoursTime}`,
            state: { next144HoursIndex }
          }}>
            <NextTemp newTime={next144HoursTime} newTemp={next144HoursTemp} />
          </Link>
        </div>
      </>
    )
  } else {
    return (
      <>
        <p className='loading-text'>Loading...</p>
      </>
    )
  }
}
export default Home