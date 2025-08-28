import { Component, type ReactNode } from 'react';
import './index.css';
import { ImageCollection } from '../../assests';
import SolsNavbar from '../SolsNavbar';
import NavBar from '../NavBar';
import {
  GamePageCSS,
  PositioningGameEnd,
  GameEndCard,
  TrophyBox,
  GameEndCardContent,
  ScoreImgCard,
  TrophyPic,
  ProbImage,
} from '../../styledComponents';
interface GamePageState {
  mainCat: number;
  mainImgIndex: number;
  score: number;
  gameOver: boolean;
  resetKey: number;
}

class GamePage extends Component<void, GamePageState> {
  state = {
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
          <GamePageCSS>
            <PositioningGameEnd>
              <GameEndCard>
                <ScoreImgCard src="https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png" />
              </GameEndCard>
              <TrophyBox>
                <TrophyPic src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png" />
              </TrophyBox>
              <GameEndCardContent>
                <h2>Your Score</h2>
                <h1>{score}</h1>
                <button onClick={this.handleTryAgain}>Try Again</button>
              </GameEndCardContent>
            </PositioningGameEnd>
          </GamePageCSS>
        ) : (
          <GamePageCSS>
            <h2>Score: {score}</h2>
            <div>
              <ProbImage
                src={ImageCollection[mainCat][mainImgIndex]}
                className="probImage"
                alt="main"
              />
            </div>
            <SolsNavbar onImageClick={this.handleClick} />
          </GamePageCSS>
        )}
      </div>
    );
  }
}

export default GamePage;
