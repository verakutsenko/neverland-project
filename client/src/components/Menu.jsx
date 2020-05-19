// Menu.js
import React from 'react';
import { StyledMenu } from './StyledMenu';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <div className="mobile-menu-logo-container">
        <img className="mobile-menu-logo" src="/images/neverland_monologo_black.png" />
      </div>
      <a href="/story">
        Our Story 
      </a>
      <a href="#plants">
        Plants
        </a>
      <a href="/faq">FAQ<span class="sr-only">(current)</span></a>
    </StyledMenu>
  )
}
export default Menu;