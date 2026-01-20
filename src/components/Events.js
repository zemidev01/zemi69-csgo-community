import React from 'react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "ZEMI69 Winter Championship",
      date: "25 Ianuarie 2026",
      time: "20:00",
      prize: "500 RON",
      participants: "32/32",
      status: "full"
    },
    {
      title: "1v1 Tournament",
      date: "28 Ianuarie 2026", 
      time: "19:00",
      prize: "200 RON",
      participants: "18/32",
      status: "open"
    },
    {
      title: "Team vs Team Battle",
      date: "2 Februarie 2026",
      time: "18:00", 
      prize: "800 RON",
      participants: "6/16",
      status: "open"
    }
  ];

  const pastEvents = [
    {
      title: "TOP 1 JUCATOR Challenge",
      date: "20 Decembrie 2025",
      winner: "RaZieL1988",
      prize: "1000 RON"
    },
    {
      title: "Autumn Classic",
      date: "15 Noiembrie 2025", 
      winner: "ZEMI_Warriors",
      prize: "750 RON"
    }
  ];

  return (
    <section id="evenimente" className="events">
      <div className="container">
        <h2 className="section-title">Evenimente</h2>
        
        <div className="events-section">
          <div className="upcoming-events">
            <h3>Evenimente Viitoare</h3>
            <div className="events-grid">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-header">
                    <h4>{event.title}</h4>
                    <span className={`event-status ${event.status}`}>
                      {event.status === 'full' ? 'COMPLET' : 'DESCHIS'}
                    </span>
                  </div>
                  
                  <div className="event-details">
                    <div className="event-info">
                      <span className="info-icon"></span>
                      <span>{event.date}</span>
                    </div>
                    <div className="event-info">
                      <span className="info-icon"></span>
                      <span>{event.time}</span>
                    </div>
                    <div className="event-info">
                      <span className="info-icon"></span>
                      <span>Premiu: {event.prize}</span>
                    </div>
                    <div className="event-info">
                      <span className="info-icon"></span>
                      <span>Participanți: {event.participants}</span>
                    </div>
                  </div>
                  
                  <button 
                    className={`btn ${event.status === 'full' ? 'btn-disabled' : 'btn-primary'}`}
                    disabled={event.status === 'full'}
                  >
                    {event.status === 'full' ? 'Complet' : 'Înscrie-te'}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="past-events">
            <h3>Evenimente Trecute</h3>
            <div className="past-events-list">
              {pastEvents.map((event, index) => (
                <div key={index} className="past-event-card">
                  <div className="past-event-info">
                    <h4>{event.title}</h4>
                    <span className="event-date">{event.date}</span>
                  </div>
                  <div className="past-event-result">
                    <span className="winner">{event.winner}</span>
                    <span className="prize">{event.prize}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;