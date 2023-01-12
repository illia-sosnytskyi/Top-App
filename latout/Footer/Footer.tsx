import cn from 'classnames';
import { FooterProps } from './Footer.props';
import style from './Footer.module.css';

export const Footer = ({ ...props }: FooterProps) => {
  return(
    <div {...props}>
      Footer
    </div>
  );
};
