import { darken } from 'polished';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  z-index: 100;
`;

export const CollapsedSidebar = styled.div`
  width: 60px;
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;

export const CollapsedSidebarUpMenu = styled.div`
  width: 100%;
`;

export const CollapsedSidebarDownMenu = styled.div`
  width: 100%;
`;

export const ExpandedSidebar = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: white;
  display: ${({ $isExpanded }) => ($isExpanded ? 'block' : 'none')};
`;

export const SidebarIcon = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.darkBlue)};
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarMenuItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.darkBlue)};
    color: ${({ theme }) => theme.colors.green};
  }
`;
