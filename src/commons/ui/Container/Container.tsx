import * as React from "react";
import styled from "styled-components"

interface IProps {
  children?: React.ReactNode,
  backgroundImage: string,
}

interface IContainerWrapper {
  backgroundImage: string,
}

const ContainerWrapper = styled.div<IContainerWrapper>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
  ${({ backgroundImage}) => `background: url(${backgroundImage}) bottom center;`}
`;

class Container extends React.Component<IProps> {
  render() {
    const { children, backgroundImage } = this.props;
    return (
      <ContainerWrapper backgroundImage={backgroundImage}>
        {children}
      </ContainerWrapper>
    )
  }
}

export default Container;