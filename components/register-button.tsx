"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

export function RegisterButton() {
  const [clicked, setClicked] = useState(false)
  const formUrl = "https://forms.google.com" // Replace with actual Google Forms URL

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => {
      window.open(formUrl, '_blank')
    }, 1000)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={handleClick}
        className="bg-gradient-to-r from-[#FF4B87] to-[#D5006D] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        disabled={clicked}
      >
        {clicked ? (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-6 h-6 text-white" />
          </motion.div>
        ) : (
          "Register Now"
        )}
      </Button>
    </motion.div>
  )
}