import React, { useState } from 'react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('membri');

  const topPlayers = [
    { name: "ZEMI_Master", kills: 1250, hours: 2840, rank: "Global Elite" },
    { name: "RO_Sniper", kills: 1180, hours: 2650, rank: "Supreme" },
    { name: "Bucharest_Pro", kills: 1120, hours: 2480, rank: "LEM" },
    { name: "Cluj_Gamer", kills: 1050, hours: 2200, rank: "DMG" },
    { name: "Iasi_Player", kills: 980, hours: 2100, rank: "MGE" }
  ];

  const recentMatches = [
    { map: "de_dust2", score: "16-12", result: "Victorie", time: "2 ore" },
    { map: "de_mirage", score: "16-8", result: "Victorie", time: "3 ore" },
    { map: "de_inferno", score: "14-16", result: "Înfrângere", time: "5 ore" },
    { map: "de_cache", score: "16-10", result: "Victorie", time: "1 zi" }
  ];

  return (
    <section id="comunitate" className="community">
      <div className="container">
        <h2 className="section-title">Comunitatea Noastră</h2>
        
        <div className="community-tabs">
          <button 
            className={activeTab === 'membri' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveTab('membri')}
          >
            Top Membri
          </button>
          <button 
            className={activeTab === 'meciuri' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveTab('meciuri')}
          >
            Meciuri Recente
          </button>
          <button 
            className={activeTab === 'statistici' ? 'tab-btn active' : 'tab-btn'}
            onClick={() => setActiveTab('statistici')}
          >
            Statistici
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'membri' && (
            <div className="top-players">
              <h3>Top 5 Jucători</h3>
              <div className="players-list">
                {topPlayers.map((player, index) => (
                  <div key={index} className="player-card">
                    <div className="player-rank">#{index + 1}</div>
                    <div className="player-info">
                      <h4>{player.name}</h4>
                      <span className="player-rank-badge">{player.rank}</span>
                    </div>
                    <div className="player-stats">
                      <div className="stat">
                        <span className="stat-value">{player.kills}</span>
                        <span className="stat-label">Kills</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{player.hours}h</span>
                        <span className="stat-label">Played</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'meciuri' && (
            <div className="recent-matches">
              <h3>Meciuri Recente</h3>
              <div className="matches-list">
                {recentMatches.map((match, index) => (
                  <div key={index} className="match-card">
                    <div className="match-map">{match.map}</div>
                    <div className="match-score">{match.score}</div>
                    <div className={`match-result ${match.result.toLowerCase()}`}>
                      {match.result}
                    </div>
                    <div className="match-time">{match.time} în urmă</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'statistici' && (
            <div className="community-stats">
              <h3>Statistici Comunitate</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">12,450</div>
                  <div className="stat-label">Total Kills</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">850</div>
                  <div className="stat-label">Meciuri Jucate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">68%</div>
                  <div className="stat-label">Win Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1.24</div>
                  <div className="stat-label">K/D Ratio</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Community;