import React from 'react';

import styled from 'styled-components';

const NavbarStyle = styled.nav`
  background-color: #ef5350;
`;

const Navbar = () => {
  return (
    <div>
      <NavbarStyle className="navbar navbar-expand-md navbar-dark fixed-top">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
          href="#"
        >
          Pokedex
        </a>
      </NavbarStyle>
    </div>
  );
};

export default Navbar;
