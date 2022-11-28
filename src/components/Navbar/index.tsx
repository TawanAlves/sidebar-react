import React, { useState } from "react";
import {
  Button,
  CloseContainerSidebar,
  ContainerSidebar,
  Div,
  ItensContainer,
  MenuIcon,
  Title,
  Topbar,
} from "./styles";

import Icon from "../../assets/img/info.svg";

const itens = [
  {
    key: "Home",
    label: "Início",
    icon: Icon,
  },
  {
    key: "Products",
    label: "Produtos",
    icon: Icon,
  },
  {
    key: "About",
    label: "Sobre ",
    icon: Icon,
  },
  {
    key: "Contact",
    label: "Contato ",
    icon: Icon,
  },
];

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
        <ContainerSidebar transform={translate}>
          <ItensContainer>
            {itens.map((item) => (
              <Button key={item.key}>
                <Div> <img src={item.icon} alt="icon" /> </Div>
                <Title>{item.label}</Title>
              </Button>
            ))}
          </ItensContainer>
        </ContainerSidebar>
      </CloseContainerSidebar>
    </>
  );
};

export default Navbar;
