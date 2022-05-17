import styled from "styled-components";
import background from "../../assets/background.jpg"


const AuthPageContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  margin-top: 80px;
  background-color: #fff;
  background: linear-gradient(90deg, rgba(34,32,33,0) 0%, rgba(34,32,33,1) 100%), url(${background});
  background-repeat: no-repeat;
  background-size:58%;

  @media (max-width: 768px) {
     align-items: center;
     background: url(${background});
     background-size: cover;
  }
`;

export default AuthPageContainer;