import React, { useEffect } from 'react';
import '../styles/terms.css';
import Footer from './footer';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <section className="terms-section">
      <h1 style={{textAlign:'center'}} className='terms-heading'>TERMS & CONDITIONS</h1><br/>
      <p className="terms-intro">
        By booking a stay at The Adyar House, you agree to abide by the following terms and conditions. Please read them carefully before making a reservation.
      </p>

      <ol className="terms-list">
        <li>
          <h3>Booking & Payment</h3>
          <ul>
            <li>All reservations are subject to availability and confirmation.</li>
            <li>A minimum of 50% advance payment is required to confirm the booking.</li>
            <li>The balance amount must be paid before or at the time of check-in.</li>
            <li>Accepted payment methods: UPI, bank transfer, debit/credit card, and cash.</li>
          </ul>
        </li>

        <li>
          <h3>Check-in & Check-out</h3>
          <ul>
            <li>Check-in time: 2:00 PM</li>
            <li>Check-out time: 12:00 PM</li>
            <li>Early check-in or late check-out is subject to availability and may attract additional charges.</li>
          </ul>
        </li>

        <li>
          <h3>Cancellation & Refund Policy</h3>
          <ul>
            <li>Free cancellation if cancelled at least 48 hours prior to check-in.</li>
            <li>50% cancellation charge if cancelled between 24 to 48 hours before check-in.</li>
            <li>No refund for cancellations made within 48 hours of check-in or for no-shows.</li>
          </ul>
        </li>

        <li>
          <h3>Guest Identification</h3>
          <ul>
            <li>All guests are required to present a valid government-issued ID proof (Aadhaar, Passport, Driver’s License) at the time of check-in.</li>
            <li>Foreign nationals must present a valid passport and visa.</li>
          </ul>
        </li>

        <li>
          <h3>House Rules</h3>
          <ul>
            <li>Smoking is not allowed inside the premises.</li>
            <li>Outside food is allowed, but guests are requested to maintain cleanliness.</li>
            <li>Parties or loud music are strictly prohibited to ensure a peaceful stay for all guests.</li>
            <li>Pets are not allowed.</li>
          </ul>
        </li>

        <li>
          <h3>Damages & Liability</h3>
          <ul>
            <li>Guests are responsible for any damage caused to the property or its contents during their stay.</li>
            <li>The Adyar House reserves the right to charge for any loss or damage incurred.</li>
            <li>The Adyar House is not responsible for the loss of personal belongings or valuables during the stay.</li>
          </ul>
        </li>

        <li>
          <h3>Long-term Stays & Corporate Bookings</h3>
          <ul>
            <li>Discounted rates may be applicable for long stays (7+ days) or corporate bookings.</li>
            <li>These will be subject to specific terms agreed upon during the booking.</li>
          </ul>
        </li>

        <li>
          <h3>Modifications & Cancellations by The Adyar House</h3>
          <ul>
            <li>In rare circumstances, The Adyar House reserves the right to modify or cancel a booking due to unforeseen events. In such cases, a full refund or alternative accommodation will be offered.</li>
          </ul>
        </li>

        <li>
          <h3>Privacy</h3>
          <ul>
            <li>All personal information collected during the booking process will be kept secure and used only for communication and reservation purposes. We do not share your data with third parties.</li>
          </ul>
        </li>

        <li>
          <h3>Jurisdiction</h3>
          <ul>
            <li>All disputes arising from this agreement will be subject to the jurisdiction of the courts in Chennai, Tamil Nadu, India.</li>
          </ul>
        </li>
      </ol>

      <p className="terms-contact">
        If you have any queries regarding these terms, feel free to contact us at <a href="mailto:theadyarhouse@gmail.com">theadyarhouse@gmail.com</a> or call us at +91 95006 15567 .
      </p>
    </section>
    <Footer />
    </>
  );
};

export default TermsAndConditions;
