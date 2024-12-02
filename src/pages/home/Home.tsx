import classnames from 'classnames'

import { MainLayout } from '@layouts/main-layout/MainLayout';


import styles from './Home.module.css'
import { Projects } from './Projects';
import { About } from './About';
import { Experience } from './Experience';

export const HomePage = (): JSX.Element => {
  return (
    <MainLayout>
      <main>
        <section className={classnames(styles['main-section'], 'noise')}>
          <div className={classnames(styles['main-section__wrapper'], 'container')}>
            <p className={classnames(styles['main-section__title'])}>Наталья</p>
            <p className={classnames(styles['main-section__title'])}>Вдовыдченко -</p>
            <h1 className={classnames(styles['main-section__subtitle'], 'typography-display-small')}>
              frontend разработчик
              <span>{"{ }"}</span>
            </h1>
          </div>
        </section>

        <section className={classnames(styles['projects-section'], 'container')}>
          <Experience />
        </section>

        <section className={classnames(styles['projects-section'], 'container')}>
          <Projects />
        </section>

        <section className={classnames(styles['projects-section'], 'container')}>
          <About />
        </section>
      </main>
    </MainLayout>
  );
}
