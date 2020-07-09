import React from 'react';

import Header from '../../components/Header';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>Clique na busca para iniciar</Content>
    </Container>
  );
};

export default Main;
