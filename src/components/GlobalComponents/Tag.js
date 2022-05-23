import styled from "styled-components";

const Tag = styled.span`
  height: 25px;
  background-color: var(--background);
  border-radius: 30px;
  padding: 0 3px 0 9px;
  margin: 3px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  &:hover {
     opacity:0.7
  }

  svg{
     margin-left: 3px;
  }
  
`;

export default Tag;
