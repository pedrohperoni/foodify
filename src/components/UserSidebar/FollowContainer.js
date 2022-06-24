import styled from "styled-components";

const FollowContainer = styled.div`
width: 100%;
border-top: 1px solid var(--light-gray);
border-bottom: 1px solid var(--light-gray);
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
height: 50px;
margin-bottom: 10px;

span{
   height: 80%;
   border-left: 1px solid var(--light-gray);
}

p{
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   font-size: 0.8em;
   font-weight: 300;

   strong{
      margin-bottom: 5px;
      font-weight: 500;
   }
}
`

export default FollowContainer