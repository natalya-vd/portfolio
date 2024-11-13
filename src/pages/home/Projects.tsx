import classNames from 'classnames';

import { Project } from '@components/project/Project';

import { projects } from './data/projects';
import styles from './Projects.module.css'

export const Projects = (): JSX.Element => {
  return (
    <>
      <h2 className={classNames(styles.title, 'typography-headline-large')}>Проекты</h2>

      <ul className={classNames(styles.projects)}>
        {projects.map((project, idx) => (
          <Project project={project} key={idx} tag='li' />
        ))}
      </ul>
    </>
  );
}
