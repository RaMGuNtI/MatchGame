import styled from 'styled-components';

export const GamePageCSS = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/match-game-bg.png');
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PositioningGameEnd = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GameEndCard = styled.div`
  width: 90%;
  max-width: 500px;
  height: auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TrophyBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const GameEndCardContent = styled.div`
  position: absolute;
  text-align: center;
  top: 70%;
  left: 47%;
  z-index: 3;
`;

export const ScoreImgCard = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;

export const TrophyPic = styled.img`
  max-height: 200px;
  width: auto;
  display: block;
`;

export const ProbImage = styled.img`
  max-height: 300px;
  width: auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

export const NavBarSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #2c0e3a;
  color: white;
`;

type WebLogoType = {
  height: string;
};

export const WebLogo = styled.img<WebLogoType>`
  height: ${(props) => props.height};
`;

export const RightPartNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimerSection = styled(RightPartNav)`
  flex-direction: row;
`;

export const TimerLogo = styled.img`
  height: 30px;
  margin-right: 5px;
  margin-left: 15px;
`;

export const SolutionNavBar = styled.div`
  display: flex;
  justify-self: center;
  margin: 10px;
  color: white;
  > * {
    cursor: pointer;
    margin-right: 15px;
    font-family: sans-serif;
  }
`;

export const SolutionImagesBox = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  gap: 10px;
`;

export const SolImage = styled.img`
  height: 100px;
  max-width: 100px;
`;
