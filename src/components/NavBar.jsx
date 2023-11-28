import React from "react";
import { NavLink } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import styled from "styled-components";

const NavBarStyle = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
  }

  li {
    display: inline-block;
    border-radius: 8px;
    transition: 0.3s ease background-color;
    &:hover {
      background-color: var(--deep-dark);
    }

    a {
      display: inline-block;
      font-family: "RobotoMono Regular";
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }

    .active {
      color: var(--white);
    }
  }

  .open-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }

  .nav-items .close-menu-icon {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;

    .hide-items {
      transform: translateY(calc(-100% - 1rem));
    }

    .open-menu-icon {
      display: block;
    }

    .nav-items {
      transition: 0.5s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: 1rem;

      .close-menu-icon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;

        * {
          pointer-events: none;
        }
      }

      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

function NavBar() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <NavBarStyle>
      <div
        className="open-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? "nav-items hide-items" : "nav-items"}>
        <div
          className="close-menu-icon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sobre-mi"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Sobre mi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/proyectos"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </NavBarStyle>
  );
}

export default NavBar;
