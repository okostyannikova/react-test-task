import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => <Circle />;

const rotate = keyframes`
  100% {transform: rotate(360deg)}
`;

const Circle = styled.span`
  display: block;
  margin: 0 auto;
  width: 40px;
  height: 40px;
  background: transparent;
  box-sizing: border-box;
  border: 3px solid #24292e21;
  border-top-color: #24292e;
  border-radius: 100%;
  animation: ${rotate} 0.8s ease-out infinite;
`;

export default Loader;
