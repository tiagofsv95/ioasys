import React, { useState, FormEvent } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { isBrowser } from 'react-device-detect';
import { GoSearch } from 'react-icons/go';
import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import { Container, Content, DivImg, Form, LogOutButton } from './styles';

import logo from '../../assets/logo-header.svg';

interface Props {
  company?: string;
}

const Header: React.FC<Props> = ({ company }) => {
  const [newEnterprise, setNewEnterprise] = useState(company || '');
  const { token, signOut } = useAuth();
  const history = useHistory();
  const match = useRouteMatch(`/result/${company}`);

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      const headers = {
        'Content-Type': 'application/json',
        'access-token': token.token,
        client: token.client,
        uid: token.uid,
      };

      const { data } = await api.get(`enterprises?name=${newEnterprise}`, {
        headers,
      });

      if (data.enterprises.length === 0) {
        history.push(`/notFound/${newEnterprise}`);
        return;
      }

      history.push(`/result/${newEnterprise}`, data.enterprises);

      if (match?.path !== `/result/${newEnterprise}`) {
        window.location.reload(true);
      }
    } catch (err) {
      if (
        err instanceof Error &&
        err.message === 'Request failed with status code 401'
      ) {
        signOut();
        history.push('/');
        return;
      }

      history.push(`/notFound/${newEnterprise}`);
    }
  }

  return (
    <Container>
      <Content>
        {isBrowser && (
          <DivImg>
            <img alt="logo" src={logo} />
          </DivImg>
        )}
        <Form onSubmit={handleSearch}>
          <div>
            <input
              type="text"
              placeholder={newEnterprise === '' ? 'Pesquisar' : newEnterprise}
              value={newEnterprise}
              onChange={(e) => setNewEnterprise(e.target.value)}
            />
          </div>
          <button type="submit">
            <GoSearch size={25} color="#FFF" />
          </button>
        </Form>
        <LogOutButton>
          <button type="button" onClick={signOut}>
            <FiLogOut size={25} color="#FFF" />
          </button>
        </LogOutButton>
      </Content>
    </Container>
  );
};

export default Header;
