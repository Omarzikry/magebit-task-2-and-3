import { Link } from "react-router-dom";
import styled from "styled-components";
import PineappleLogo from "../PineappleLogo/PineappleLogo";

const SNav = styled.nav`
  padding: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 4.125rem;
    padding: 0 1.25rem;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const SMenuLinks = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  li {
    margin-right: 1.875rem;
    &:last-child {
      margin-right: 0;
    }
    a {
      color: ${(props) => props.theme.colors.grey};
      text-decoration: none;
    }
  }
  @media (max-width: 768px) {
    a {
      font-size: 0.875rem;
    }
  }
`;

const Navigation = () => {
  return (
    <SNav>
      <PineappleLogo />
      <SMenuLinks>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">How It works</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </SMenuLinks>
    </SNav>
  );
};

export default Navigation;
