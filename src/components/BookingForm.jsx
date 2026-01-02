import React, { useState } from 'react'

const BookingForm = ({
  formData,
  availableTimes,
  occasions,
  onDateChange,
  onTimeChange,
  onGuestsChange,
  onOccasionChange,
  onSubmit
}) => {
  const [errors, setErrors] = useState({})
  const [specialRequests, setSpecialRequests] = useState('')

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.date) {
      newErrors.date = 'Please select a date'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date'
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'Please select a time'
    }
    
    if (!formData.guests || formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Please enter number of guests (1-10)'
    }
    
    if (!formData.occasion) {
      newErrors.occasion = 'Please select an occasion'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      onSubmit({
        ...formData,
        specialRequests
      })
    }
  }

  const getNextWeekDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      dates.push(date.toISOString().split('T')[0])
    }
    
    return dates
  }

  const futureDates = getNextWeekDates()

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">
            <i className="fas fa-calendar-alt"></i> Date
          </label>
          <select
            id="date"
            value={formData.date}
            onChange={(e) => onDateChange(e.target.value)}
            className={errors.date ? 'error' : ''}
          >
            {futureDates.map(date => {
              const dateObj = new Date(date)
              const options = { weekday: 'short', month: 'short', day: 'numeric' }
              const formattedDate = dateObj.toLocaleDateString('en-US', options)
              
              return (
                <option key={date} value={date}>
                  {formattedDate}
                </option>
              )
            })}
          </select>
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="time">
            <i className="fas fa-clock"></i> Time
          </label>
          <div className="time-slots">
            {availableTimes.map(time => (
              <button
                key={time}
                type="button"
                className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                onClick={() => onTimeChange(time)}
              >
                {time}
              </button>
            ))}
          </div>
          {errors.time && <span className="error-message">{errors.time}</span>}
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="guests">
            <i className="fas fa-user-friends"></i> Number of Guests
          </label>
          <div className="guests-selector">
            <button
              type="button"
              className="guest-btn"
              onClick={() => onGuestsChange(Math.max(1, parseInt(formData.guests) - 1))}
            >
              <i className="fas fa-minus"></i>
            </button>
            <div className="guest-count">
              <span className="guest-number">{formData.guests}</span>
              <span className="guest-label">Guests</span>
            </div>
            <button
              type="button"
              className="guest-btn"
              onClick={() => onGuestsChange(Math.min(10, parseInt(formData.guests) + 1))}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          {errors.guests && <span className="error-message">{errors.guests}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="occasion">
            <i className="fas fa-gift"></i> Occasion
          </label>
          <select
            id="occasion"
            value={formData.occasion}
            onChange={(e) => onOccasionChange(e.target.value)}
            className={errors.occasion ? 'error' : ''}
          >
            {occasions.map(occasion => (
              <option key={occasion} value={occasion}>{occasion}</option>
            ))}
          </select>
          {errors.occasion && <span className="error-message">{errors.occasion}</span>}
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="specialRequests">
          <i className="fas fa-star"></i> Special Requests (Optional)
        </label>
        <textarea
          id="specialRequests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Any dietary restrictions, allergies, or special celebrations?"
          rows="3"
        ></textarea>
      </div>
      
      <div className="form-submit">
        <button type="submit" className="btn submit-btn">
          <i className="fas fa-check-circle"></i> Confirm Reservation
        </button>
        <p className="form-note">
          <i className="fas fa-info-circle"></i> You'll receive a confirmation email within 24 hours.
        </p>
      </div>
    </form>
  )
}

export default BookingForm