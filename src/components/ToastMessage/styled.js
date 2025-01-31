import styled from 'styled-components';

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
