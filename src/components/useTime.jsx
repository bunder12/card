import React, { useEffect, useState } from 'react'

const useTime = () => {
    const countDate = new Date("2023-02-10 21:20:00").getTime() 
    const [countTime, setCountTime] = useState(countDate - new Date().getTime);
    useEffect(() => {
        const interval = setInterval(() => {
            setCountTime(countDate - new Date().getTime());
        }, 1000)

        return () => clearInterval(interval);
    }, [])
    
    return getValues(countTime);
}

const getValues = (countTime) => {
    const days = Math.floor(countTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countTime % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
}

export default useTime