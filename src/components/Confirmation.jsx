import React from 'react'

const Confirmation = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const reservationDetails = {
    id: `RES-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
    date: new Date(),
    status: 'Confirmed'
  }

  return (
    <section className="confirmation-section">
      <div className="container">
        <div className="confirmation-card">
          <div className="confirmation-header">
            <div className="confirmation-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Reservation Confirmed!</h2>
            <p className="confirmation-subtitle">
              Your table at Little Lemon is reserved. We look forward to serving you!
            </p>
          </div>
          
          <div className="confirmation-details">
            <div className="detail-card">
              <h3>Reservation Details</h3>
              <div className="detail-row">
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fas fa-hashtag"></i> Reservation ID
                  </span>
                  <span className="detail-value">{reservationDetails.id}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fas fa-calendar-alt"></i> Date
                  </span>
                  <span className="detail-value">{formatDate(data.date)}</span>
                </div>
              </div>
              
              <div className="detail-row">
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fas fa-clock"></i> Time
                  </span>
                  <span className="detail-value">{data.time}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fas fa-user-friends"></i> Guests
                  </span>
                  <span className="detail-value">{data.guests} people</span>
                </div>
              </div>
              
              <div className="detail-row">
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fas fa-gift"></i> Occasion
                  </span>
                  <span className="detail-value">{data.occasion}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">
                    <i className="fas fa-check-circle"></i> Status
                  </span>
                  <span className="detail-value status-confirmed">{reservationDetails.status}</span>
                </div>
              </div>
            </div>
            
            <div className="confirmation-instructions">
              <h3>What to Expect</h3>
              <ul className="instructions-list">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span><strong>Location:</strong> 123 Lemon Street, Chicago, IL 60601</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span><strong>Arrival:</strong> Please arrive 5-10 minutes before your reservation</span>
                </li>
                <li>
                  <i className="fas fa-car"></i>
                  <span><strong>Parking:</strong> Valet parking available at $10/hour</span>
                </li>
                <li>
                  <i className="fas fa-utensils"></i>
                  <span><strong>Seating:</strong> Your table will be held for 15 minutes after reservation time</span>
                </li>
              </ul>
            </div>
            
            <div className="confirmation-actions">
              <button className="btn btn-primary">
                <i className="fas fa-calendar-plus"></i> Add to Calendar
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-edit"></i> Modify Reservation
              </button>
              <button className="btn btn-outline">
                <i className="fas fa-print"></i> Print Details
              </button>
            </div>
            
            <div className="confirmation-note">
              <i className="fas fa-envelope"></i>
              <p>A confirmation email has been sent to you. Please check your spam folder if you don't see it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Confirmation