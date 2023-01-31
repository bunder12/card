import React, { useEffect, useState } from 'react'

const Coba = () => {
  const target = new Date(1000*60*60*24*3 + new Date().getTime());
  const countDownDate = new Date("Jan 8, 2023").getTime();

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
          }, 1000);
      
          return () => clearInterval(interval);
    }, [countDownDate])

  return (
    <div>
        <h1>Year : {Math.floor(countDown / ((1000*60*60*24*7) + (1000*60*60*24*30) + (1000*60*60*24*365)))}</h1>
        <h1>Month : {Math.floor((countDown % ((1000*60*60*24*7) + (1000*60*60*24*30) + (1000*60*60*24*365))) / ((1000*60*60*24*7) + (1000*60*60*24*30)))}</h1>
        <h1>Week : {Math.floor((countDown % ((1000*60*60*24*7) + (1000*60*60*24*30))) /(1000*60*60*24*7))}</h1>
        <h1>Days : {Math.floor((countDown % (1000*60*60*24*7)) / (1000*60*60*24))}</h1>
        <h1>Hours : {Math.floor((countDown % (1000*60*60*24)) / (1000 * 60 * 60))}</h1>
        <h1>Minutes : {Math.floor((countDown % (1000*60*60)) / (1000 * 60))}</h1>
        <h1>Seconds : {Math.floor((countDown % (1000*60)) / 1000)}</h1>
    </div>
  )
}

export default Coba