import styled from "styled-components";

const SErrorMessage = styled.div`
  padding-top: 1rem;
  p {
    color: ${(props) => props.theme.colors.red};
    font-size: 0.875rem;
  }
`;
const ErrorMessage = (props) => {
  const { error } = props;
  return (
    <>
      {error && (
        <SErrorMessage>
          <p>{error}</p>
        </SErrorMessage>
      )}
    </>
  );
};

export default ErrorMessage;
