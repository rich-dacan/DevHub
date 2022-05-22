import styled from "styled-components";

export const HeaderStyles = styled.header`

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: sticky;
  top: 0;
  height: 72px;

  box-shadow: 0px 10px 10px var(--color-primary-Focus);

  span {
    display: flex;
    align-items: center;
  }

  h1 {
    font-family: 'Inter', sans-serif;
    color: var(--color-primary-Focus);
  }

  .colorHub {
    color: var(--grey-1);
  }

`