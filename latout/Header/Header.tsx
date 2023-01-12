import cn from 'classnames';
import { HeaderProps } from './Header.props';
import style from './Header.module.css';

export const Header = ({ ...props }: HeaderProps) => {
  return(
    <div {...props}>
      Header
    </div>
  );
};
