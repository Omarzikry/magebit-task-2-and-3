import styled from "styled-components";
import DesktopPineappleImage from "../DesktopPineappleImage/DesktopPineappleImage";
import Navigation from "../Navigation/Navigation";

const SHeader = styled.header`
  width: 30vw;
  min-width: 680px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
  }
`;

const Header = () => {
  return (
    <SHeader>
      <Navigation />
      <DesktopPineappleImage />
    </SHeader>
  );
};

export default Header;
