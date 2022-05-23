import styled from "styled-components";


const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: #000;
  width: 400px;
  padding: 20px;

  p{
     margin: 10px;
     font-weight: 500;
      color: var(--white);
      font-family: 'Montserrat', sans-serif;
      font-size: 0.9em;
   }

   a{
      width: 90%;
      color: rgba(32, 195, 161, 1);

      &:hover{
         text-decoration: underline
      }
   }
`;



export default Form;