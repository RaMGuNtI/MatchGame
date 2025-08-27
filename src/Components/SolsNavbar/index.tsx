import { Component, type ReactNode } from 'react';
import { ImageCollection } from '../../assests';
import './index.css';

interface SolsNavbarProps {
  onImageClick: (catIndex: number, imgIndex: number) => void;
}

interface SolsNavbarState {
  toDisplay: number;
}

class SolsNavbar extends Component<SolsNavbarProps, SolsNavbarState> {
  state: SolsNavbarState = { toDisplay: 0 };

  render(): ReactNode {
    return (
      <div className="sols">
        <div className="sols-navbar">
          <h2 onClick={() => this.setState({ toDisplay: 0 })}>Fruits</h2>
          <h2 onClick={() => this.setState({ toDisplay: 1 })}>Animals</h2>
          <h2 onClick={() => this.setState({ toDisplay: 2 })}>Places</h2>
        </div>
        <div className="solspics">
          {ImageCollection[this.state.toDisplay].map((e, index) => (
            <img
              src={e}
              className="solImg"
              key={index}
              onClick={() =>
                this.props.onImageClick(this.state.toDisplay, index)
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolsNavbar;
