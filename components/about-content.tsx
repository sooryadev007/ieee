"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart } from "lucide-react"

export function AboutContent() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prose max-w-none"
      >
        <h2 className="text-3xl font-bold mb-6 text-[#D5006D]">About Evensia</h2>
        <p className="text-gray-700 leading-relaxed">
          Evensia is an intercollegiate event that marked the inauguration of IEEE CS Chapter of CE Munnar in 2016. The second, third and fourth editions of Evensia were two-day technical symposiums held in November 2017, October 2019 and January 2022 respectively. The four previous editions saw great participation from students across the state. Evensia is a combination of technology, culture and humanity, with each edition delivering on this promise to all participants. This event has always been a cherished memory in the minds of all participants.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prose max-w-none"
      >
        <h2 className="text-3xl font-bold mb-6 text-[#D5006D]">About IEEE SB CE Munnar and CS SBC CE Munnar</h2>
        <p className="text-gray-700 leading-relaxed">
          The IEEE Computer Society Chapter at the College of Engineering Munnar has consistently organized a variety of activities for students, both within the institution and beyond. It has successfully fulfilled its commitment to imparting knowledge to all participants and volunteers through these events. The chapter has fostered strong connections among students from different departments and batches, while cultivating the technical curiosity and collaborative spirit essential for developing robust professional skills.
        </p>
      </motion.div>
    </div>
  )
}