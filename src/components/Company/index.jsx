import React from 'react';
import { useCompanies } from '../../hooks/companies';
import {
  ActionsContainer,
  Container,
  ContainerFields,
  DeleteIcon,
  EditIcon,
  Field,
  FieldLabel,
  FieldValue,
  ViewIcon,
} from './styled';

const Company = ({
  company = {
    id: '',
    name: '',
    cnpj: '',
    contact: '',
    email: '',
    state: '',
    city: '',
  },
  onActionSuccess = () => {},
}) => {
  const {
    id = '',
    name = '',
    cnpj = '',
    contact = '',
    email = '',
    state = '',
    city = '',
  } = company;

  const { DeleteCompany } = useCompanies();

  const onDeleteClick = async () => {
    await DeleteCompany(id);
    onActionSuccess();
  };

  return (
    <Container>
      <ContainerFields>
        <Field>
          <FieldLabel>Nome:</FieldLabel>
          <FieldValue>{name}</FieldValue>
        </Field>
        <Field>
          <FieldLabel>CNPJ:</FieldLabel>
          <FieldValue>{cnpj}</FieldValue>
        </Field>
        <Field>
          <FieldLabel>Contato:</FieldLabel>
          <FieldValue>{contact}</FieldValue>
        </Field>
        <Field>
          <FieldLabel>E-mail:</FieldLabel>
          <FieldValue>{email}</FieldValue>
        </Field>
        <Field>
          <FieldLabel>Estado:</FieldLabel>
          <FieldValue>{state}</FieldValue>
        </Field>
        <Field>
          <FieldLabel>Cidade:</FieldLabel>
          <FieldValue>{city}</FieldValue>
        </Field>
      </ContainerFields>

      <ActionsContainer>
        <ViewIcon />
        <EditIcon />
        <DeleteIcon onClick={onDeleteClick} />
      </ActionsContainer>
    </Container>
  );
};

export default Company;
