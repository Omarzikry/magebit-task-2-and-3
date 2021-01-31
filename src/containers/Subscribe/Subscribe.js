import { useState } from "react";
import styled from "styled-components";
import Socials from "../../components/Socials/Socials";
import SubscribeSuccess from "../../components/SubscribeSuccess/SubscribeSuccess";
import SubscribeForm from "../SubscribeForm/SubscribeForm";

const SSubscribe = styled.section`
  width: 30vw;
  min-width: 680px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    background: linear-gradient(180deg, #ffffff 0%, #f2f5fa 100%);
    padding: 30px 20px;
    width: 90%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 2rem;
    line-height: 1.4em;
    padding: 0 8.75rem;
    margin-bottom: 0.93rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 0;
    }
  }
  h3 {
    color: ${(props) => props.theme.colors.grey};
    line-height: 1.4em;
    padding: 0 8.75rem;
    margin-bottom: 3.125rem;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 768px) {
      margin-bottom: 1.25rem;
      font-size: 0.875rem;
      padding: 0;
    }
  }
`;

const SSeparator = styled.div`
  width: 60%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.lightGrey};
  margin: 3.125rem auto;

  @media (max-width: 768px) {
    width: 100%;
    margin: 1.25rem auto;
  }
`;

const Subscribe = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SSubscribe>
      {!submitted && (
        <>
          <h1>Subscribe to newsletter</h1>
          <h3>
            Subscribe to our newsletter and get 10% discount on pineapple
            glasses.
          </h3>
          <SubscribeForm setSubmitted={setSubmitted} />
        </>
      )}

      {submitted && <SubscribeSuccess />}

      <SSeparator />

      <Socials />
    </SSubscribe>
  );
};

export default Subscribe;
