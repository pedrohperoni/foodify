import styled from "styled-components";

const TopTrend = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  p{
     color: var(--white);
     text-transform: uppercase;
     font-size:1.25em;
     max-width:100%;
     overflow: hidden;
     text-overflow: ellipsis;
     margin-bottom: 5px;
  }

  img {
    border-radius: 10px;
   width: 100%;
   height: auto;
   max-height: 85%;
  }
`;

export default TopTrend;
