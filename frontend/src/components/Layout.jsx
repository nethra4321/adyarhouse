import React, { useEffect, useRef } from 'react';
import '../styles/Layout.css';
import '../styles/contactForm.css';
import Footer from './footer';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const roomRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
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
      { threshold: 0.05 }
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
        <div className="intro-wrapper">
          <div className="intro-content">
            <h2 className="intro-title">
              A LUXURY HOMESTAY <br /> IN CHENNAI'S HEART
            </h2>
            <div className="intro-divider" />
            <p className="intro-description">
              Welcome to The Adyar House, a Cozy 6BR Private Luxury Villa in the heart of Chennai! This newly built home is perfect for groups of 12+, with 6 ensuite AC rooms featuring Queen beds, Smart TVs & work desks.
              <br /><br />
              Enjoy a rooftop terrace garden, lounge & kitchenette. Teru, the South Indian restaurant downstairs, serves all meals. Housekeeping is available 24/7.<br/><br/>
              Just 1.5 km from Besant Nagar Beach & close to IT & business hubs of OMR, ECR & Alwarpet. Book the full villa or individual rooms!
            </p>
          </div>
        </div>

        <div className="about-section">
          {/* ABOUT US */}
          <div className="about-block">
            <div className="about-row">
              <div className="about-text">
                <h2>ABOUT US</h2>
                <p>
                  Welcome to The Adyar House – A Homestay Experience Rooted in Madras Charm<br /><br />
                  Nestled in the heart of Chennai's vibrant Adyar neighborhood, The Adyar House offers a tranquil retreat with a touch of Madras' timeless charm. Our homestay is designed to immerse you in the essence of the city—its warmth, culture, and hospitality—while providing the comfort of a modern home away from home. Whether you're visiting for business, leisure, or a special occasion, we promise a memorable and unique experience that reflects the true spirit of Madras.
                </p>
              </div>
              <img src="/stairs.jpg" alt="About Us" className="about-img" />
            </div>
          </div>

          {/* OUR STORY */}
          <div className="about-block">
            <div className="about-row reverse">
              <img src="/adhouse.jpg" alt="Our Story" className="about-img" />
              <div className="about-text">
                <h2>Our Story</h2>
                <p>
                  The Adyar House was born from a vision to create a space that not only feels like home but also celebrates the culture, history, and traditions of Chennai. From its Madras-themed décor to the personalized services we offer, every corner of The Adyar House tells a story—one that honors the rich heritage of this incredible city.<br /><br />
                  What started as a small family project has grown into a homestay that proudly represents the charm of old Madras while offering all the modern comforts you need for a restful stay. We believe in creating a welcoming atmosphere where every guest feels like part of our extended family.
                </p>
              </div>
            </div>
          </div>

          {/* TERU RESTAURANT */}
          <div className="about-block">
            <div className="about-row">
              <div className="about-text">
                <h2>Teru - A South Indian Culinary Experience</h2>
                <p>
                Located in the premises of The Adyar House, Teru offers a delightful South Indian street food experience that you can enjoy during your stay. Teru is known for its authentic, flavorful dishes from Tamil Nadu, Andhra Pradesh, and Karnataka, and guests can indulge in the finest local street food just steps away from their rooms.
                </p>
              </div>
              <img src="/terupic.jpg" alt="Teru Restaurant" className="teru-logo" />
            </div>
          </div>
        </div>


        <div className="bedroom-title-wrapper animated-title-group">
          <div className="bedroom-line animated-line" />
          <div className="bedroom-title animated-title">Bedroom Types</div>
          <div className="bedroom-line animated-line" />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '40px',fontSize: '18px',fontWeight: 'bold' }}>
          We offer six beautiful rooms, each named after rivers that are central to the South Indian culture and landscape.
        <br />
        <Link
          to="/rooms"
          style={{
            display: 'inline-block',
            marginTop: '15px',
            padding: '8px 16px',
            backgroundColor: '#29552a',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        >
          View All Rooms →
        </Link>
        </div>

        <div className="room-cards">
          <div className="room-card">
            <img src="/deluxe.jpg" alt="Deluxe" />
            <h3>Deluxe</h3>
            <p>₹ 2650 / night</p>
            <p><i>Onwards</i></p>
          </div>
          <div className="room-card">
            <img src="/premium.jpg" alt="Premium" />
            <h3>Premium</h3>
            <p>₹ 3450 / night</p>
            <p><i>Onwards</i></p>
          </div>
          <div className="room-card">
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
              <p>TV &amp; STUDY TABLE</p>
            </div>
            <div className="amenity">
              <i className="fa-solid fa-broom"></i>
              <p>HOUSEKEEPING</p>
            </div>
            <div className="amenity">
              <i className="fa-solid fa-camera"></i>
              <p>OUTDOOR CCTV</p>
            </div>
            <div className="amenity">
              <i className="fa-solid fa-couch"></i>
              <p>LOUNGE AREA</p>
            </div>
            <div className="amenity">
              <i className="fa-solid fa-tree"></i>
              <p>TERRACE GARDEN</p>
            </div>
            <div className="amenity">
              <i className="fa-solid fa-kitchen-set"></i>
              <p>KITCHENETTE</p>
            </div>
            <div className="amenity">
              <i className="fa-solid fa-soap"></i>
              <p>LAUNDRY SERVICES</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Layout;