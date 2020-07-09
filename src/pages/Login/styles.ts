import styled, { keyframes, css } from 'styled-components';

interface InputContentProps {
  isErrored: boolean;
}

interface LoginButtonProps {
  isErrored: boolean;
}

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isLoading ? 0.5 : 1.0)};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 200px;
`;

export const Loading = styled.div`
  position: absolute;
  opacity: 1;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }
  to {

    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromTop} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    align-items: center;

    > img {
      width: 320px;
    }

    h1 {
      margin-top: 50px;
      margin-bottom: 24px;
    }

    h3 {
      margin-bottom: 24px;
    }
  }
`;

export const ErrorDiv = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  height: 20px;
  padding: none;

  p {
    color: #ee4c77;
    font-size: 12px;
    padding: 0;
  }
`;

export const InputContent = styled.div<InputContentProps>`
  border-bottom: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
    flex: 1;
    border: 0;
    padding-left: 8px;
    background: transparent;
    color: #383743;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const LoginButton = styled.button<LoginButtonProps>`
  background: #57bbbc;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 80%;
  font-weight: 500;
  margin-top: 24px;
  transition: background-color 0.2s;

  ${(props) =>
    props.isErrored &&
    css`
      background: #748383;
    `}
`;
