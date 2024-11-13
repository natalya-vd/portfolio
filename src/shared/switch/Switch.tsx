import { ChangeEventHandler, DetailedHTMLProps, HTMLAttributes, ReactNode, useMemo } from 'react';
import classNames from 'classnames';

import styles from './Switch.module.css'

interface ISwitchProps extends DetailedHTMLProps<HTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
  label?: string
  iconChecked?: ReactNode
  iconUnchecked?: ReactNode
  checked: boolean
  onChecked: (checked: boolean) => void
}

export const Switch = ({ label, iconChecked, iconUnchecked, checked, onChecked, className, ...props }: ISwitchProps): JSX.Element => {
  const classesSwitch = useMemo(
    () => classNames(styles.switch, {
      [styles['switch-checked']]: !iconChecked,
      [styles['switch-unchecked']]: !iconUnchecked,
    }),
    [iconChecked, iconUnchecked]
  )

  const handleChecked: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChecked(e.target.checked)
  }

  return (
    <label
      className={classNames(className, styles.wrapper)}
      {...props}
    >
      {label && (<span>{label}</span>)}

      <div className={classNames(styles['checkbox-wrapper'])}>
        <input
          className={classNames(styles.checkbox)}
          type="checkbox"
          checked={checked}
          onChange={handleChecked}
        />
        <div className={classesSwitch} aria-hidden="true">
          {iconChecked && (
            <div className={classNames(styles['icon-checked'])}>{iconChecked}</div>
          )}
          {iconUnchecked && (
            <div className={classNames(styles['icon-unchecked'])}>{iconUnchecked}</div>
          )}
        </div>
      </div>
    </label>
  );
}
