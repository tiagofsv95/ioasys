import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const CompanyDiv = styled.div`
  display: flex;
  margin-top: 20px;
  background: #fff;
  height: 100px;
  width: 95%;
  max-width: 600px;
`;

export const CompanyImg = styled.div`
  display: flex;
  height: 100px;
  width: 190px;

  img {
    margin: 10px;
    height: 80px;
    width: 120px;
    background: red;
  }

  div {
    display: flex;
    margin: 10px;
    height: 80px;
    width: 160px;
    background: red;

    p {
      font-size: 50px;
      color: #fff;
      margin: auto;
    }
  }
`;

export const CompanyInfo = styled.div``;
