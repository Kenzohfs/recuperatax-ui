import React from 'react';
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
  company = { name: '', cnpj: '', contact: '', email: '', state: '', city: '' },
}) => {
  const {
    name = '',
    cnpj = '',
    contact = '',
    email = '',
    state = '',
    city = '',
  } = company;

  console.log(company, cnpj, city);

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
        <DeleteIcon />
      </ActionsContainer>
    </Container>
  );
};

export default Company;
