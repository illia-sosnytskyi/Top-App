import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import style from './Paragraph.module.css';

export const Paragraph = ({
  type = 'default',
  children,
  className,
  ...props
}: ParagraphProps) => {
  return(
    <p 
      className={cn(style.p, className, {
        [style.comment]: type === 'comment',
        [style.advantages]: type === 'advantages',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
