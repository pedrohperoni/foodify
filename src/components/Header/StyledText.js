import styled from "styled-components";

const StyledText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${(props) => (props.color === "cyan" ? "#00C39A" : "#fff")};
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledText;
