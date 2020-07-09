import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { BsEye, BsEyeFill } from 'react-icons/bs';
import { IoMdAlert } from 'react-icons/io';
import { CircularProgress } from '@material-ui/core';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo-home.svg';
import emailIcon from '../../assets/ic-email.svg';
import lockIcon from '../../assets/ic-cadeado.svg';

import {
  Container,
  Content,
  Loading,
  AnimationContainer,
  InputContent,
  ErrorDiv,
  LoginButton,
} from './styles';

interface DataForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [hidePasssword, setHidePasssword] = useState(true);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const history = useHistory();

  const onChangeEmail = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setEmail(event.currentTarget.value);
      setError(false);
    },
    [],
  );

  const onChangePassword = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setPassword(event.currentTarget.value);
      setError(false);
    },
    [],
  );

  const handleSubmit = useCallback(
    async (data: DataForm) => {
      setLoading(true);
      try {
        await signIn({
          email: data.email,
          password: data.password,
        });

        setLoading(false);

        history.push('/main');
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    },
    [history, signIn],
  );

  const toggleHidePassword = useCallback(() => {
    setHidePasssword(!hidePasssword);
  }, [hidePasssword]);

  return (
    <Container isLoading={loading}>
      <Content>
        {loading && (
          <Loading>
            <CircularProgress />
          </Loading>
        )}
        <AnimationContainer>
          <form>
            <img src={logo} alt="ioasys" />

            <h1>BEM-VINDO AO EMPRESA</h1>

            <h3>
              Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc
              accumsan.
            </h3>

            <InputContent isErrored={!!error}>
              <img alt="email" src={emailIcon} />
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={onChangeEmail}
              />
              {error && <IoMdAlert size={20} color="#c53030" />}
            </InputContent>

            <InputContent isErrored={!!error}>
              <img alt="password" src={lockIcon} />
              <input
                name="password"
                type={hidePasssword ? 'password' : 'text'}
                placeholder="Senha"
                value={password}
                onChange={onChangePassword}
              />
              {hidePasssword ? (
                <BsEye size={20} onClick={toggleHidePassword} />
              ) : (
                <BsEyeFill size={20} onClick={toggleHidePassword} />
              )}
              {error && <IoMdAlert size={20} color="#c53030" />}
            </InputContent>

            <ErrorDiv>
              {error ? (
                <p>Credenciais informadas são inválidas, tente novamente.</p>
              ) : (
                <p />
              )}
            </ErrorDiv>

            <LoginButton
              type="button"
              isErrored={!!error}
              disabled={!!error}
              onClick={() => handleSubmit({ email, password })}
            >
              Entrar
            </LoginButton>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Login;
