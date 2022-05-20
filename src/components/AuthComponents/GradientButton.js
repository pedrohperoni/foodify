import styled from "styled-components";

const GradientButton = styled.button`
  width: 90%;
  height: 57px;
  border-radius: 5px;

  border: solid 2px transparent;
  background: var(--dark-gray);
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, rgba(32, 195, 161, 1), rgba(233, 205, 112, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px var(--dark-gray) inset;

  color: var(--white);
  padding: 0 20px;
  margin-top: 13px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 0.9em;

  display: flex;
  align-items: center;

  cursor: pointer;
  &:hover {
    box-shadow: none;
    background: rgba(32, 195, 161, 1);
    color: #000;

    a{
       color: #000;
    }
  }

  a {
    text-decoration: none;
    color: var(--white);
  }

  svg{
     margin-right: 6px;
  }
`;

export default GradientButton;
