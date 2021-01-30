import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Checkbox from "../../components/Checkbox/Checkbox";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import TextInput from "../../components/TextInput/TextInput";

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

const SubscribeForm = (props) => {
  const { setSubmitted } = props;
  const [values, setValues] = useState({
    email: "",
    termsCheckbox: false,
  });
  const [emailError, setEmailError] = useState();
  const [termsError, setTermsError] = useState();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
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

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("email", values.email);
    formData.append("timeStamp", e.timeStamp);

    axios({
      method: "post",
      url: "/api/contacts.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        //handle success
        setSubmitted(true);
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
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

  return (
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
  );
};

export default SubscribeForm;
