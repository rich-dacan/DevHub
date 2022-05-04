import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

`
export const MainContent = styled.main`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 73px;

  height: 100vh;
  max-width: 1440px;

  .header__mainCard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 90vw;

    margin-bottom: 28px;

  }
  .header__mainCard h2 {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;

    color: var(--grey-0);
  }
  .header__mainCard button {
    background-color: transparent;
    color: var(--grey-0);

    border: none;
    width: 20px;
  }

  .main__card__container {
    background-color: var(--grey-3);
    height: 720px;
    width: 90vw;
    border-radius: 4px;
    overflow-y: scroll;
    padding-bottom: 20px;
  }

  .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 520px;
  }
  .empty h3 {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px ){

    .header__mainCard button {

    margin-left: 300px;
   
    }
    .main__card__container {
    
      height: 720px;

      width: 60vw;

    }
    .header__mainCard {
     
      justify-content: space-around;
    }

  }


`

