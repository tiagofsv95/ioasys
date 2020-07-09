import React, { useState, useEffect } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  Content,
  Image,
  Description,
} from './styles';

interface CompanyDetailProps {
  enterprise_name: string;
  description: string;
  photo: string;
}

const Detail: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const { token } = useAuth();
  const [companyDetail, setCompanyDetail] = useState<CompanyDetailProps>(
    {} as CompanyDetailProps,
  );

  useEffect(() => {
    async function loadCompanyDetail(): Promise<void> {
      const headers = {
        'Content-Type': 'application/json',
        'access-token': token.token,
        client: token.client,
        uid: token.uid,
      };

      const { data } = await api.get(`enterprises/${id}`, {
        headers,
      });

      setCompanyDetail(data.enterprise);
    }

    loadCompanyDetail();
  }, [id, token]);

  return (
    <Container>
      <Header>
        <div>
          <BackButton
            onClick={() => {
              history.goBack();
            }}
          >
            <FiArrowLeft size={30} color="#fff" />
          </BackButton>
          <HeaderTitle>
            <h1>{companyDetail.enterprise_name}</h1>
          </HeaderTitle>
        </div>
      </Header>
      <Content>
        <Image>
          <img
            alt={companyDetail.enterprise_name}
            src={api.defaults.baseURL + companyDetail.photo}
          />
        </Image>
        <Description>
          <p>{companyDetail.description}</p>
        </Description>
      </Content>
    </Container>
  );
};

export default Detail;
