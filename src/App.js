import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Community from './components/Community';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    const generateOnlineUsers = () => {
      setOnlineUsers(Math.floor(Math.random() * 50) + 20);
    };
    
    generateOnlineUsers();
    const interval = setInterval(generateOnlineUsers, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'despre':
        return <About />;
      case 'comunitate':
        return <Community />;
      case 'evenimente':
        return <Events />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero onlineUsers={onlineUsers} />
            <About />
            <Community />
            <Events />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} onlineUsers={onlineUsers} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;