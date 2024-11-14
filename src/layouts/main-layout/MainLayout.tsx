import { DetailedHTMLProps, HTMLAttributes } from "react";
import classnames from 'classnames'

import { Button } from "@shared/button/Button";
import { useThemeContext } from "@contexts/theme/useContext";
import { Divider } from "@shared/divider/Divider";
import { Switch } from "@shared/switch/Switch";

import styles from './MainLayout.module.css'

interface IMainLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> { }

export const MainLayout = ({ children }: IMainLayoutProps): JSX.Element => {
  const { theme, setTheme } = useThemeContext()

  const handleChecked = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <div className={classnames(styles.wrapper)}>
      <header className={classnames(styles.header)}>
        <div className={classnames(styles['header-wrapper'], 'container')}>
          <nav className={classnames(styles.navigation)}>
            <Button href="#" appearance="text">Опыт</Button>
            <Button href="#" appearance="text">Проекты</Button>
            <Button href="#" appearance="text">Обо мне</Button>
            <Button href="#" appearance="text">Контакты</Button>
          </nav>
          <Divider appearance="vertically" className={styles.divider} />
          <Switch checked={theme === 'dark'} onChecked={handleChecked} />
        </div>
      </header>

      <div className={classnames(styles.content)}>{children}</div>

      <footer className={classnames(styles.footer)}>
        <div className="container">
          <div className={classnames(styles['footer__content'])}>
            <div></div>

            <div>
              <h2 className={classnames(styles['footer__title'], 'typography-title-medium')}>Контакты</h2>
              <ul className={classnames(styles['footer__list'])}>
                <li className={classnames(styles['footer__item'])}>
                  <span>Telegram</span>
                  <a href="https://t.me/natasha_vd" target="_blank">@natasha_vd</a>
                </li>
                <li className={classnames(styles['footer__item'])}>
                  <span>GitHub</span>
                  <a href="https://github.com/natalya-vd" target="_blank">natalya-vd</a>
                </li>
                <li className={classnames(styles['footer__item'])}>
                  <span>E-mail</span>
                  <a href="mailto:natasha-vd@yandex.ru">natasha-vd@yandex.ru</a>
                </li>
                <li className={classnames(styles['footer__item'])}>
                  <span>Телефон</span>
                  <a href="tel:+9015169905">+7-901-516-99-05</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
