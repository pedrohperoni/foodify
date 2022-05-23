import styled from "styled-components";

export const References = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  h1 {
    color: var(--black);
    text-align: left;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
  }

  img {
    height: 30px;
    width: auto;
    border-radius: 3px;
  }
`;
