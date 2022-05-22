import styled from "styled-components";

export const FormLoginStyles = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-3);
  box-shadow: 0px 5px 55px 5px var(--grey-2);
  border: 1px solid var(--grey-2);

  padding: 20px;
  border-radius: 4px;

  h2 {
    color: var(--grey-0);
    font-size: 1rem;
    font-weight: 700;
    line-height: 22px;

    margin-top: 10px;
  }

  label {
    display: flex;
    flex-direction: column;

    font-size: .8rem;
    font-weight: 400;
    color: var(--grey-0);

    margin-top: 18px;

  }

  input {
    margin-top: 23px;
    width: 265px;
    height: 38px;
    padding-left: 15px ;

    color: var(--grey-0);
    background-color: var(--grey-2);
    border: solid 1px var(--grey-1);
    border-radius: 4px;
  }

  .input__wrapper {
    display: flex;
  }

  .input__wrapper button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--grey-0);
    background-color: transparent;
    border: none;
    width: 25px;

    margin-left: -30px;
    margin-top: 20px;
  }

  p {
    margin-top: 28px;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    color: var(--grey-1);

  }

  .errors {
    color: var(--color-primary-Focus);
    text-align: center;
    font-size: .8rem;
  }

`

export const SpanLogo = styled.span`
  margin-bottom: 20px;
  /* color: var(--color-primary-Focus); */
  border: 1px solid var(--color-primary-Focus);
  border-radius: 4px;
  background-color: var(--grey-3);
  padding: 5px;
  margin-bottom: 50px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 10px 10px var(--color-primary-Focus);
  
  h1 {
    font-family: 'Inter', sans-serif;
  }
`
export const Button = styled.button`

  background-color: ${props => props.login ? 'var(--color-primary)' : 'var(--grey-2)'};
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;

  border: none;
  border-radius: 4px;
  width: 260px;
  height: 39px;

  margin-top: 28px;

  transition: all ease-in .3s;

  :hover {
    background-color: ${props => props.login ? 'var(--color-primary-Focus)' : 'var(--grey-4)'};
  }

`
export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  p {
 
    margin-top: 5px;
    font-size: .8rem;
    text-align: center;

  }
  
  a {
    text-decoration: none;
    color: var(--color-primary);
  }

`