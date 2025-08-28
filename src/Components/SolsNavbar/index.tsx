import { Component, type ReactNode } from 'react';
import { ImageCollection } from '../../assests';
import './index.css';
import {
  SolImage,
  SolutionImagesBox,
  SolutionNavBar,
} from '../../styledComponents';
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
      <div>
        <SolutionNavBar>
          <h2 onClick={() => this.setState({ toDisplay: 0 })}>Fruits</h2>
          <h2 onClick={() => this.setState({ toDisplay: 1 })}>Animals</h2>
          <h2 onClick={() => this.setState({ toDisplay: 2 })}>Places</h2>
        </SolutionNavBar>
        <SolutionImagesBox>
          {ImageCollection[this.state.toDisplay].map((e, index) => (
            <SolImage
              src={e}
              key={index}
              onClick={() =>
                this.props.onImageClick(this.state.toDisplay, index)
              }
            />
          ))}
        </SolutionImagesBox>
      </div>
    );
  }
}

export default SolsNavbar;
