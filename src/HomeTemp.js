import React from 'react'
import moment from 'moment'

export default function HomeTemp(props) {

  // installed moment on terminal to format date
  let time = props.currentTime
  let city = props.currentCity
  let state = props.currentState
  let country = props.currentCountry

  function changeLocation() {
    if (city) {
      return <h2>Today in {city}, {country}</h2>
    } else if (state) {
      return <h2>Today in {state}, {country}</h2>
    } else  if (country) {
      return <h2>Today in {country}, </h2>
    } 
  }
  function changeToFaherenheit() {
    let temp = props.currentTemp
    return ((temp * 1.8) + 32).toFixed(0) + '\xB0 F'
  }
  return (
    <div className='today-container'>
      <div className='box-today-container'>
      {changeLocation()}
        <p>On {moment.utc(time).format('dddd, MMMM Do YYYY')}</p>
        <p className='temp-text'>{changeToFaherenheit()}</p>
      </div>
    </div>
  )
}
