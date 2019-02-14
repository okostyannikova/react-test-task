import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <Title>Error :(</Title>
      <p>We are working hard to resolve it</p>
      <p>
        Please try again later or contact{" "}
        <a href="mailto:support@gmail.com">support@gmail.com</a>
      </p>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  text-align: center;
  font-size: 18px;
`;

const Title = styled.p`
  font-size: 72px;
  margin-bottom: 30px;
`;
