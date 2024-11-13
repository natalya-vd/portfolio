import classNames from "classnames";
import { DetailedHTMLProps, ElementType, ForwardedRef, forwardRef, HTMLAttributes, useMemo } from "react";

import styles from './Card.module.css'

interface ICardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tag?: string
  clickable?: boolean
  type: 'outlined' | 'filled' | 'elevated'
}

export const Card = forwardRef(
  (
    { tag = 'div',
      type, className,
      clickable = false,
      children,
      ...props
    }: ICardProps,
    ref: ForwardedRef<HTMLElement>
  ): JSX.Element => {
    const Component = tag as ElementType

    const classes = useMemo(() => ({
      [styles.outlined]: type === 'outlined',
      [styles.filled]: type === 'filled',
      [styles.elevated]: type === 'elevated',
      [styles.state]: clickable,
    }), [type, clickable])

    return (
      <Component className={classNames(classes, styles.container, className)} ref={ref} {...props}>
        {children}
      </Component>
    );
  })
