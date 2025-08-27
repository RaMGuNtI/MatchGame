import { Component, type ReactNode } from 'react';
import './index.css';
import { ImageCollection } from '../../assests';
import SolsNavbar from '../SolsNavbar';
import NavBar from '../NavBar';

interface GamePageState {
  mainCat: number;
  mainImgIndex: number;
  score: number;
  gameOver: boolean;
  resetKey: number; // triggers NavBar timer reset
}

class GamePage extends Component<{}, GamePageState> {
  state: GamePageState = {
    mainCat: Math.floor(Math.random() * 3),
    mainImgIndex: Math.floor(Math.random() * 10),
    score: 0,
    gameOver: false,
    resetKey: 0,
  };

  handleTimeEnd = () => {
    this.setState({ gameOver: true });
  };

  pickRandomImage = () => {
    const randomCat = Math.floor(Math.random() * 3);
    const randomImg = Math.floor(Math.random() * 10);
    this.setState({ mainCat: randomCat, mainImgIndex: randomImg });
  };

  handleClick = (catIndex: number, imgIndex: number) => {
    const { mainCat, mainImgIndex } = this.state;
    if (catIndex === mainCat && imgIndex === mainImgIndex) {
      this.setState((prev) => ({ score: prev.score + 1 }));
      this.pickRandomImage();
    }
  };

  handleTryAgain = () => {
    this.setState((prev) => ({
      score: 0,
      gameOver: false,
      resetKey: prev.resetKey + 1,
    }));
    this.pickRandomImage();
  };

  render(): ReactNode {
    const { mainCat, mainImgIndex, score, gameOver, resetKey } = this.state;
    return (
      <div>
        <NavBar
          score={score}
          onTimeEnd={this.handleTimeEnd}
          resetKey={resetKey}
        />
        {gameOver ? (
          <div className="gamepage1">
            <div className="pos">
              <div className="game-end-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png"
                  className="card"
                />
              </div>
              <div className="trophy-box">
                <img
                  className="trophy-pic"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                />
              </div>
              <div className="content">
                <h2>Your Score</h2>
                <h1>{score}</h1>
                <button onClick={this.handleTryAgain}>Try Again</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="gamepage">
            <h2>Score: {score}</h2>
            <div className="gameprob">
              <img
                src={ImageCollection[mainCat][mainImgIndex]}
                className="probImage"
                alt="main"
              />
            </div>
            <SolsNavbar onImageClick={this.handleClick} />
          </div>
        )}
      </div>
    );
  }
}

export default GamePage;
