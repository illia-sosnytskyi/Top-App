import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import style from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps) => {
  return(
    <div {...props}>
      <Menu />
    </div>
  );
};
