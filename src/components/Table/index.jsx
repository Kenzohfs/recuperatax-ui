import React, { useMemo } from 'react';

import Link from './CellRenderers/Link';
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from './styled';

const Table = ({ headers, data }) => {
  const cellRenderer = (cell, cellRendererType) => {
    cell.isComponent = false;

    switch (cellRendererType) {
      case 'link':
        cell.isComponent = true;
        return <Link link={cell.value} />;
      default:
        return cell.value;
    }
  };

  const myDataSortedByHeader = useMemo(() => {
    return data.map((row) => {
      return headers.map((header) => {
        const cell = row.find((cell) => cell.headerRef === header.ref);

        if (header.cellRenderer && header.cellRenderer != '')
          return cellRenderer(cell, header.cellRenderer);

        return cell ? cell.value : '';
      });
    });
  }, [data, headers]);

  return (
    <TableContainer>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHeaderCell key={header.ref} width={header.columnDefs.width}>
              {header.value}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {myDataSortedByHeader.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>
                {cell.isComponent ? <cell.value /> : cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
