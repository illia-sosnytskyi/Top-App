import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import style from './Sidebar.module.css';

export const Sidebar = ({ ...props }: SidebarProps) => {
  return(
    <div {...props}>
      Sidebar
    </div>
  );
};
