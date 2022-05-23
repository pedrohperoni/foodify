import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 50px;
  top: 0;
  color: var(--white);
  overflow: hidden;
  z-index: 100;
  background-color: var(--background);

  a {
    text-decoration: none;
    color: var(--white);

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    color: rgba(32, 195, 161, 1);
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  span {
    height: 40px;
    width: 20px;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    background-color: rgba(32, 195, 161, 1);
  }


`;

export default HeaderContainer;
