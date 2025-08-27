import { Component, type ReactNode } from 'react';
import './index.css';

interface NavBarState {
  time: number;
}

class NavBar extends Component {
  state: NavBarState = {
    time: 60,
  };

  private timerId?: ReturnType<typeof setInterval>;

  componentDidMount(): void {
    this.timerId = setInterval(() => {
      this.setState((prevState: { time: number }) => ({
        time: prevState.time > 0 ? prevState.time - 1 : 0,
      }));
    }, 1000);
  }

  
  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render(): ReactNode {
    return (
      <div className="navbar-section">
        <div className="logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            className="logo"
            alt="logo"
          />
        </div>
        <div className="right-side">
          <div className="score-section">
            <p>
              Score: <span>0</span>
            </p>
          </div>
          <div className="timer-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="timer-logo"
              alt="timer"
            />
            <h3>{this.state.time} sec</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
