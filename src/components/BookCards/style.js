import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  border-radius: 2px;
  flex-direction: row;
  flex-wrap: wrap;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  background: white;
  height: 380px;
  width: 200px;
  margin: 50px 10px 10px 10px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.025);
  transition: all 0.2s;

  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 225px;
  align-self: flex-start;
`;

export const Description = styled.div`
  position: relative;
  margin: 0;
  top: -25px;
  height: 105px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  margin: auto;
  font-weight: 600;
  padding-top: 35px;
  text-align: center;
  max-width: 20ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  padding-top: 14px;
  margin: auto;
  max-width: 20ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  color: grey;
`;

export const BtnContainer = styled.div`
  background: white;
  width: 200px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
`;

export const Btn = styled.button`
  color: black;
  background-color: white;
  padding: 13px;
  text-align: left;
  font-size: 14px;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.07);
  width: 100%;

  transition: all 1s;

  &:hover {
    background: lightblue;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  min-width: 200px;
  z-index: 1;
  top: 40px;
  left: -1px;
  animation: fadeIn 0.3s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Dropdown = styled.div`
  display: flex;
  align-self: flex-end;
  width: 200px;
  height: 50px;
  position: absolute;

  transition: all 0.5s;

  :hover ${DropdownContent} {
    display: flex;
  }
  :hover {
    color: lightblue;
  }
`;

export const DropdownHover = styled.div`
  font-size: 20px;
  background: rgba(0, 0, 0, 0.025);
  width: 201px;
  height: 50px;
  align-self: flex-end;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  border-left: none;
  border-bottom: none;
  border-right: none;
  cursor: pointer;
`;

export const DropDownSearch = styled(DropdownHover)`
  font-size: 14px;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const BookMoved = styled(DropDownSearch)`
  background: #334454;
  color:white;
  border:none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  animation: fadeIn 0.8s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
`;

export const SideOptionContent = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  width: 180px;
  z-index: 1;
  top: 0;
  left: 98px;
  padding-left: 8px;
  transform: scale(0.95);
  animation: fadeIn 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SideOption = styled.div`
  color: black;
  font-size: 14px;
  background-color: white;
  padding: 13px;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.05);

  transition: all 1s;

  &:hover {
    background: lightblue;
  }
  &:hover ${SideOptionContent} {
    display: flex;
  }
`;
