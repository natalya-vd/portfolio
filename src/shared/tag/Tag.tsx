import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from './Tag.module.css'

export type TagType = 'primary' | 'secondary' | 'info' | 'error' | 'success'

interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  appearance?: TagType
  text: string
}

export const Tag = ({ text, appearance = 'success', children, className, ...props }: ITagProps): JSX.Element => {
  return (
    <div
      className={classNames(className, styles.container)}
      {...props}
    >
      <div className={classNames(
        styles.tag,
        'typography-label-medium',
        {
          [styles['tag_primary']]: appearance === 'primary',
          [styles['tag_secondary']]: appearance === 'secondary',
          [styles['tag_success']]: appearance === 'success',
          [styles['tag_info']]: appearance === 'info',
          [styles['tag_error']]: appearance === 'error'
        }
      )}>
        {text}
      </div>

      {children}
    </div>
  );
}
