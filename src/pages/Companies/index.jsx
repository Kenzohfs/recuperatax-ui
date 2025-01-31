import React, { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';
import Company from '../../components/Company';
import Input from '../../components/Input';
import { useCompanies } from '../../hooks/companies';
import PrivatePaths from '../../routes/privatePaths';
import {
  ActionsContainer,
  CompaniesHeader,
  CompaniesTitle,
  Content,
  SearchContainer,
} from './styled';

const Companies = () => {
  const navigate = useNavigate();
  const { GetCompanies } = useCompanies();

  const [companies, setCompanies] = useState([]);
  const [filter, setFilter] = useState('');

  const onRegisterClick = () => {
    navigate(PrivatePaths.REGISTERS_COMPANIES);
  };

  const fetchCompanies = async () => {
    const res = await GetCompanies(filter);
    setCompanies(res);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <CompaniesHeader>
        <CompaniesTitle>Empresas</CompaniesTitle>

        <ActionsContainer>
          <SearchContainer>
            <Button onClick={fetchCompanies}>
              <FaMagnifyingGlass />
            </Button>
            <Input
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              placeholder="Pesquisar por nome..."
            />
          </SearchContainer>

          <Button onClick={onRegisterClick}>Cadastrar</Button>
        </ActionsContainer>
      </CompaniesHeader>

      <Content>
        {companies.map((company) => (
          <Company
            key={company.id}
            company={company}
            onActionSuccess={fetchCompanies}
          />
        ))}
      </Content>
    </>
  );
};

export default Companies;
