import styled from "styled-components";

export const FormLoginStyles = styled.form`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--grey-3) ;
  padding: 20px;
  border-radius: 4px;

  h2 {
    color: var(--grey-0);
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;

    margin-top: 10px;
  }

  label {
    display: flex;
    flex-direction: column;

    font-size: 10px;
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
    border: solid 1px var(--grey-0);
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
    font-size: 10px;
    font-weight: 600;
    line-height: 14px;
    color: var(--grey-1);

  }

  .errors {
    color: var(--color-primary-Focus);
    text-align: center;
  }

`

export const SpanLogo = styled.span`
  margin-bottom: 20px;

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

  p {
 
    margin-top: 5px;
    font-size: .8rem;


  }
  
  a {
    text-decoration: none;
    color: var(--color-primary);
  }

`