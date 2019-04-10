import React from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import IosMenu from "react-ionicons/lib/IosMenu";

class Header extends React.Component {
  render() {
    return (
      <Section>
        <NavBar>
          <Hamburger>
            <IosMenu color="white" fontSize="26px" />
          </Hamburger>
          <Logo>
            <Link to="/">Giphy Search</Link>
          </Logo>
        </NavBar>
      </Section>
    );
  }
}

const mapStateToProps = ({ giphy }) => {
  return { giphy };
};

export default connect(mapStateToProps)(Header);

const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 30px;
  position: sticky;
  background: #ff5f6d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff5f6d,
    #ffc371
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff5f6d,
    #ffc371
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const NavBar = styled.div`
  width: 100%;
  max-width: 1024px;
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Hamburger = styled.div`
  position: absolute;
  right: 0;
  top: 2px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Logo = styled.div`
  .wf-loading & > a {
    background: rgba(255, 255, 255, 0.3);
    color: transparent;
    border-radius: 4px;
  }

  .wf-active & > a {
    font-family: "PT Sans Narrow", sans-serif;
    color: white;
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    font-size: 21px;
    line-height: 30px;
    background: none;
  }
`;

const Nav = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
  }
`;

const NavItem = styled.div`
  & > a {
    display: inline-block;
    color: rgba(255, 255, 255, 0.7);
    line-height: 40px;
    padding: 0 20px;
    font-size: 13px;
    text-decoration: none;
    border-radius: 4px;
    margin: 5px 0 5px 5px;

    &:hover {
      color: white;
      background: rgba(255, 255, 255, 0.2);
    }
  }

  & > div {
    display: inline-block;
    color: rgba(255, 255, 255, 0.7);
    line-height: 40px;
    padding: 0 20px;
    font-size: 13px;
    text-decoration: none;
    border-radius: 4px;
    margin: 5px 0 5px 5px;
  }
`;
