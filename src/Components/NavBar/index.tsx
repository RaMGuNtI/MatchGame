import { Component, type ReactNode } from 'react';
import './index.css';
class NavBar extends Component {
  render(): ReactNode {
    return (
      <div className="navbar-section">
        <div className="logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            className="logo"
          />
        </div>
        <div className='right-side'>
          <div className="score-section">
            <p>
              Score: <span>0</span>
            </p>
          </div>
          <div className="timer-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="timer-logo"
            />
            <h3>60 sec</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
