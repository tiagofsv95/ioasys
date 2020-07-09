import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #ee4c77;

  div {
    display: flex;
    align-items: center;
    padding-left: 24px;
    max-width: 600px;
  }
`;

export const BackButton = styled.button`
  border: none;
  margin-top: 5px;
  background: transparent;
`;

export const HeaderTitle = styled.div`
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-top: 24px;
  background: #fff;
`;

export const Image = styled.div`
  max-width: 550px;
  min-width: 300px;
  height: 300px;
  background: green;
`;

export const Description = styled.div`
  color: #8d8c8c;
  margin-top: 16px;
`;
