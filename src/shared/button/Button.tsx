import classNames from "classnames";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ForwardedRef, forwardRef, Ref, useMemo } from "react";

import styles from './Button.module.css'

type MergeProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLElement>, HTMLButtonElement> & DetailedHTMLProps<AnchorHTMLAttributes<HTMLElement>, HTMLAnchorElement>

interface IButtonProps extends MergeProps {
  appearance?: 'filled' | 'text'
}

export const Button = forwardRef(
  ({ children, className, href, appearance = 'filled', ...props }: IButtonProps,
    ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
  ): JSX.Element => {
    const classes = useMemo(() => ({
      [styles.filled]: appearance === 'filled',
      [styles.text]: appearance === 'text',
    }), [appearance])

    return (
      href ? (
        <a
          className={classNames(classes, styles.container, styles.state, className)}
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          {...props}
        >
          {children}
        </a>
      )
        : (
          <button
            className={classNames(classes, styles.container, className)}
            ref={ref as Ref<HTMLButtonElement>}
            {...props}
          >
            {children}
          </button>
        )
    );
  })
