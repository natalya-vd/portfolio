import classNames from 'classnames';

import { Project } from '@components/project/Project';
import { Title } from '@components/title/Title';

import { projects } from './data/projects';
import styles from './Projects.module.css'

export const Projects = (): JSX.Element => {
  return (
    <>
      <Title tag='h2'>Проекты</Title>

      <ul className={classNames(styles.projects)}>
        {projects.map((project, idx) => (
          <Project project={project} key={idx} tag='li' />
        ))}
      </ul>
    </>
  );
}
