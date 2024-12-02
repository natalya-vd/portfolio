import classNames from "classnames";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

import styles from './ListItem.module.css'

interface IListItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tag?: ElementType
  hasMarker?: boolean
}

export const ListItem = ({ tag = 'li', hasMarker = false, className, children, ...props }: IListItemProps): JSX.Element => {
  const Component = tag

  return (
    <Component
      className={classNames(
        className,
        styles.container,
        { [styles.marker]: hasMarker }
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
