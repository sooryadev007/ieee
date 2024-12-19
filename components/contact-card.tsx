"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"

const contacts = [
  {
    name: "Adarsh K B",
    role: "Organizing Chair, Evensia 5",
    phone: "9496185897"
  },
  {
    name: "Ardra Shaji",
    role: "Chair, IEEE SB CE Munnar",
    phone: "7306921927"
  },
  {
    name: "Dan V Prabha",
    role: "Publicity Outreach Coordinator",
    phone: "8590054416"
  },
  {
    name: "Abhishek Suresh M K",
    role: "Sponsorship and Finance Coordinator",
    phone: "9496452970"
  }
]

export function ContactCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contacts.map((contact, index) => (
        <motion.div
          key={contact.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-[#D5006D]">{contact.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-600">{contact.role}</p>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}