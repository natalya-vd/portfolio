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
    const classes = useMemo(() => classNames(className, styles.button, {
      [styles.filled]: appearance === 'filled',
      [styles.text]: appearance === 'text',
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [appearance])

    return (
      href ? (
        <a
          className={classes}
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          {...props}
        >
          {children}
        </a>
      )
        : (
          <button
            className={classes}
            ref={ref as Ref<HTMLButtonElement>}
            {...props}
          >
            {children}
          </button>
        )
    );
  })
