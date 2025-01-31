import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

export const TableHeader = styled.thead``;

export const TableHeaderCell = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.blue};
  ${({ width }) => width && `width: ${width};`}
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  color: ${({ theme }) => theme.colors.black};
`;
