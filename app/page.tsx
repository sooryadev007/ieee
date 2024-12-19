import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CountdownTimer } from "@/components/countdown-timer"
import { AboutContent } from "@/components/about-content"
import { ContactCard } from "@/components/contact-card"
import { RegisterButton } from "@/components/register-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <section className="py-20 px-4 bg-white/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto space-y-16">
          <CountdownTimer />
          <AboutContent />
          <div className="flex justify-center">
            <RegisterButton />
          </div>
        </div>
      </section>

      <ContactSection />
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#D5006D]">Contact Us</h2>
          <ContactCard />
        </div>
      </section>
      <Footer />
    </main>
  )
}