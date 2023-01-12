import cn from 'classnames';
import { TagProps } from './Tag.props';
import style from './Tag.module.css';

export const Tag = ({
  size = 'm',
  color = 'ghost',
  href,
  children,
  className,
  ...props
}: TagProps) => {
  return(
    <div
      className={cn(style.tag, className, {
        [style.s]: size === 's',
        [style.m]: size === 'm',
        [style.ghost]: color === 'ghost',
        [style.red]: color === 'red',
        [style.green]: color === 'green',
        [style.primary]: color === 'primary',
        [style.gray]: color === 'gray',
      })}
      {...props}
    >
      {href
        ? <a href={href}>{children}</a>
        : <>{children}</>}
    </div>
  );
};
