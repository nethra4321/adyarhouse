import React, { useEffect, useRef } from 'react';
import '../styles/Layout.css';
import '../styles/contactForm.css';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const roomRef = useRef(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate room cards
          const cards = entry.target.querySelectorAll('.room-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('in-view');
            }, index * 400); // stagger cards
          });

          // Animate heading lines
          const lines = entry.target.querySelectorAll('.animated-line');
          lines.forEach((line, index) => {
            setTimeout(() => {
              line.classList.add('in-view');
            }, index * 200); // stagger lines
          });

          // Animate title
          const title = entry.target.querySelector('.animated-title');
          setTimeout(() => {
            title.classList.add('in-view');
          }, 600);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (roomRef.current) observer.observe(roomRef.current);

  return () => {
    if (roomRef.current) observer.unobserve(roomRef.current);
  };
}, []);


  return (
    <div>
      <img src="/bg.jpg" alt="Background" className="layout-bg-image zoomIn"/>

      <section className="nav-section" />

      {/* Room Section */}
      <section ref={roomRef} className="room-section">
      <div className="bedroom-title-wrapper animated-title-group">
        <div className="bedroom-line animated-line" />
        <div className="bedroom-title animated-title">Bedroom Type</div>
        <div className="bedroom-line animated-line" />
      </div>

        <div className="room-cards">
          <div className="room-card animated-room-card">
            <img src="/deluxe.jpg" alt="Deluxe" />
            <h3>Deluxe</h3>
            <p>₹ 2650 / night</p>
            <p><i>Onwards</i></p>
          </div>
          <div className="room-card animated-room-card">
            <img src="/premium.jpg" alt="Premium" />
            <h3>Premium</h3>
            <p>₹ 3450 / night</p>
            <p><i>Onwards</i></p>
          </div>
          <div className="room-card animated-room-card">
            <img src="/signature.jpg" alt="Signature" />
            <h3>Signature</h3>
            <p>₹ 3600 / night</p>
            <p><i>Onwards</i></p>
          </div>
        </div>
      </section>

   <section className="info-section">



<div className="amenities-section animate-slide-in">
  <h2 className="amenities-title">AMENITIES</h2>
  <div className='underline'></div>

  <div className="amenities-grid">
    <div className="amenity">
      <i className="fa-solid fa-wifi"></i>
      <p>HIGH-SPEED WI-FI</p>
    </div>
    <div className="amenity">
      <i className="fa-solid fa-utensils"></i>
      <p>IN-HOUSE RESTAURANT</p>
    </div>
    <div className="amenity">
      <i className="fa-solid fa-tv"></i>
      <p>FLAT-SCREEN TV</p>
    </div>
    <div className="amenity">
      <i className="fa-solid fa-broom"></i>
      <p>HOUSEKEEPING</p>
    </div>
    <div className="amenity">
      <i className="fa-solid fa-camera"></i>
      <p>24/7 CCTV</p>
    </div>
    <div className="amenity">
      <i className="fa-solid fa-couch"></i>
      <p>LOUNGE AREA</p>
    </div>
  </div>
</div>





</section>
</div>
  );
};

export default Layout;
