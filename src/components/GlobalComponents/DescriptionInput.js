import styled from "styled-components";

const DescriptionInput = styled.input`
  border-radius: 5px;
  width: 100%;
  background-color: var(--dark-gray);
  border: 0;
  color: var(--white);
  font-size: 0.9em;
  font-family: "Montserrat", sans-serif;

  &:focus {
    outline: none;
    text-decoration: underline;
  }
  ::placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    color: var(--white);
  }
`;

export default DescriptionInput;
