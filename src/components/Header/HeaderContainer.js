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

  div{
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
  }

  span{
     height: 40px;
     width: 20px;
     border-bottom-right-radius: 50px;
     border-top-right-radius: 50px;
     background-color:var(--white);
  }
`;

export default HeaderContainer;
