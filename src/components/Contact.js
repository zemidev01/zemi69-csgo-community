import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajul a fost trimis! Îți vom răspunde în curând.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Intră în contact cu noi</h3>
            <p>
              Ai întrebări, sugestii sau vrei să te alături comunității? 
              Nu ezita să ne contactezi prin oricare dintre metodele de mai jos.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon"></div>
                <div className="contact-details">
                  <h4>Discord</h4>
                  <p>discord.gg/zemi69</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon"></div>
                <div className="contact-details">
                  <h4>Steam Group</h4>
                  <p>steamcommunity.com/groups/zemi69ro</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon"></div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>admin@zemi69.ro</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon"></div>
                <div className="contact-details">
                  <h4>Facebook</h4>
                  <p>facebook.com/zemi69ro</p>
                </div>
              </div>
            </div>
            
            <div className="server-info">
              <h4>Informații Server</h4>
              <div className="server-details">
                <p><strong>IP Server:</strong> 192.168.1.100:27015</p>
                <p><strong>Password:</strong> zemi69</p>
                <p><strong>Tip:</strong> Competitive 128 tick</p>
                <p><strong>Location:</strong> București, România</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Trimite un mesaj</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nume</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subiect</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selectează un subiect</option>
                  <option value="inscriere">Înscriere în comunitate</option>
                  <option value="turneu">Întrebare despre turnee</option>
                  <option value="server">Probleme cu serverul</option>
                  <option value="sugestie">Sugestie</option>
                  <option value="altele">Altele</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Trimite Mesajul
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;