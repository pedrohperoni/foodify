import styled from "styled-components";

const Sidebar = styled.div`
   width: 20%;
   display: flex;
   align-items: center;
   flex-direction: column;
   border-radius:10px;

   @media(max-width: 1200px){
   width: 100%;
  }
`  

export default Sidebar