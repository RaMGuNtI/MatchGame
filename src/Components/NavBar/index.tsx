import { Component, type ReactNode } from 'react';
import './index.css';

interface NavBarProps {
  score: number;
  onTimeEnd: () => void;
  resetKey: number; // triggers timer reset
}

interface NavBarState {
  time: number;
}

class NavBar extends Component<NavBarProps, NavBarState> {
  state: NavBarState = { time: 60 };
  private timerId?: ReturnType<typeof setInterval>;

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps: NavBarProps) {
    if (prevProps.resetKey !== this.props.resetKey) {
      if (this.timerId) clearInterval(this.timerId);
      this.setState({ time: 60 }, this.startTimer);
    }
  }

  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      this.setState(
        (prevState) => ({ time: prevState.time > 0 ? prevState.time - 1 : 0 }),
        () => {
          if (this.state.time === 0) {
            this.props.onTimeEnd();
            if (this.timerId) clearInterval(this.timerId);
          }
        }
      );
    }, 1000);
  };

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
              Score: <span>{this.props.score}</span>
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
