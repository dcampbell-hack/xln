import React, { useState, useEffect } from 'react'

export const Timer = (props) => {

const [ timerDays, setTimerDays ] = useState(0)
const [ timerHours, setTimerHours ] = useState(0)
const [ timerMinutes, setTimerMinutes ] = useState(0)
const [ timerSeconds, setTimerSeconds ] = useState(0)


let interval;

const startTimer = () => {
    const countdownDate = new Date("November 14, 2022").getTime();

    interval = setInterval(() => {
        const now = new Date().getTime();

        const distance = countdownDate - now;

        const days = Math.floor(distance / (24 * 60 * 60 * 1000))

        const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))

        const minutes = Math.floor(distance % ( 60 * 60 * 1000) / (1000 * 60 ))

        const seconds = Math.floor(distance % ( 60 * 1000) /  1000 )

        if(distance < 0){
            clearInterval(interval.current)
        } else {

            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    })
}

useEffect(() => {
   startTimer();
})


  return (
    <div className="xln-countdown panel-padding">
      <div className='countdown-wrapper'>
        <h1>ICO ends in</h1>
        <div className='countdown-time'>
           <div className='countdown-item'>
              <h1>{timerDays}</h1>
              <p>Days</p>
           </div>
           <div className='countdown-item'>
              <h1>:</h1>
           </div>
           <div className='countdown-item'>
              <h1>{timerHours}</h1>
              <p>Hours</p>
           </div>
           <div className='countdown-item'>
              <h1>:</h1>
           </div>
           <div className='countdown-item'>
              <h1>{timerMinutes}</h1>
              <p>Minutes</p>
           </div>
           <div className='countdown-item'>
              <h1>:</h1>
           </div>
           <div className='countdown-item'>
              <h1>{timerSeconds}</h1>
              <p>Seconds</p>
           </div>
        </div>    
      </div>    
    </div>
  )
}

export default Timer;