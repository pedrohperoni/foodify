import styled from "styled-components";

const TopTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  background-color: #232325;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  color: var(--white);
  overflow: hidden;
  text-overflow: ellipsis;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    text-align: left;
  }

  p {
    color: var(--white);
    font-size: 1em;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: auto;
    max-height: 85%;
    margin-bottom: 10px;
  }
`;

export default TopTags;
