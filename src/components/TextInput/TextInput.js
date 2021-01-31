import styled from "styled-components";

const STextInputWrapper = styled.div`
  position: relative;
  padding-left: 4px;
  &::after {
    content: "";
    background-color: ${(props) => props.theme.colors.blue};
    height: 100%;
    width: 4px;
    position: absolute;
    left: 0;
    top: 0;
  }
  &:hover {
    svg {
      opacity: 1;
      fill: ${(props) => props.theme.colors.blue};
    }
    input {
      border: 1px solid ${(props) => props.theme.colors.blue};
      box-shadow: 0px 30px 40px rgba(19, 24, 33, 0.06);
    }
  }
`;
const STextInput = styled.input`
  width: 100%;
  min-width: 310px;
  padding: 23px 40px;
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  transition: box-shadow 0.3s ease, border 0.3s ease;
  &::placeholder {
    color: $grey;
    opacity: 1; // Firefox
  }
  &:focus {
    box-shadow: 0px 30px 40px rgba(19, 24, 33, 0.06);
    outline: 0;
  }
  @media (max-width: 768px) {
    padding: 19px 18px;
    min-width: unset;
  }
`;

const SArrowBtn = styled.button`
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  svg {
    width: 1.5rem;
    height: 0.875rem;
    fill: ${(props) => props.theme.colors.black};
    opacity: 0.3;
    transition: fill 0.3s ease, opacity 0.3s ease;
  }
  &:disabled {
    cursor: initial;
    opacity: 0.3;
  }
  @media (max-width: 768px) {
    right: 15px;
  }
`;

const TextInput = (props) => {
  const { type, name, placeholder, value, handleChange, disabled } = props;
  return (
    <STextInputWrapper>
      <STextInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <SArrowBtn type="submit" disabled={disabled}>
        <svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.7071 0.2929C17.3166 -0.0976334 16.6834 -0.0976334 16.2929 0.2929C15.9023 0.683403 15.9023 1.31658 16.2929 1.70708L20.5858 5.99999H1C0.447693 5.99999 0 6.44772 0 6.99999C0 7.55227 0.447693 7.99999 1 7.99999H20.5858L16.2929 12.2929C15.9023 12.6834 15.9023 13.3166 16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071L23.7071 7.70708C24.0977 7.31658 24.0977 6.6834 23.7071 6.2929L17.7071 0.2929Z" />
        </svg>
      </SArrowBtn>
    </STextInputWrapper>
  );
};

export default TextInput;
