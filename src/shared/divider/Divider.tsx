import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, useMemo } from "react";

import styles from './Divider.module.css'

interface IDividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  appearance?: 'vertically' | 'horizontal'
}

export const Divider = ({ appearance = 'horizontal', className, ...props }: IDividerProps): JSX.Element => {
  const classes = useMemo(
    () => ({
      [styles.horizontal]: appearance === 'horizontal',
      [styles.vertically]: appearance === 'vertically'
    }), [appearance])

  return (
    <hr
      className={classNames(classes, styles.container, className)}
      {...props}
    />
  );
}
