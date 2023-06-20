import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shared/components';
import { generateKey } from '@/shared/utils';
import { useState } from 'react';
import { sidebarButtons, sidebarButtonsSearch } from '../data/sidebarButtons';
import { SidebarButton } from './sidebar-button';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-1/6 pr-7">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div>
          {sidebarButtons.map((button) => (
            <SidebarButton
              key={generateKey(button.title)}
              icon={button.icon}
              title={button.title}
              path={button.path}
            />
          ))}
          <CollapsibleTrigger asChild>
            <SidebarButton icon="arrow" title="Поиск по:" />
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          {sidebarButtonsSearch.map((button) => (
            <SidebarButton
              key={generateKey(button.title)}
              icon={button.icon}
              title={button.title}
              path={button.path}
              className="pl-3"
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
