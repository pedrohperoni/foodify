import styled from "styled-components";


const AuthPageContainer = styled.div`

  width: 100vw;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: row;
  flex-wrap: wrap;
  color: #fff;
  margin-top: 80px;

  span{
     font-size: 2.5em;
     font-weight: bold;
  }

  @media (max-width: 768px) {
     align-items: center;
     background-size: cover;
  }
`;

export default AuthPageContainer;