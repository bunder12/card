import React from 'react'
import useTime from './components/useTime'
import ExpiredComp from './components/ExpiredComp'
import TimeComp from './components/TimeComp'

const App = () => {

  const [days, hours, minutes, seconds] = useTime();

    return (
      <div className='bg-slate-800 h-screen flex justify-center items-center'>
      {
        days+hours+minutes+seconds <= 0 && (
          <ExpiredComp/>   
        )
      }
      {
        days+hours+minutes+seconds > 0 && (
          <TimeComp days={days} hours={hours} minutes={minutes} seconds={seconds}/>   
        )
      }

      </div>
    )
}

export default App