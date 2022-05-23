import styled from "styled-components";

const HeaderUser = styled.div`
  height: 50px;
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
    height: 40px;
    width: 40px;
    border-radius: 50px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
`;

export default HeaderUser;
