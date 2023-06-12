import { Button, Separator } from '@/shared/components';
import { ArrowRight, Plus } from 'lucide-react';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface SidebarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  path: string;
  icon: 'plus' | 'arrow';
}

export const SidebarButton: FC<SidebarButtonProps> = ({
  title,
  icon,
  path,
  children,
  ...props
}) => {
  const location = useLocation().pathname;
  return (
    <>
      <Button
        {...props}
        asChild
        size="lg"
        variant="ghost"
        className={`flex w-full justify-between px-3 text-accent-foreground/50 hover:bg-transparent ${
          location === path
            ? 'text-accent-foreground'
            : 'text-accent-foreground/50'
        }`}
      >
        <Link to={path}>
          {title}
          {icon === 'plus' ? (
            <Plus className="h-4 w-4" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </Link>
      </Button>
      <Separator />
    </>
  );
};
