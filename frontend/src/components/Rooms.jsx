import React from 'react';
import '../styles/room.css';
import '../styles/contactForm.css';
import Footer from './footer';
import { useEffect } from 'react';

const Room = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <>
      <div className="contact-banner zoom-in">
        <img src="/bg.jpg" alt="Background" />
      </div>
      <div id="rooms-start" className="room-intro">
        <h2 style={{paddingBottom:'20px'}}>Discover Our Signature Rooms</h2>
        <p>
          <strong style={{fontSize:'20px'}}>Experience Madras in the Heart of Adyar</strong>
        </p>
      </div>

      {/* AMARAVATHI */}
      <section className="room-section">
        <div className="room-container">
          <div className="room-image">
            <img src="/amaravathi.jpg" alt="Amaravathi Room" />
          </div>

          <div className="room-details">
            <div className="room-header">
              <p className="room-subtitle">Premium Room</p>
              <h1 className="room-title">AMARAVATHI</h1>
              <p className="room-size">Size: 165 sq ft</p>
            </div>

            <hr className="divider" />

            <div className="tariff-features-container">
              <div className="room-tariff">
                <div className="bed-info">
                  <div className="bed-box">Queen’s Bed</div>
                  <p className="occupancy">Double & Triple Occupancy</p>
                </div>

                <strong>Room Tariff</strong>
                <p><span className="price">₹ 3600</span> / night</p>
                <small>(Inclusive of GST)</small>
              </div>

              <div className="vertical-separator"></div>

              <div className="features">
                <h4>FACILITIES</h4>
                <ul>
                  <li><i className="fas fa-coffee"></i> In-house Café</li>
                  <li><i className="fas fa-tv"></i> Smart TV</li>
                  <li><i className="fas fa-briefcase"></i> Work Desk</li>
                  <li><i className="fas fa-suitcase-rolling"></i> Cupboard</li>
                  <li><i className="fas fa-layer-group"></i> Towels</li> 
                  <li><i className="fas fa-bath"></i> Bathing Soaps</li>
                  <li>
                    <img src="/toothbrush.svg" alt="Toothbrush Icon" style={{width: "18px",height: "20px", verticalAlign: "middle"}}/>
                    Dental Kit
                  </li>
                  <li><i className="fas fa-wifi"></i> Free WiFi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VAIGAI */}
      <section className="room-section">
        <div className="room-container">
          <div className="room-image">
            <img src="/vaigai.jpg" alt="Vaigai Room" />
          </div>

          <div className="room-details">
            <div className="room-header">
              <p className="room-subtitle">Premium Room</p>
              <h1 className="room-title">VAIGAI</h1>
              <p className="room-size">Size: 150 sq ft</p>
            </div>

            <hr className="divider" />

            <div className="tariff-features-container">
              <div className="room-tariff">
                <div className="bed-info">
                  <div className="bed-box">Queen’s Bed</div>
                  <p className="occupancy">Double & Triple Occupancy</p>
                </div>

                <strong>Room Tariff</strong>
                <p><span className="price">₹ 3450</span> / night</p>
                <small>(Inclusive of GST)</small>
              </div>

              <div className="vertical-separator"></div>

              <div className="features">
                <h4>FACILITIES</h4>
                <ul>
                  <li><i className="fas fa-coffee"></i> In-house Café</li>
                  <li><i className="fas fa-tv"></i> Smart TV</li>
                  <li><i className="fas fa-briefcase"></i> Work Desk</li>
                  <li><i className="fas fa-suitcase-rolling"></i> Cupboard</li>
                  <li><i className="fas fa-layer-group"></i> Towels</li> 
                  <li><i className="fas fa-bath"></i> Bathing Soaps</li>
                  <li>
                    <img src="/toothbrush.svg" alt="Toothbrush Icon" style={{width: "18px",height: "20px", verticalAlign: "middle"}}/>
                    Dental Kit
                  </li>
                  <li><i className="fas fa-wifi"></i> Free WiFi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAMBA */}
      <section className="room-section">
        <div className="room-container">
          <div className="room-image">
            <img src="/pamba.jpg" alt="Pamba Room" />
          </div>

          <div className="room-details">
            <div className="room-header">
              <p className="room-subtitle">Classic Room</p>
              <h1 className="room-title">PAMBA</h1>
              <p className="room-size">Size: 120 sq ft</p>
            </div>

            <hr className="divider" />

            <div className="tariff-features-container">
              <div className="room-tariff">
                <div className="bed-info">
                  <div className="bed-box">Double Bed</div>
                  <p className="occupancy">Single & Double Occupancy</p>
                </div>

                <strong>Room Tariff</strong>
                <p><span className="price">₹ 2650</span> / night</p>
                <small>(Inclusive of GST)</small>
              </div>

              <div className="vertical-separator"></div>

              <div className="features">
                <h4>FACILITIES</h4>
                <ul>
                  <li><i className="fas fa-coffee"></i> In-house Café</li>
                  <li><i className="fas fa-tv"></i> Smart TV</li>
                  <li><i className="fas fa-briefcase"></i> Work Desk</li>
                  <li><i className="fas fa-suitcase-rolling"></i> Cupboard</li>
                  <li><i className="fas fa-layer-group"></i> Towels</li> 
                  <li><i className="fas fa-bath"></i> Bathing Soaps</li>
                  <li>
                    <img src="/toothbrush.svg" alt="Toothbrush Icon" style={{width: "18px",height: "20px", verticalAlign: "middle"}}/>
                    Dental Kit
                  </li>
                  <li><i className="fas fa-wifi"></i> Free WiFi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PALAR */}
      <section className="room-section">
        <div className="room-container">
          <div className="room-image">
            <img src="/palar.jpg" alt="Palar Room" />
          </div>

          <div className="room-details">
            <div className="room-header">
              <p className="room-subtitle">Deluxe Room</p>
              <h1 className="room-title">PALAR</h1>
              <p className="room-size">Size: 130 sq ft</p>
            </div>

            <hr className="divider" />

            <div className="tariff-features-container">
              <div className="room-tariff">
                <div className="bed-info">
                  <div className="bed-box">Queen’s Bed</div>
                  <p className="occupancy">Double Occupancy</p>
                </div>

                <strong>Room Tariff</strong>
                <p><span className="price">₹ 2950</span> / night</p>
                <small>(Inclusive of GST)</small>
              </div>

              <div className="vertical-separator"></div>

              <div className="features">
                <h4>FACILITIES</h4>
                <ul>
                  <li><i className="fas fa-coffee"></i> In-house Café</li>
                  <li><i className="fas fa-tv"></i> Smart TV</li>
                  <li><i className="fas fa-briefcase"></i> Work Desk</li>
                  <li><i className="fas fa-suitcase-rolling"></i> Cupboard</li>
                  <li><i className="fas fa-layer-group"></i> Towels</li> 
                  <li><i className="fas fa-bath"></i> Bathing Soaps</li>
                  <li>
                    <img src="/toothbrush.svg" alt="Toothbrush Icon" style={{width: "18px",height: "20px", verticalAlign: "middle"}}/>
                    Dental Kit
                  </li>
                  <li><i className="fas fa-wifi"></i> Free WiFi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KAVERI */}
      <section className="room-section">
        <div className="room-container">
          <div className="room-image">
            <img src="/kaveri.jpg" alt="Kaveri Room" />
          </div>

          <div className="room-details">
            <div className="room-header">
              <p className="room-subtitle">Signature Room</p>
              <h1 className="room-title">KAVERI</h1>
              <p className="room-size">Size: 165 sq ft</p>
            </div>

            <hr className="divider" />

            <div className="tariff-features-container">
              <div className="room-tariff">
                <div className="bed-info">
                  <div className="bed-box">Queen’s Bed</div>
                  <p className="occupancy">Double & Triple Occupancy</p>
                </div>

                <strong>Room Tariff</strong>
                <p><span className="price">₹ 3700</span> / night</p>
                <small>(Inclusive of GST)</small>
              </div>

              <div className="vertical-separator"></div>

              <div className="features">
                <h4>FACILITIES</h4>
                <ul>
                  <li><i className="fas fa-coffee"></i> In-house Café</li>
                  <li><i className="fas fa-leaf"></i> Terrace Garden</li>
                  <li><i className="fas fa-briefcase"></i> Work Desk</li>
                  <li><i className="fas fa-warehouse"></i> Walk-in Wardrobe</li>
                  <li><i className="fas fa-layer-group"></i> Towels</li> 
                  <li><i className="fas fa-bath"></i> Bathing Soaps</li>
                  <li>
                    <img src="/toothbrush.svg" alt="Toothbrush Icon" style={{width: "18px",height: "20px", verticalAlign: "middle"}}/>
                    Dental Kit
                  </li>
                  <li><i className="fas fa-wifi"></i> Free WiFi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GODAVARI */}
      <section className="room-section">
        <div className="room-container">
          <div className="room-image">
            <img src="/godavari.jpg" alt="Godavari Room" />
          </div>

          <div className="room-details">
            <div className="room-header">
              <p className="room-subtitle">Deluxe Room</p>
              <h1 className="room-title">GODAVARI</h1>
              <p className="room-size">Size: 135 sq ft</p>
            </div>

            <hr className="divider" />

            <div className="tariff-features-container">
              <div className="room-tariff">
                <div className="bed-info">
                  <div className="bed-box">Queen’s Bed</div>
                  <p className="occupancy">Double Occupancy</p>
                </div>

                <strong>Room Tariff</strong>
                <p><span className="price">₹ 3200</span> / night</p>
                <small>(Inclusive of GST)</small>
              </div>

              <div className="vertical-separator"></div>

              <div className="features">
                <h4>FACILITIES</h4>
                <ul>
                  <li><i className="fas fa-coffee"></i> In-house Café</li>
                  <li><i className="fas fa-tv"></i> Smart TV</li>
                  <li><i className="fas fa-briefcase"></i> Work Desk</li>
                  <li><i className="fas fa-suitcase-rolling"></i> Cupboard</li>
                  <li><i className="fas fa-layer-group"></i> Towels</li> 
                  <li><i className="fas fa-bath"></i> Bathing Soaps</li>
                  <li>
                    <img src="/toothbrush.svg" alt="Toothbrush Icon" style={{width: "18px",height: "20px", verticalAlign: "middle"}}/>
                    Dental Kit
                  </li>
                  <li><i className="fas fa-wifi"></i> Free WiFi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

{/* <br /> */}
<div className="room-description">
  <p>
    Each room is designed to offer comfort, peace, and a homely feel. With elegant interiors, quality linens, and all the amenities you could need, every room is a perfect sanctuary after a day of exploration.
  </p>
</div>

      </section>
      <Footer />
    </>
  );
};

export default Room;
