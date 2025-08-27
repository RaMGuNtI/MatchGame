import { Component, type ReactNode } from 'react';
import { ImageCollection } from '../../assests';
import "./index.css"


class SolsNavbar extends Component {
  state = {
    toDisplay: 0,
  };

  render(): ReactNode {
    return (
      <div className="sols">
        <div className="sols-navbar">
          <h2
            onClick={() => {
              this.setState({ toDisplay: 0 });
            }}
          >
            Fruits
          </h2>
          <h2
            onClick={() => {
              this.setState({ toDisplay: 1 });
            }}
          >
            Animals
          </h2>
          <h2
            onClick={() => {
              this.setState({ toDisplay: 2 });
            }}
          >
            Places
          </h2>
        </div>
        <div className="solspics">
          {ImageCollection[this.state.toDisplay].map((e) => {
            return <img src={e} className="solsImg" />;
          })}
        </div>
      </div>
    );
  }
}

export default SolsNavbar;
