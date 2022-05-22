import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--grey-4);

  a {
    width: 98vw;
    text-align: center;
    text-decoration: none;
    
    padding: 30px;
    
    border-top: #000 solid 5px;
    background-color: var(--grey-3);
    box-shadow: 0px 0px 10px 5px var(--color-primary);
    color: var(--grey-0);
    
    font-size: 1rem;
    font-weight: 700;
    opacity: .5;
    transition: all ease-in .5s;
  }
    a:hover {
      background-color: #282C34;
      color: #fff;
      opacity: 1;
    }
    
  p {
    text-align: center;
    margin: 50px auto;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    opacity: .5;
    color: var(--grey-4);
  }
    p:hover {
      opacity: 1;
      cursor: pointer;
    }
`