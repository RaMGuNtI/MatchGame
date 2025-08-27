import { Component, type ReactNode } from 'react';
import './index.css';
import { ImageCollection } from '../../assests';
import SolsNavbar from '../SolsNavbar';

interface ImageIndex {
  randomCat: number;
  randomCatObj: number;
}

class GamePage extends Component {
  state = {
    toDisplay: 0,
  };

  getRandomImage(): ImageIndex {
    const randomCat = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    const randomCatObj = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    return { randomCat, randomCatObj };
  }

  render(): ReactNode {
    const { randomCat, randomCatObj } = this.getRandomImage();
    console.log({ randomCat, randomCatObj });
    return (
      <div className="gamepage">
        <div className="gameprob">
          <img
            src={ImageCollection[randomCat][randomCatObj]}
            className="probImage"
          />
        </div>
        <div>
          <SolsNavbar />
        </div>
      </div>
    );
  }
}

export default GamePage;
