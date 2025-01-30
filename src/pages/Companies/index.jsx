import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';
import Company from '../../components/Company';
import Input from '../../components/Input';
import PrivatePaths from '../../routes/privatePaths';
import {
  ActionsContainer,
  CompaniesHeader,
  CompaniesTitle,
  SearchContainer,
} from './styled';

const Companies = () => {
  const navigate = useNavigate();

  const onRegisterClick = () => {
    navigate(PrivatePaths.REGISTERS_COMPANIES);
  };

  return (
    <>
      <CompaniesHeader>
        <CompaniesTitle>Empresas</CompaniesTitle>

        <ActionsContainer>
          <SearchContainer>
            <Button>
              <FaMagnifyingGlass />
            </Button>
            <Input onChange={() => {}} value={''} placeholder="Pesquisar..." />
          </SearchContainer>

          <Button onClick={onRegisterClick}>Cadastrar</Button>
        </ActionsContainer>
      </CompaniesHeader>

      <Company />
    </>
  );
};

export default Companies;
