import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { EngagedPairsSection } from './components/EngagedPairsSection'
import { ShaadiMatchesSection } from './components/ShaadiMatchesSection'
import { AboutSection } from './components/AboutSection'
import { PillarsSection } from './components/PillarsSection'
import { CtaBanner } from './components/CtaBanner'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { BookingModal } from './components/BookingModal'

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('Initial Consultation')

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service)
    }
    setIsBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
  }

  return (
    
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Sticky Header with Navigation & Booking CTA */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section with Background & Matrimonial Badges */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Recently Engaged Pairs Section (Shaadi.com Style Ring Ceremonies) */}
        <EngagedPairsSection />

        {/* 3. Shaadi.com Style Verified Profile Matches (Brides & Grooms) */}
        <ShaadiMatchesSection onOpenBooking={handleOpenBooking} />

        {/* 4. About Matrimonial.com Section with Portrait & Narrative */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* 5. Foundational Pillars: Matchmaking & Family Integrity */}
        <PillarsSection />

        {/* 6. Interactive Call to Action Banner */}
        <CtaBanner onOpenBooking={handleOpenBooking} />

        {/* 7. Contact & Booking Form Section */}
        <ContactSection />
      </main>

      {/* Footer with Practice details, hours, and navigation */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Consultation Booking Modal */}
      <BookingModal
        key={`${isBookingOpen}-${selectedService}`}
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  )
}

export default App
