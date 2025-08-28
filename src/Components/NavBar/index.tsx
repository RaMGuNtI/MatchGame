import { Component, type ReactNode } from 'react';
import './index.css';
import {
  NavBarSection,
  RightPartNav,
  TimerLogo,
  TimerSection,
  WebLogo,
} from '../../styledComponents';

interface NavBarProps {
  score: number;
  onTimeEnd: () => void;
  resetKey: number;
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
      <NavBarSection>
        <div>
          <WebLogo
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            height="30px"
            alt="logo"
          />
        </div>
        <RightPartNav>
          <div>
            <p>
              Score: <span>{this.props.score}</span>
            </p>
          </div>
          <TimerSection>
            <TimerLogo
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <h3>{this.state.time} sec</h3>
          </TimerSection>
        </RightPartNav>
      </NavBarSection>
    );
  }
}

export default NavBar;
