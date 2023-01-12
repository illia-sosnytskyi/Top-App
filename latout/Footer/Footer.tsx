import cn from 'classnames';
import { format } from 'date-fns';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps) => {
  return(
    <div
      className={cn(className, styles.footer)}
      {...props}
    >
      <p>
        OwlTop © 2020 &mdash; {format(new Date(), 'yyyy')} All Rights Reserved
      </p>

      <a href="">
        Terms of use
      </a>

      <a href="">
        Privacy Policy
      </a>
    </div>
  );
};
