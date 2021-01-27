import { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../components/Checkbox/Checkbox";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Socials from "../../components/Socials/Socials";
import TextInput from "../../components/TextInput/TextInput";

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

const SInputWrapper = styled.div`
  position: relative;
  left: 100px;
  margin-bottom: 3.125rem;
  @media (max-width: 768px) {
    left: unset;
    margin-bottom: 1.25rem;
  }
`;

const SCheckboxWrapper = styled.div`
  margin-left: 8.75rem;
  @media (max-width: 768px) {
    margin-left: unset;
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
  const [values, setValues] = useState({
    email: "",
    termsCheckbox: false,
  });

  const [emailError, setEmailError] = useState(undefined);
  const [termsError, setTermsError] = useState(undefined);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const isCheckbox = e.target.hasOwnProperty("checked");
    setValues({
      ...values,
      [name]: type !== "checkbox" ? value : checked,
    });
    if (type === "email") {
      setEmailError(validateEmail(value));
      return;
    }
    if (type === "checkbox" && checked === false) {
      setTermsError("You must accept the terms and conditions");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (/^[a-zA-Z0-9_.+-]+@(?:[a-zA-Z0-9-]+)\.co$/.test(email)) {
      return "We are not accepting subscriptions from Colombia emails";
    }
    if (emailRegex.test(email)) {
      return null;
    }
    if (email.trim() === "") {
      return "Email is required";
    }
    return "Please enter a valid email";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <SSubscribe>
      <h1>Subscribe to newsletter</h1>
      <h3>
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </h3>
      <form onSubmit={handleSubmit}>
        <SInputWrapper>
          <TextInput
            type="email"
            name="email"
            placeholder="Type your email address here…"
            value={values.email}
            handleChange={handleChange}
          />
          <ErrorMessage error={emailError} />
        </SInputWrapper>
        <SCheckboxWrapper>
          <Checkbox
            name="termsCheckbox"
            handleChange={handleChange}
            isChecked={values.termsCheckbox}
          />
          <ErrorMessage error={termsError} />
        </SCheckboxWrapper>
      </form>

      <SSeparator />

      <Socials />
    </SSubscribe>
  );
};

export default Subscribe;
