import styled from "styled-components";

const HomeContainer = styled.main`
  padding: 100px 50px;
  display: flex;
  justify-content: center;
  gap: 20px;

  @media(max-width: 1200px){
   flex-direction: column;
  }
`;

export default HomeContainer;
