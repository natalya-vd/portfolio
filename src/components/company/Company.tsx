import { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";

import { Title } from "@components/title/Title";
import { List } from "@shared/list/List";
import { ListItem } from "@shared/list/ListItem";
import { ListItemText } from "@shared/list/ListItemText";
import { Chip } from "@shared/chip/Chip";

import { ICompany } from "./types";

import styles from './Company.module.css'

interface ICompanyProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  company: ICompany
  mediaAppearance: 'left' | 'right'
}

const CompanyMedia = ({ src, alt }: { src: string; alt: string }): JSX.Element => {
  return (
    <div className={classNames(styles['img-wrapper'])}>
      <img className={classNames(styles.img)} src={src} alt={alt} />
    </div>
  )
}
export const Company = ({ company, mediaAppearance, className, ...props }: ICompanyProps): JSX.Element => {
  return (
    <div
      className={classNames(styles.block, className)}
      {...props}
    >
      {mediaAppearance === 'left' && <CompanyMedia src={company.img} alt={company.name} />}

      <div>
        <div className={classNames(styles.spacing)}>
          <Title tag="h3">{company.name}</Title>
          <p className={classNames(styles.subtitle, 'typography-body-medium')}>{company.date}</p>
        </div>

        <div>
          <div>
            <p className={classNames(styles.spacing)}>
              {company.description}
            </p>
            <p>В рамках своей деятельности занималась:</p>

            <List className={classNames(styles.spacing)}>
              {company.experience.map((item, idx) => (
                <ListItem key={idx} hasMarker>
                  <ListItemText headline={item} />
                </ListItem>
              ))}
            </List>
          </div>

          <p className={classNames(styles['stack-title'])}>
            Основной стек, с которым работала:
          </p>
          <div className={classNames(styles.stack)}>
            {company.stack.map((item, idx) => (
              <Chip key={idx} tag="span" appearance="outlined">{item}</Chip>
            ))}
          </div>
        </div>
      </div>

      {mediaAppearance === 'right' && <CompanyMedia src={company.img} alt={company.name} />}
    </div>
  );
}
