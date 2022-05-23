import styled from "styled-components";

const HeaderUser = styled.div`
  height: 45px;
  border-radius: 100px;
  background-color: #232325;
  display: flex;
  align-items: center;
  justify-content: left !important;
  padding: 4px;
  gap: 10px !important;


p{
   margin-right: 6px;
}

  a {
    height: 37px;
    width: 37px;
    border-radius: 50px;
  }

  img {
    height: 100% !important;
    width: 100% !important;
    object-fit: cover !important;
    border-radius: 50px;
  }
`;

export default HeaderUser;
