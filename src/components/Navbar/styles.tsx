import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";

interface ICloseSidebarContainer {
  active: boolean;
}
export const CloseContainerSidebar = styled.div<ICloseSidebarContainer>(
  (props) => css`
    z-index: 10;
    ${props.active &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background-color: #00000077;
    `}
  `
);

export const ContainerSidebar = styled.div<{ transform: string }>(
  (props) => css`
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 240px;
    height: 100vh;
    overflow-y: auto;
    background: #151515;
    transition: all 0.3s;
    transform: translateX(${props.transform});
  `
);
export const MenuIcon = styled(FaBars)`
  color: #fff;
  display: block;
  font-size: 45px;
  padding: 5px;
  cursor: pointer;
  align-self: center;
  margin-left: 30px;
`;

export const Topbar = styled.div`
  background-color: black;
  width: 100vw;
  height: 100px;
  position: absolute;
  top: 0;
  display: flex;
`;

export const ItensContainer = styled.div`
  margin-top: 50px;
`;

export const Title = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #979797;
  margin-left: 10px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 10px 5px 10px;
  padding: 14px 10px;
  width: 200px;

  &:hover {
    background: #454545;
    border-radius: 10px;
    ${Title} {
      color: #fff;
    }
  }
`;

export const Div = styled.div``;
