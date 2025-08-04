import React, { useState } from "react";
import { useEffect } from 'react';
import "../styles/faq.css"; 
import Footer from './footer';
const faqData = [
  {
    question: "What is the check-in and check-out time at The Adyar House?",
    answer: `Check-in Time: 2:00 PM onwards
Check-out Time: By 12:00 PM
If you need to adjust these timings, please contact us in advance, and we will do our best to accommodate your request.`,
  },
  {
    question: "Is there parking available at The Adyar House?",
    answer: `Yes, although not covered parking, guests can park their vehicle at the entrance of our premises. Please let us know in advance if you require parking so we can reserve a spot for you.`,
  },
  {
    question: "Do you serve food at The Adyar House?",
    answer: `Yes, we are pleased to inform you that Teru, our South Indian street food restaurant, is located on the ground floor of the property. You can enjoy a variety of authentic South Indian dishes during your stay through the day from 7 am to 10 pm`,
  },
  {
    question: "Are pets allowed at The Adyar House?",
    answer: `Unfortunately, pets are not allowed at The Adyar House, as we aim to maintain a serene and allergy-free environment for all guests.`,
  },
  {
    question: "Do you provide airport transfers?",
    answer: `Yes, we can arrange airport transfers for you at an additional charge. Please let us know your arrival details in advance so we can make the necessary arrangements.`,
  },
{
  question: "What amenities are available in the rooms?",
  answer: [
    "Air conditioning",
    "Comfortable bedding and linens",
    "Free Wi-Fi",
    "Smart TV",
    "Complimentary toiletries",
    "Study Table",
    "Wardrobe / Storage Units"
  ]
},
  {
    question: "Is The Adyar House suitable for business stays?",
    answer: `Absolutely! Our homestay is an ideal spot for business travelers, offering a peaceful environment, reliable Wi-Fi, and a central location close to major business hubs in Chennai. We also provide meeting facilities for your convenience.`,
  },
  {
    question: "How do I make a reservation?",
    answer: `We currently accept bookings on request. Please contact us on +91 95006 15567, email us on theadyarhouse@gmail.com, or fill our contact form with your booking information, and we will revert back to you right away!`,
  },
  {
    question: "Can I cancel or modify my reservation?",
    answer: `Yes, cancellations or modifications can be made up to 48 hours before the scheduled check-in. For any changes or cancellations, please contact us directly. Please refer to our Cancellation Policy for more details.`,
  },
  {
    question: "Do you offer long-term stays?",
    answer: `Yes, we offer discounted rates for long-term stays. Please get in touch with us for more information and to discuss your requirements.`,
  },
  {
    question: "Is Wi-Fi available at The Adyar House?",
    answer: `Yes, free Wi-Fi is available in all rooms and common areas throughout the property.`,
  },
  {
    question: "What is the best way to reach The Adyar House?",
    answer: `The Adyar House is centrally located in the Adyar neighborhood of Chennai, with easy access to public transport and major transit hubs. We are 5 minutes from the Adyar bus terminus and 15 minutes from the nearest metro station.`,
  },
{
  question: "Are there any nearby attractions or restaurants?",
  answer: [
    "Theosophical Society",
    "Elliot’s Beach",
    "Kapaleeshwarar Temple (Mylapore)",
    "Santhome Cathedral",
    "Numerous local and international restaurants nearby"
  ]
},
{
  question: "What are some key locations near The Adyar House?",
  answer: [
    "IIT Madras – Only 3 km away",
    "Old Mahabalipuram Road (OMR) IT Hub – Just 4 km away",
    "East Coast Road (ECR) Entertainment Hub – 4 km away"
  ]
},
  {
    question: "Nearby banquet halls and wedding venues",
    answer: `We are also conveniently located close to several banquet halls and wedding venues, including:
Mayor Ramanathan Centre and Dwaraka Palace Wedding Halls in MRC Nagar & Thiruvanmiyur respectively
A variety of event spaces & wedding halls in Mylapore, RA Puram, Alwarpet, and Kotturpuram.`,
  },
{
  question: "Can I request extra services during my stay?",
  answer: [
    "Laundry and dry cleaning services",
    "Additional bedding or towels",
    "Local sightseeing recommendations",
    "We’re happy to accommodate special requests"
  ]
},
  {
    question: "Is there a minimum stay requirement?",
    answer: `We do not have a minimum stay requirement, but we do encourage longer stays to fully experience everything Chennai has to offer.`,
  },
];

const AdyarHouseFaq = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
    <div className="adyar-faq-container">
      <h1>FAQs</h1>
      <div className="adyar-faq-section">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              {item.question}
              <span className={`arrow ${activeIndex === index ? "rotate" : ""}`}>▼</span>
            </div>
            {activeIndex === index && (
            <div className="faq-answer">
              {Array.isArray(item.answer) ? (
                <ul>
                  {item.answer.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                item.answer.split("\n").map((line, i) => <p key={i}>{line}</p>)
              )}
            </div>

            )}
            <div className="faq-divider"></div>
          </div>
        ))}
      </div>
    </div>
     <Footer/>
    </>
   
  );
};

export default AdyarHouseFaq;
