import * as React from 'react';
import styled from "styled-components";

import KeyEventHandler from "./containers/KeyEventHandler";

interface IState {
  pressedKeys: string[],
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: url(https://images.unsplash.com/photo-1457523054379-8d03ab9fc2aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
`;

const Title = styled.h2`
  font-size: 44px;
  text-align: center;
  padding-top: 3rem;
  color: white;
  text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);
`;

const Text = styled.p`
  font-size: 30px;
  color: white;
  text-align: center;
  text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);
`;

const FooterText = styled.p`
  font-size: 12px;
  color: white;
  text-align: center;
  text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);
`;

const Link = styled.a`
  color: white;
`;

class DrumKit extends React.Component<any, IState> {
  state: IState = {
    pressedKeys: [],
  }

  handleKeyPress = (keyPress: IKeyPress, event: KeyboardEvent) => {
    event.preventDefault();

    const { keyName } = keyPress;

    this.setState((previousState) => ({
      pressedKeys: previousState.pressedKeys.concat(keyName)
    }))
  }

  get keysToListen() {
    return "ASDFGHJKL".split("");
  }

  render() {
    const { pressedKeys } = this.state;
      return (
      <Wrapper>
        <KeyEventHandler onKeyPress={this.handleKeyPress} keysToListen={this.keysToListen}/>
        <div>
          <Title>Drumkit</Title>
          { !!pressedKeys.length && <Text>{pressedKeys[pressedKeys.length-1]}</Text> }

          <FooterText>
            Inspired by Wes Bos's <Link href="https://javascript30.com/" target="_blank">30 Day Vanilla JS Course/Challenge</Link>
          </FooterText>
        </div>
      </Wrapper>
    );
  }
}

export default DrumKit;
