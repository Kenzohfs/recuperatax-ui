import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ModalContainer = styled.div`
  padding: 2.2rem 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const WelcomeMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray};
  letter-spacing: 2px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
