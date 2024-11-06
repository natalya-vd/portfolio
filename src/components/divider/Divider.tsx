import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, useMemo } from "react";

import styles from './Divider.module.css'

interface IDividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  appearance?: 'vertically' | 'horizontal'
}

export const Divider = ({ appearance = 'horizontal', className, ...props }: IDividerProps): JSX.Element => {
  const classes = useMemo(
    () => classNames(
      className,
      styles.hr,
      {
        [styles.horizontal]: appearance === 'horizontal',
        [styles.vertically]: appearance === 'vertically'
      }
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [appearance]
  )

  return (
    <hr
      className={classes}
      {...props}
    />
  );
}
