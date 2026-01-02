import React, { useState } from 'react'
import BookingForm from './BookingForm'

const Booking = ({ onSubmit }) => {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00'
  ])

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: '2',
    occasion: 'Birthday'
  })

  const occasions = ['Birthday', 'Anniversary', 'Business', 'Casual', 'Other']

  const handleDateChange = (date) => {
    // In a real app, this would fetch available times from an API
    const newTimes = date === formData.date 
      ? availableTimes 
      : ['17:30', '18:30', '19:30', '20:30', '21:30']
    
    setAvailableTimes(newTimes)
    setFormData({...formData, date, time: newTimes[0]})
  }

  const handleTimeChange = (time) => {
    setFormData({...formData, time})
  }

  const handleGuestsChange = (guests) => {
    setFormData({...formData, guests})
  }

  const handleOccasionChange = (occasion) => {
    setFormData({...formData, occasion})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <section className="booking-section" id="reservations">
      <div className="container">
        <div className="booking-header">
          <h2>Reserve a Table</h2>
          <p className="booking-subtitle">Book your perfect table at Little Lemon</p>
        </div>
        
        <div className="booking-container">
          <div className="booking-info">
            <div className="booking-card">
              <div className="booking-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Opening Hours</h3>
              <ul className="booking-hours">
                <li><span>Mon - Thu:</span> <span>11:00 AM - 10:00 PM</span></li>
                <li><span>Fri - Sat:</span> <span>11:00 AM - 11:00 PM</span></li>
                <li><span>Sunday:</span> <span>12:00 PM - 9:00 PM</span></li>
              </ul>
            </div>
            
            <div className="booking-card">
              <div className="booking-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Group Bookings</h3>
              <p>For parties of 8 or more, please call us directly at <strong>(312) 555-LEMON</strong>.</p>
            </div>
            
            <div className="booking-card">
              <div className="booking-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Special Requests</h3>
              <p>Dietary restrictions? Celebrating something special? Let us know in the special requests field.</p>
            </div>
          </div>
          
          <div className="booking-form-container">
            <BookingForm
              formData={formData}
              availableTimes={availableTimes}
              occasions={occasions}
              onDateChange={handleDateChange}
              onTimeChange={handleTimeChange}
              onGuestsChange={handleGuestsChange}
              onOccasionChange={handleOccasionChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking