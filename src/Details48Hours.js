import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

function Details48Hours(props) {
  let params = props.match.params

  let [details, updateDetails] = useState({})
  let [detail1Hour, updateDetail1Hour] = useState({})
  let [detail6Hour, updateDetail6Hour] = useState({})

  useEffect(() => {
    updateDetails(props.location.state.next48HoursIndex.instant.details)
    updateDetail1Hour(props.location.state.next48HoursIndex.next_1_hours.details)
    updateDetail6Hour(props.location.state.next48HoursIndex.next_6_hours.details)

  }, [])
  
  function getCardinalDirection(angle) {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    return directions[Math.round(angle / 45) % 8];
  }
  return (
    <div className='box-detail-container'>
      <div>
        <h1>On {moment.utc(params.time).format('dddd, MMMM Do YYYY')}</h1>
        <p>Air pressure at sea level: {details.air_pressure_at_sea_level}</p>
        <p>Temperature: {((details.air_temperature * 1.8) + 32).toFixed(0) + '\xB0 F'}</p>
        <p>Cloud covering: {details.cloud_area_fraction}%</p>
        <p>Humidity: {details.relative_humidity}%</p>
        <p>Wind direction: {getCardinalDirection((details.wind_from_direction) * 22.5)} {((details.wind_speed) * 3.6).toFixed(0)} km/h</p>
      </div>
      <div>
        <h1>1 Hour After</h1>
        <p>Precipitation: {detail1Hour.precipitation_amount}</p>
      </div>
      <div>
        <h1>6 Hour After</h1>
        <p>Precipitation: {detail6Hour.precipitation_amount}</p>
      </div>
      </div>
  )
}
export default withRouter(Details48Hours)