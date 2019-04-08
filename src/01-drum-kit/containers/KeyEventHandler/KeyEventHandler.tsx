import * as React from "react";
import { matchCodeToKeyPress } from "./constants";

interface IProps {
  onKeyPress: (keyPress: IKeyPress, event: any) => void,
  keysToListen?: string[],
  keysToIgnore?: string[],
}

class KeyEventHandler extends React.Component<IProps> {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyEvent, false);
  }

  handleKeyEvent = (event: KeyboardEvent) => {
    const { onKeyPress, keysToListen, keysToIgnore } = this.props;

    const keyPress = matchCodeToKeyPress(event.keyCode);
    const { keyName } = keyPress;

    const isIgnored = (keysToListen && !keysToListen.includes(keyName)) || (keysToIgnore && keysToIgnore.includes(keyName));
    if (isIgnored) {
      return;
    }

    onKeyPress(keyPress, event);
  }

  render() {
    return null;
  }

}

export default KeyEventHandler;
