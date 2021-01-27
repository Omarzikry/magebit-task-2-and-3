import styled from "styled-components";
import pineappleImg from "../../assets/imgs/image_summer.png";
const SPineappleImageContainer = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  height: 100vh;
  width: 70vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopPineappleImage = () => {
  return (
    <SPineappleImageContainer>
      <img
        src={pineappleImg}
        alt="summer is beautiful with pineapple buy some (;"
      />
    </SPineappleImageContainer>
  );
};

export default DesktopPineappleImage;
