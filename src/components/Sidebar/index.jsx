import React, { useState } from 'react';
import { FaHouse } from 'react-icons/fa6';

import {
  CollapsedSidebar,
  CollapsedSidebarDownMenu,
  CollapsedSidebarUpMenu,
  ExpandedSidebar,
  SidebarContainer,
  SidebarIcon,
  SidebarMenu,
  SidebarMenuItem,
} from './styled';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <SidebarContainer>
      <CollapsedSidebar
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <CollapsedSidebarUpMenu>
          <SidebarIcon>
            <FaHouse />
          </SidebarIcon>
        </CollapsedSidebarUpMenu>
        <CollapsedSidebarDownMenu>
          <SidebarIcon>
            <FaHouse />
          </SidebarIcon>
        </CollapsedSidebarDownMenu>
      </CollapsedSidebar>

      <ExpandedSidebar
        $isExpanded={isExpanded}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <SidebarMenu>
          <SidebarMenuItem>Início</SidebarMenuItem>
          <SidebarMenuItem>Cadastros</SidebarMenuItem>
          <SidebarMenuItem>Arquivos Fiscais</SidebarMenuItem>
          <SidebarMenuItem>Relatório</SidebarMenuItem>
          <SidebarMenuItem>Diagnóstico Express</SidebarMenuItem>
          <SidebarMenuItem>Consultor IA</SidebarMenuItem>
          <SidebarMenuItem>Área de Membros</SidebarMenuItem>
        </SidebarMenu>
      </ExpandedSidebar>
    </SidebarContainer>
  );
};

export default Sidebar;
