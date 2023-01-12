import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement
>  {
  type: 'default' | 'comment' | 'advantages',
  children: ReactNode,
}
