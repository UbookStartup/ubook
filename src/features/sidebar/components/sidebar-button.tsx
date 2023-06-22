import { Button, Separator } from '@/shared/components';
import { cn } from '@/shared/utils';
import { ArrowRight, ChevronsUpDown, Plus } from 'lucide-react';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

// TODO Add className props and set pl-3 to collabs button

export interface SidebarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  path?: string;
  className?: string;
  icon: 'plus' | 'arrow';
}

export const SidebarButton: FC<SidebarButtonProps> = ({
  title,
  icon,
  path,
  children,
  className = '',
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
        className={cn(
          `flex w-full justify-between px-3 pl-0 hover:bg-transparent ${
            location === path
              ? 'text-accent-foreground'
              : 'text-accent-foreground/50'
          }`,
          className
        )}
      >
        {path ? (
          <Link to={path}>
            {title}
            {icon === 'plus' ? (
              <Plus className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </Link>
        ) : (
          <div>
            {title}
            <ChevronsUpDown className="h-4 w-4" />
          </div>
        )}
      </Button>
      <Separator />
    </>
  );
};
