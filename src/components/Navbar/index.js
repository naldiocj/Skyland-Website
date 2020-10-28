import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from './styles';

import logo from '../../assets/images/logo.png'

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src={logo} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Sobre Nós
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Projectos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="events"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Eventos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="property-manager"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Gestão de Imoveis
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="newsletters"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact={true}
                  offset={-80}
                >
                  Newsletters
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
