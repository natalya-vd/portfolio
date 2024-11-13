import classnames from 'classnames'

import { MainLayout } from '@layouts/main-layout/MainLayout';

import styles from './Home.module.css'

export const HomePage = (): JSX.Element => {
  return (
    <MainLayout>
      <main>
        <section className={classnames(styles['main-section'], 'noise')}>
          <div className={classnames(styles['main-section__wrapper'], 'container')}>
            <p className={classnames(styles['main-section__title'])}>Наталья</p>
            <p className={classnames(styles['main-section__title'])}>Вдовыдченко -</p>
            <h1 className={classnames(styles['main-section__subtitle'])}>
              frontend разработчик
              <span>{"{ }"}</span>
            </h1>
          </div>
        </section>

        {/* <section>Опыт</section>
        <section>Проекты</section>
        <section>Обо мне</section> */}
      </main>
    </MainLayout>
  );
}