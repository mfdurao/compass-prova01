import styled from "styled-components";

export const HeaderStyle = styled.nav`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: #001529;
  color: white;
  font-size: 14px;
`;

export const Logo = styled.span`
  color: white;
  width: 120px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-left: 50px;
  background: #334454;
  transition: all 0.5s;

  :hover {
    height: 48px;
    border-radius: 15px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 32px;
  margin-right: 15px;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
  ::placeholder {
    color: #bfbfbf;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  transition: all 0.5s;

  ::before {
    content: "";
    background: grey;
    width: 4px;
    height: 4px;
    border-radius: 5px;
  }

  .autocomplete-input {
    position: relative;
    margin: 16px;
    width: 300px;
    height: 32px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    text-decoration: none;
    cursor: pointer;
    z-index: 1;
  }

  .datalist-items {
    background-color: white;
    top: 53px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px grey;
    position: absolute;
    left: 16px;
    width: 300px;
    align-items: center;
    justify-content: center;
    color: grey;
    min-height: 40px;
    max-height: 250px;
    overflow-y: scroll;
    animation: fadeIn 0.5s;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
