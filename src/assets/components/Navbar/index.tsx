import React, { useState } from "react";
import {
  CloseContainerSidebar,
  ContainerSidebar,
  MenuIcon,
  Topbar,
} from "./styles";

// import { Container } from './styles';

const Navbar: React.FC = () => {
  const [renderSidebar, setRenderSidebar] = useState(false);
  const [translate, setTranslate] = useState("-240px");

  const showSidebar = () => {
    const newState = !renderSidebar;
    newState ? setTranslate("0") : setTranslate("-240px");
    setRenderSidebar(newState);
  };

  return (
    <>
      <Topbar>
        <MenuIcon onClick={showSidebar} />
      </Topbar>
      <CloseContainerSidebar active={renderSidebar} onClick={showSidebar}>
        <ContainerSidebar transform={translate}></ContainerSidebar>
      </CloseContainerSidebar>
    </>
  );
};

export default Navbar;
