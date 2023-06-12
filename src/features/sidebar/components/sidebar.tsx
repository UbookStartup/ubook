import { sidebarButtons } from '../data/sidebarButtons';
import { SidebarButton } from './sidebar-button';
import { Separator } from '@/shared/components';
import { generateKey } from '@/shared/utils';

export const Sidebar = () => {
  return (
    <div className="w-1/6 pr-7">
      <Separator />
      {sidebarButtons.map((button) => (
        <SidebarButton
          key={generateKey(button.title)}
          icon={button.icon}
          title={button.title}
          path={button.path}
        />
      ))}
    </div>
  );
};
