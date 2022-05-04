import styled from "styled-components";

export const ListOfTech = styled.ul`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 22px;
    height: 50px;
    width: 90%;
    padding: 12px;

    background-color: var(--grey-4);
    border-radius: 4px;
    transition: all ease-in .3s;
  }
  li:hover {
    background-color: var(--grey-2);
  }

  li h3 {

    font-size: 15px;
    font-weight: 700;
    line-height: 24px;

    color: var(--grey-0);
  }

  li p {
    font-size: 12px;
    line-height: 22px;
    color: var(--grey-1);
    margin-right: 10px;
  }

  div {
    display: flex;
  }

`