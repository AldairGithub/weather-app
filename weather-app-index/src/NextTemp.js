import React from 'react'
import moment from 'moment'

export default function NextTemp(props) {

  let time = props.newTime

  function changeToFaherenheit() {
    let temp = props.newTemp
    return ((temp * 1.8) + 32).toFixed(0) + '\xB0 F'
  }
  return (
    <div className='box-container'>
      <p>{moment.utc(time).format('[On] dddd, MMMM Do YYYY')} </p>
      <p className='temp-text'>{changeToFaherenheit()}</p>
    </div>
  )
}