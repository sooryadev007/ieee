"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen hero-pattern flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-16 h-16 mx-auto mb-6 text-[#FF4B87]" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF4B87] to-[#D5006D] text-transparent bg-clip-text">
            Welcome to Evensia 5
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-gray-700"
        >
          A celebration of technology, culture, and humanity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button
            variant="romantic"
            size="lg"
            className="text-lg font-semibold"
          >
            RSVP Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}