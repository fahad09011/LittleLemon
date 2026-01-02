import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Specials from './components/Specials'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Confirmation from './components/Confirmation'
import './App.css'
import './booking.css'

function App() {
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingData, setBookingData] = useState(null)

  const handleBookingSubmit = (data) => {
    setBookingData(data)
    setBookingConfirmed(true)
    
    // Reset confirmation after 5 seconds
    setTimeout(() => {
      setBookingConfirmed(false)
    }, 10000)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        {bookingConfirmed ? (
          <Confirmation data={bookingData} />
        ) : (
          <Booking onSubmit={handleBookingSubmit} />
        )}
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App