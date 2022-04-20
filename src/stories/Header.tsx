import React from 'react';

import './header.css';
import '../styles/Index.scss';
import { Button } from './Button';
import { Nav } from 'react-bootstrap';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <div className="sidebar-dark">
    <Nav className='bg-gradient-primary ' style={{ height: "500px" }} >
      <Nav.Item>
        <Nav.Link className='nav-link' href="/home">Active</Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
)
