import styled from "styled-components";
import successImg from "../../assets/imgs/ic_success.svg";

const SSubscribeForm = styled.div`
  width: 60%;
  margin: 0 auto;
  h2 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
  p {
    color: ${(props) => props.theme.colors.grey};
  }
  img {
    margin-bottom: 1.9rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.625rem;
    }
    p {
      font-size: 0.875rem;
    }
    img {
      margin-bottom: 2.5rem;
    }
  }
`;

const SubscribeSuccess = () => {
  return (
    <SSubscribeForm>
      <img src={successImg} />
      <h2>Thanks for subscribing!</h2>
      <p>
        You have successfully subscribed to our email listing. Check your email
        for the discount code.
      </p>
    </SSubscribeForm>
  );
};

export default SubscribeSuccess;
