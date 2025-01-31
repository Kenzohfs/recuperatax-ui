import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import { useSheets } from '../../hooks/sheets';
import { Header, PageTextDescription, PageTitleText } from './styled';

const Sheets = () => {
  const { GetSheets } = useSheets();

  const [sheets, setSheets] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSheets = async () => {
      const res = await GetSheets();

      setSheets(res);
      setLoading(false);
    };

    fetchSheets();
  }, []);

  return (
    <>
      <Header>
        <PageTitleText>Planilhas</PageTitleText>
        <PageTextDescription>
          Acesse uma coleção de planilhas úteis para facilitar suas tarefas
          diárias e otimizar seu trabalho.
        </PageTextDescription>
      </Header>

      {!loading && <Table headers={sheets.headers} data={sheets.data} />}
    </>
  );
};

export default Sheets;
