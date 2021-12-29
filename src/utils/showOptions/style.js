import styled from "styled-components";

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.div`
  color: grey;
  display: flex;
  height: 62px;
  justify-content: center;
  align-items: center;
  transition: color 0.5s;

  :hover {
    color: white;
  }
  ::before {
    content: "";
    background: grey;
    margin: 0 16px 0 16px;
    width: 4px;
    height: 4px;
    border-radius: 5px;
  }
`;

export const TextOption = styled.div`
  margin-left: 4px;
  font-size: 14px;
`;

export const ImageOption = styled.div`
  display: flex;
  align-items: center;
`;
