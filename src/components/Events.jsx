import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";
import "./Events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Digital Transformation Summit 2025",
      date: "15 August 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Chennai Trade Centre, Chennai",
      description:
        "Join industry leaders to explore the latest trends in digital transformation and business innovation.",
      type: "Conference",
      attendees: 500,
      featured: true,
      image: "summit-bg",
    },
    {
      id: 2,
      title: "Business Strategy Masterclass",
      date: "22 August 2025",
      time: "2:00 PM - 6:00 PM",
      location: "VMCN Office, Chennai",
      description:
        "An intensive workshop on developing effective business strategies for sustainable growth.",
      type: "Workshop",
      attendees: 50,
      featured: false,
      image: "workshop-bg",
    },
    {
      id: 3,
      title: "Networking Evening with Entrepreneurs",
      date: "30 August 2025",
      time: "6:00 PM - 9:00 PM",
      location: "ITC Grand Chola, Chennai",
      description:
        "Connect with like-minded entrepreneurs and business leaders in an exclusive networking event.",
      type: "Networking",
      attendees: 100,
      featured: false,
      image: "networking-bg",
    },
    {
      id: 4,
      title: "AI & ML in Business Applications",
      date: "5 September 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Online Webinar",
      description:
        "Discover how artificial intelligence and machine learning can revolutionize your business operations.",
      type: "Webinar",
      attendees: 1000,
      featured: true,
      image: "ai-bg",
    },
  ];

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= new Date()
  );

  return (
    <section id="events" className="section events">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        <p className="section-subtitle">
          Join us for exclusive events, workshops, and networking opportunities
          designed to accelerate your business growth
        </p>

        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className={`event-card ${event.featured ? "featured" : ""}`}
            >
              {event.featured && (
                <div className="featured-badge">Featured Event</div>
              )}

              <div className={`event-image ${event.image}`}>
                <div className="event-overlay">
                  <span className="event-type">{event.type}</span>
                </div>
              </div>

              <div className="event-content">
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div className="event-detail">
                    <FaCalendarAlt className="detail-icon" />
                    <span>{event.date}</span>
                  </div>

                  <div className="event-detail">
                    <FaClock className="detail-icon" />
                    <span>{event.time}</span>
                  </div>

                  <div className="event-detail">
                    <FaMapMarkerAlt className="detail-icon" />
                    <span>{event.location}</span>
                  </div>

                  <div className="event-detail">
                    <FaUsers className="detail-icon" />
                    <span>{event.attendees} Expected Attendees</span>
                  </div>
                </div>

                <div className="event-actions">
                  <button
                    className={`btn ${
                      event.featured ? "btn-primary" : "btn-outline"
                    }`}
                  >
                    Register Now <FaArrowRight />
                  </button>
                  <button className="btn-link">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="events-cta">
          <div className="cta-content">
            <h3>Want to Stay Updated?</h3>
            <p>
              Subscribe to our newsletter to receive notifications about
              upcoming events and exclusive invitations.
            </p>
            <button className="btn btn-secondary">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
