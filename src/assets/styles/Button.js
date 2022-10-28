import styled from "styled-components";
import { primeryColor } from "../../constants/colors";

export const Button = styled.button`
  width: 310px;
  height: 60px;
  border-radius: 8px;

  background-color: ${primeryColor};
  color: white;
  margin: 17px 0;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 16px;
`;