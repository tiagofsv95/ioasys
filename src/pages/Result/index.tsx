import React, { useState, useCallback } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import {
  Container,
  Content,
  CompanyDiv,
  CompanyImg,
  CompanyInfo,
} from './styles';

interface EnterpriseTypeProps {
  enterprise_type_name: string;
  id: number;
}

interface CompanyProps {
  id: number;
  enterprise_name: string;
  city: string;
  country: string;
  enterprise_type: EnterpriseTypeProps;
}

const Result: React.FC = () => {
  const location = useLocation();
  const { company: searchedCompany } = useParams();
  const history = useHistory();
  const [companies] = useState<CompanyProps[]>(
    location.state as CompanyProps[],
  );

  const handleDetail = useCallback(
    (id: number) => {
      history.push(`/detail/${id}`);
    },
    [history],
  );

  return (
    <Container>
      <Header company={searchedCompany} />
      <Content>
        {companies.map((company) => {
          return (
            <CompanyDiv
              key={company.id}
              onClick={() => handleDetail(company.id)}
            >
              <CompanyImg>
                <div>
                  <p>{searchedCompany}</p>
                </div>
              </CompanyImg>
              <CompanyInfo>
                <h1>{company.enterprise_name}</h1>
                <h4>{company.enterprise_type.enterprise_type_name}</h4>
                <p>
                  {(company.city && `${company.city} - `) + company.country}
                </p>
              </CompanyInfo>
            </CompanyDiv>
          );
        })}
      </Content>
    </Container>
  );
};

export default Result;
