import { Link } from "react-router-dom";
import styled from "styled-components";
import bigLogo from "../../assets/imgs/pineapple-logo.svg";
import smallLogo from "../../assets/imgs/pineapple.svg";

const SBigLogo = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

const SSmallLogo = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const PineappleLogo = () => {
  return (
    <Link to="#">
      <SBigLogo src={bigLogo} alt="pineapple company logo" />
      <SSmallLogo src={smallLogo} alt="pineapple company logo" />
    </Link>
  );
};

export default PineappleLogo;
