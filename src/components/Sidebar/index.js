import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from './styles';

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Sobre Nós
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projectos
          </SidebarLink>
          <SidebarLink to="events" onClick={toggle}>
            Eventos
          </SidebarLink>
          <SidebarLink to="property-maneger" onClick={toggle}>
            Gestão de Imoveis
          </SidebarLink>
          <SidebarLink to="newsletters" onClick={toggle}>
            Newsletters
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
