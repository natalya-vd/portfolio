import classNames from "classnames";
import { DetailedHTMLProps, ElementType, HTMLAttributes, useMemo } from "react";

import styles from './Title.module.css'

interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag?: 'h2' | 'h3'
  isHidden?: boolean
}

export const Title = ({ tag = 'h2', isHidden = false, children, className, ...props }: ITitleProps): JSX.Element => {
  const Component = tag as ElementType

  const classes = useMemo(() => ({
    ['visually-hidden']: isHidden,
    [styles.heading2]: tag === 'h2',
    ['typography-headline-large']: tag === 'h2',
    ['typography-title-medium']: tag === 'h3',
  }), [isHidden, tag])

  return (
    <Component
      className={classNames(className, classes)}
      {...props}
    >
      {children}
    </Component>
  );
}
