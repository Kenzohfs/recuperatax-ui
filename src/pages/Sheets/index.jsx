import React from 'react';
import Table from '../../components/Table';
import { Header, PageTextDescription, PageTitleText } from './styled';

const data = {
  headers: [
    { value: 'Nome', ref: 'name', columnDefs: { width: '70%' } },
    {
      value: 'Ação',
      ref: 'action',
      cellRenderer: 'link',
      columnDefs: { width: '30%' },
    },
  ],
  data: [
    [
      { value: 'Citculo Simples Nacional.ttrs', headerRef: 'name' },
      { value: 'file:///E:/Downloads/TestePraticoTI.pdf', headerRef: 'action' },
    ],
    [
      {
        value: 'https://itapira.sp.gov.br/dowloads/20200716084620.pdf',
        headerRef: 'name',
      },
      {
        value: 'https://itapira.sp.gov.br/dowloads/20200716084620.pdf',
        headerRef: 'action',
      },
    ],
    [
      {
        value: 'https://itapira.sp.gov.br/dowloads/20200716084620.pdf',
        headerRef: 'name',
      },
      { value: 'Download', headerRef: 'action' },
    ],
    [
      { value: 'Teste Gross 10 – Bisco CTD.subb', headerRef: 'name' },
      { value: 'Download', headerRef: 'action' },
    ],
    [
      { value: 'Teste LC 1% - Bisco CTD.subb', headerRef: 'name' },
      { value: 'Download', headerRef: 'action' },
    ],
  ],
};

const Sheets = () => {
  return (
    <>
      <Header>
        <PageTitleText>Planilhas</PageTitleText>
        <PageTextDescription>
          Acesse uma coleção de planilhas úteis para facilitar suas tarefas
          diárias e otimizar seu trabalho.
        </PageTextDescription>
      </Header>

      <Table headers={data.headers} data={data.data} />
    </>
  );
};

export default Sheets;
