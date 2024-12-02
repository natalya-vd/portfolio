import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface IListItemTextProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  headline?: ReactNode
  supportingText?: ReactNode
}

export const ListItemText = ({
  headline,
  supportingText,
  className,
  children,
  ...props
}: IListItemTextProps): JSX.Element => {
  if (typeof headline === 'string') {
    headline = (
      <span>{headline}</span>
    )
  }

  if (typeof supportingText === 'string') {
    supportingText = (
      <p>{supportingText}</p>
    )
  }

  return (
    <div
      className={classNames(className)}
      {...props}
    >
      {headline ?? children}
      {supportingText}
    </div>
  );
}
