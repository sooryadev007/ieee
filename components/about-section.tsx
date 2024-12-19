"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, MapPin, Trophy } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "5th Edition",
    description: "Join us for the milestone 5th edition of Evensia"
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with tech enthusiasts and innovators"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "IEEE SB CE Munnar's flagship event"
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Celebrating years of technical innovation"
  }
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About Evensia</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Evensia is IEEE SB CE Munnar's flagship event, bringing together technology
            and culture in a unique celebration of human innovation and connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-[#FF4B87] mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}