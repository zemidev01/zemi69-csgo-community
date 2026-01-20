import React from 'react';

const Header = ({ currentPage, setCurrentPage, onlineUsers }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h1 className="logo">ZEMI69.RO</h1>
        </div>
        
        <nav className="nav-menu">
          <button 
            className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('home')}
          >
            Acasă
          </button>
          <button 
            className={currentPage === 'despre' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('despre')}
          >
            Despre
          </button>
          <button 
            className={currentPage === 'comunitate' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('comunitate')}
          >
            Comunitate
          </button>
          <button 
            className={currentPage === 'evenimente' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('evenimente')}
          >
            Evenimente
          </button>
          <button 
            className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </button>
        </nav>
        
        <div className="header-info">
          <div className="online-status">
            <span className="status-dot online"></span>
            <span>{onlineUsers} online</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;