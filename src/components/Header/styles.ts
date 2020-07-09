import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: center;
  margin: auto;
  background: #ee4c77;

  img {
    display: flex;
    justify-content: left;
    margin: 20px auto;

    height: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100vh;
  max-width: 600px;

  button {
    border: none;
    background: transparent;
    margin-right: 25px;
  }
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;

  div {
    border-bottom: 2px solid #000;

    input {
      border: none;
      background: transparent;
      margin-bottom: 5px;
      color: #fff;

      &::placeholder {
        color: #991237;
      }
    }
  }

  svg {
    margin-left: 15px;
  }
`;

export const LogOutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
