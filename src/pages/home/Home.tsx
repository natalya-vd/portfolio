import classnames from 'classnames'

import { MainLayout } from '@layouts/main-layout/MainLayout';
import { BracketAnimation } from '@components/bracket-animation/BracketAnimation';

import { Projects } from './Projects';
import { About } from './About';
import { Experience } from './Experience';

import styles from './Home.module.css'

export const HomePage = (): JSX.Element => {
  return (
    <MainLayout>
      <main>
        <section className={classnames(styles['main-section'], styles['section-margin'], 'noise')}>
          <div className={classnames(styles['main-section__wrapper'], 'container')}>
            <p className={classnames(styles['main-section__title'])}>Наталья</p>
            <p className={classnames(styles['main-section__title'])}>Вдовыдченко -</p>
            <div className={classnames(styles['main-section__subtitle'])}>
              <h1>
                frontend разработчик
              </h1>
              <BracketAnimation />
            </div>
          </div>
        </section>

        <div className='scroll-to-element' id="experience" />

        <section className={classnames(styles['section-margin'], 'container')}>
          <Experience />
        </section>

        <div className='scroll-to-element' id="projects" />

        <section className={classnames(styles['section-margin'], 'container')}>
          <Projects />
        </section>

        <div className='scroll-to-element' id="about" />

        <section className={classnames(styles['section-margin'], 'container')}>
          <About />
        </section>
      </main>
    </MainLayout>
  );
}
