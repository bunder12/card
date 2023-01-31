import React from 'react'

const TimeComp = ({days, hours, minutes, seconds}) => {
  return (
    <div className='text-slate-100 flex bg-slate-600 p-4 rounded-sm gap-4'>
        <div className='bg-slate-800 text-center p-4'>
            <h2>{days}</h2>
            <p>Days</p>
        </div>
        <div className='bg-slate-800 text-center p-4'>
            <h2>{hours}</h2>
            <p>Hours</p>
        </div>
        <div className='bg-slate-800 text-center p-4'>
            <h2>{minutes}</h2>
            <p>Minutes</p>
        </div>
        <div className='bg-slate-800 text-center p-4'>
            <h2>{seconds}</h2>
            <p>Seconds</p>
        </div>
    </div>
  )
}

export default TimeComp