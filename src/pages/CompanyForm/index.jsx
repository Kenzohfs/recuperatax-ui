import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { CompanyModel } from '../../models/Company';
import PrivatePaths from '../../routes/privatePaths';
import {
  BackIcon,
  FieldContainer,
  Form,
  FormContent,
  FormHeader,
  FormRow,
  FormTab,
  Header,
  Label,
  PageTitle,
  PageTitleText,
} from './styled';

const stepsCodes = {
  GENERAL_DATA: 'GENERAL_DATA',
  BRANCHES: 'BRANCHES',
};

const steps = [
  { code: stepsCodes.GENERAL_DATA, label: 'Dados Gerais' },
  { code: stepsCodes.BRANCHES, label: 'Filiais' },
];

const CompanyForm = () => {
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(steps[0]);
  const [company, setCompany] = useState(new CompanyModel());

  const reset = () => {
    setCompany(new CompanyModel());
  };

  const onBackClick = () => {
    navigate(PrivatePaths.COMPANIES);
  };

  const onSaveClick = () => {
    reset();
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Header>
        <PageTitle>
          <BackIcon onClick={onBackClick} />
          <PageTitleText>Cadastro de Empresas</PageTitleText>
        </PageTitle>
        <Button onClick={onSaveClick}>Salvar</Button>
      </Header>

      <Form>
        <FormHeader>
          {steps.map((step) => (
            <FormTab
              key={step.code}
              $selected={selectedTab.code === step.code}
              onClick={() => setSelectedTab(step)}
            >
              {step.label}
            </FormTab>
          ))}
        </FormHeader>
        <FormContent>
          {selectedTab.code === stepsCodes.GENERAL_DATA && (
            <>
              <FormRow>
                <FieldContainer $flex={1}>
                  <Label>
                    CNPJ
                    <Input
                      name="cnpj"
                      value={company.cnpj}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={1.5}>
                  <Label>
                    Nome
                    <Input
                      name="name"
                      value={company.name}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={1.5}>
                  <Label>
                    Nome Fantasia
                    <Input
                      name="fantasyName"
                      value={company.fantasyName}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
              </FormRow>

              <FormRow>
                <FieldContainer $flex={1}>
                  <Label>
                    Contato
                    <Input
                      name="contact"
                      value={company.contact}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={2}>
                  <Label>
                    E-mail
                    <Input
                      name="email"
                      value={company.email}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={1}>
                  <Label>
                    CEP
                    <Input
                      name="cep"
                      value={company.cep}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
              </FormRow>

              <FormRow>
                <FieldContainer $flex={1}>
                  <Label>
                    País
                    <Input
                      name="country"
                      value={company.country}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={1}>
                  <Label>
                    Estado
                    <Input
                      name="state"
                      value={company.state}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={1.5}>
                  <Label>
                    Cidade
                    <Input
                      name="city"
                      value={company.city}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={1.5}>
                  <Label>
                    Bairro
                    <Input
                      name="neighborhood"
                      value={company.neighborhood}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
              </FormRow>

              <FormRow>
                <FieldContainer $flex={2.5}>
                  <Label>
                    Rua
                    <Input
                      name="street"
                      value={company.street}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={1}>
                  <Label>
                    Number
                    <Input
                      name="number"
                      value={company.number}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
                <FieldContainer $flex={1}>
                  <Label>
                    Complemento
                    <Input
                      name="complement"
                      value={company.complement}
                      onChange={onInputChange}
                    />
                  </Label>
                </FieldContainer>
              </FormRow>
            </>
          )}
          {selectedTab.code === stepsCodes.BRANCHES && <p>Not Implemented</p>}
        </FormContent>
      </Form>
    </>
  );
};

export default CompanyForm;
