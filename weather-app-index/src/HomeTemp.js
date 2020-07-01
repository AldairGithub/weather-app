import React from 'react'
import moment from 'moment'

export default function HomeTemp(props) {

  // installed moment on terminal to format date
    let time = props.currentTime

  function changeToFaherenheit() {
    let temp = props.currentTemp
    return ((temp * 1.8) + 32).toFixed(0) + '\xB0 F'
  }
  return (
    <div className='today-container'>
      <div className='box-today-container'>
        <h2>Today, on</h2>
        <p>{moment.utc(time).format('dddd, MMMM Do YYYY')}</p>
        <p className='temp-text'>{changeToFaherenheit()}</p>
      </div>
    </div>
  )
}
