import styled from "styled-components";

export const LoaderBook = styled.div`
  border: 4px solid #001529;
  background: #e4cfa9;
  width: 60px;
  box-shadow: 5px 5px 10px grey;
  height: 45px;
  position: relative;
  perspective: 200px;
  border-radius: 2px;
  padding: 0;
  top: 150px;
  ::before {
    content: "~~--~~";
  }
  ::after {
    content: "~~--~~";
  }
`;

export const LoadingTitle = styled.h1`
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  top: 300px;
  position: absolute;
`;

export const Page = styled.div`
  display: block;
  border-radius: 2px;
  width: 30px;
  height: 45px;
  border: 4px solid #001529;
  border-left: 1px solid #001529;
  margin: 0;
  position: absolute;
  right: -4px;
  top: -4px;
  overflow: hidden;
  background: #e4cfa9;
  transform-style: preserve-3d;
  transform-origin: left center;
  z-index: 1;

  :nth-child(1) {
    animation: pageTurn 1s cubic-bezier(0, 0.39, 1, 0.68) 0s infinite;
    ::before {
      content: "~~--~~";
    }
    ::after {
      content: "~~--~~";
    }
  }
  :nth-child(2) {
    animation: pageTurn 1s cubic-bezier(0, 0.39, 1, 0.68) 0.5s infinite;
    ::before {
      content: "~~--~~";
    }
    ::after {
      content: "~~--~~";
    }
  }

  @keyframes pageTurn {
    0% {
      transform: rotateY(0deg);
    }
    20% {
      background: #a8997d;
    }
    40% {
      background: #c7b593;
      transform: rotateY(-180deg);
    }
    100% {
      background: #e4cfa9;
      transform: rotateY(-180deg);
    }
  }
`;
