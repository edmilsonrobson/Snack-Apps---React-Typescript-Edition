import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100vh;
  background: url("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80") bottom center;
`;

const Title = styled.h2`
  color: white;
  font-size: 30px;
  margin: 0;
  text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);
`;

const Content = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items:center;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 20px;
  margin: 2rem;
  text-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08);
  `;

class Home extends React.Component<any> {
  render() {
    return (
      <Wrapper>
        <Content>
          <Title>
            Toy Apps
            React + Typescript Edition
          </Title>

          <StyledLink to="/1">01 - Drum Kit</StyledLink>
        </Content>
      </Wrapper>
    );
  }
}

export default Home;