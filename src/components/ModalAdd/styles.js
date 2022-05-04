import styled from "styled-components";

export const WrapperBtnModal = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 33px;
  height: 33px;
  border-radius: 4px;
  background-color: var(--grey-3);
  cursor: pointer;
`

export const ModalStyles = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-3);
  width: 350px;
  padding-bottom:50px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  label {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    font-size: 10px;
    font-weight: 400;
    color: var(--grey-0);

  }

  input, select {
    width: 264px;
    height: 38px;
    margin-top: 20px;

    font-size: 13px;
    font-weight: 400;
    line-height: 21px;
    padding: 0 13px;

    background-color: var(--grey-2);
    border: solid 1px var(--grey-2);
    color: var(--grey-1);
  }

  .container__btn {
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
    width: 264px;
  }

  .container__btn button {
    
  }
  .label__wrapper {
    display: flex;
    justify-content: space-between;
  }

  .errors {
    color: var(--color-primary-Focus);
    text-align: center;
  }

  @media screen and (min-width:1440px) {
  
  width: 30vw;
  
}


`

export const SpanContainer = styled.span`

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--grey-2);

  width: 350px;
  height: 50px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  h2 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    color: var(--grey-0);

    margin-left: 20px;

  }

  button {
    width: 11px;
    height: 26px;
    border: none;
    background-color: transparent;
    color: var(--grey-1);

    margin-right: 20px;
  }

  @media screen and (min-width:1440px) {
  
  width: 30vw;
  
}

`

export const ButtonTask = styled.button`

  font-size: 13px;
  line-height: 21px;
  font-weight: 500;

  height: 38px;
  border: none;
  border-radius: 4px;
  color: var(--grey-0);

  background-color: var(--color-primary);
  color: var(--grey-0);
  width: 325px;

  :hover {
    background-color: var(--color-primary-Focus);
  }

`

