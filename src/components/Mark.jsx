import styled from "styled-components";

export default styled.span`
  position: relative;
  &:after {
    position: absolute;
    left: 25%;
    bottom: -0.2em;
    height: 2px;
    content: "";
    width: 50%;
    background-color: #fff;
    display: block;
  }
`;
