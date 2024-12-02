import classNames from "classnames";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

interface IListProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tag?: ElementType
}

export const List = ({ tag = 'ul', className, children, ...props }: IListProps): JSX.Element => {
  const Component = tag

  return (
    <Component
      className={classNames(className)}
      {...props}
    >
      {children}
    </Component>
  );
}
