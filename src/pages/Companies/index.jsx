import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';
import Input from '../../components/Input';
import PrivatePaths from '../../routes/privatePaths';
import {
  ActionsContainer,
  ButtonContainer,
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
    <CompaniesHeader>
      <CompaniesTitle>Empresas</CompaniesTitle>

      <ActionsContainer>
        <SearchContainer>
          <ButtonContainer>
            <Button>
              <FaMagnifyingGlass />
            </Button>
          </ButtonContainer>
          <Input onChange={() => {}} value={''} placeholder="Pesquisar..." />
        </SearchContainer>

        <Button onClick={onRegisterClick}>Cadastrar</Button>
      </ActionsContainer>
    </CompaniesHeader>
  );
};

export default Companies;
