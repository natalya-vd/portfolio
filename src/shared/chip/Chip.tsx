import classNames from "classnames";
import { DetailedHTMLProps, ElementType, ForwardedRef, forwardRef, HTMLAttributes, useMemo } from "react";

import styles from './Chip.module.css'

interface IChipProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  tag?: string
  appearance?: 'outlined' | 'elevated'
  selected?: boolean
  clickable?: boolean
}

export const Chip = forwardRef(({
  tag = 'div',
  appearance = 'outlined',
  selected = false,
  clickable = false,
  className,
  children,
  ...props
}: IChipProps,
  ref: ForwardedRef<HTMLElement>): JSX.Element => {
  const Component = clickable ? 'button' : tag as ElementType

  const classes = useMemo(() => ({
    [styles.outlined]: appearance === 'outlined',
    [styles.elevated]: appearance === 'elevated',
    [styles.state]: clickable,
    [styles.selected]: selected,
  }), [appearance, clickable, selected])

  return (
    <Component
      ref={ref}
      className={classNames(classes, styles.container, className, 'typography-label-large')}
      {...(clickable ? { type: 'button' } : {})}
      {...props}
    >
      {children}
    </Component>
  );
})
