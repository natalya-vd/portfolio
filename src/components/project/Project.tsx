import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";
import classNames from "classnames";

import { Title } from "@components/title/Title";

import { Button } from "@shared/button/Button";
import { Card } from "@shared/card/Card";
import { Chip } from "@shared/chip/Chip";
import { Tag } from "@shared/tag/Tag";

import { ProjectShort } from "./types";
import styles from './Project.module.css'

interface IProjectProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  project: ProjectShort
  tag?: string
}

export const Project = ({ project, tag = 'div', className, ...props }: IProjectProps): JSX.Element => {
  const Component = tag as ElementType

  const getDates = () => {
    let date = project.dateStart
    if (project.dateEnd) {
      date += ` - ${project.dateEnd}`
    }
    return date
  }

  const getTagText = (tagType: string): string => {
    const appearance: Record<string, string> = {
      success: 'Коммерческий проект',
      info: 'Pet-проект',
      primary: 'Учебный проект',
    }

    return appearance[tagType]
  }

  return (
    <Component className={classNames(className)} {...props}>
      <Tag text={getTagText(project.tagStyle)} appearance={project.tagStyle}>
        <Card type="outlined" className={classNames(styles.card)}>
          <div className={classNames(styles['media-wrapper'])}>
            <img className={classNames(styles.media)} src={project.image} alt={project.title} />
          </div>
          <div className={classNames(styles.content)}>
            <Title tag="h3">{project.title}</Title>
            <div className={classNames(styles['text-content'], "typography-body-medium")}>
              <p className={classNames(styles.description)}>{project.description}</p>
              <ul className={classNames(styles['development-tools'])}>
                {
                  project["development-tools"].map((item, idx) => (
                    <li key={idx}>
                      <Chip tag="span" appearance="outlined" selected>{item}</Chip>
                    </li>
                  ))
                }
              </ul>
              <p><span className="typography-title-medium">Роль:</span> {project.role}</p>
              <p><span className="typography-title-medium">Даты участия:</span> {getDates()}</p>
            </div>
            <div className={classNames(styles.actions)}>
              {project.url && (
                <Button appearance="filled" href={project.url}>Посетить</Button>
              )}
            </div>
          </div>
        </Card>
      </Tag>
    </Component>
  );
}
