"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const calculateTimeLeft = (targetDate: Date) => {
  const difference = targetDate.getTime() - new Date().getTime()
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

export function CountdownTimer() {
  // Set target date to 6 days from now
  const [targetDate] = useState(new Date(Date.now() + 6 * 24 * 60 * 60 * 1000))
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-3xl font-bold text-[#D5006D]">Time Until Evensia 5</h2>
      <div className="flex space-x-4 md:space-x-8">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="flex flex-col items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-lg shadow-lg p-4 w-20 h-20 flex items-center justify-center">
              <span className="text-3xl font-bold text-[#FF4B87]">{value.toString().padStart(2, '0')}</span>
            </div>
            <span className="mt-2 text-sm font-medium capitalize text-gray-700">{unit}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}