import React from 'react';

import Header from '../../components/Header';

import { Container, Content } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>Nenhuma empresa foi encontrada para a busca realizada.</Content>
    </Container>
  );
};

export default NotFound;
