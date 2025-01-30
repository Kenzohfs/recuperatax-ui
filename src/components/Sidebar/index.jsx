import React, { useState } from 'react';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import { SIDEBAR_HELP, SIDEBAR_ITEMS } from '../../consts';
import {
  CollapsedSidebar,
  CollapsedSidebarDownMenu,
  CollapsedSidebarUpMenu,
  Divider,
  ExpandedSidebar,
  ExpandedSidebarContent,
  ExpandedSidebarDownMenu,
  ExpandedSidebarUpMenu,
  SidebarContainer,
  SidebarIcon,
  SidebarMenuItem,
} from './styled';

const Sidebar = () => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(true);
  const [sidebarItems, setSidebarItems] = useState(
    SIDEBAR_ITEMS.map((item) => ({
      ...item,
      isExpanded: false,
      hasChildren: item.children.length > 0,
    }))
  );
  const [sidebarHelpItems, setSidebarHelpItems] = useState(
    SIDEBAR_HELP.map((item) => ({
      ...item,
      isExpanded: false,
      hasChildren: item.children.length > 0,
    }))
  );

  const recursiveFind = (items, id) => {
    for (const item of items) {
      if (item.id === id) return item;

      if (item.children && item.children.length > 0) {
        const found = recursiveFind(item.children, id);

        if (found) return found;
      }
    }

    return null;
  };

  const onMenuItemClick = (id) => {
    const item = recursiveFind(sidebarItems, id);

    if (!item) return;

    if (item.hasChildren) {
      item.isExpanded = !item.isExpanded;
      setSidebarItems([...sidebarItems]);
      return;
    }

    navigate(item.path);
  };

  const onMenuHelpItemClick = (id) => {
    const item = recursiveFind(sidebarHelpItems, id);

    if (!item) return;

    if (item.hasChildren) {
      item.isExpanded = !item.isExpanded;
      setSidebarHelpItems([...sidebarHelpItems]);
      return;
    }

    navigate(item.path);
  };

  return (
    <SidebarContainer>
      <CollapsedSidebar
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <CollapsedSidebarUpMenu>
          {sidebarItems.map((item) => (
            <SidebarIcon key={item.label}>
              <item.icon />
            </SidebarIcon>
          ))}
        </CollapsedSidebarUpMenu>

        <CollapsedSidebarDownMenu>
          <Divider />
          {sidebarHelpItems.map((item) => (
            <SidebarIcon key={item.label}>
              <item.icon />
            </SidebarIcon>
          ))}
        </CollapsedSidebarDownMenu>
      </CollapsedSidebar>

      <ExpandedSidebar
        $isExpanded={isExpanded}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <ExpandedSidebarContent>
          <ExpandedSidebarUpMenu>
            {sidebarItems.map((item) => (
              <div key={item.id}>
                <SidebarMenuItem
                  key={item.id}
                  onClick={() => onMenuItemClick(item.id)}
                >
                  {item.label}{' '}
                  {item.hasChildren && !item.isExpanded && <FaAngleDown />}
                  {item.hasChildren && item.isExpanded && <FaAngleUp />}
                </SidebarMenuItem>

                {item.isExpanded &&
                  item.children.map((child) => (
                    <SidebarMenuItem
                      key={child.id}
                      onClick={() => onMenuItemClick(child.id)}
                    >
                      {child.label}
                    </SidebarMenuItem>
                  ))}
              </div>
            ))}
          </ExpandedSidebarUpMenu>

          <ExpandedSidebarDownMenu>
            {sidebarHelpItems.map((item) => (
              <SidebarMenuItem
                key={item.id}
                onClick={() => onMenuHelpItemClick(item.id)}
              >
                {item.label}
              </SidebarMenuItem>
            ))}
          </ExpandedSidebarDownMenu>
        </ExpandedSidebarContent>
      </ExpandedSidebar>
    </SidebarContainer>
  );
};

export default Sidebar;
