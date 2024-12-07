import { DetailedHTMLProps, HTMLAttributes } from "react";
import classnames from 'classnames'

import { Button } from "@shared/button/Button";
import { useThemeContext } from "@contexts/theme/useContext";
import { Cursor } from "@components/cursor/Cursor";
import { Divider } from "@shared/divider/Divider";
import { Switch } from "@shared/switch/Switch";
import TgIcon from '@components/icons/Tg.svg?react'
import GitHubIcon from '@components/icons/GitHub.svg?react'

import styles from './MainLayout.module.css'

interface IMainLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> { }

export const MainLayout = ({ children }: IMainLayoutProps): JSX.Element => {
  const { theme, setTheme } = useThemeContext()

  const currentDate = new Date().getFullYear()

  const handleChecked = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light')
  }

  return (
    <div className={classnames(styles.wrapper)}>
      <header className={classnames(styles.header)}>
        <div className={classnames(styles['header-wrapper'], 'container')}>
          <nav className={classnames(styles.navigation)}>
            <Button href="/#experience" appearance="text">Опыт</Button>
            <Button href="/#projects" appearance="text">Проекты</Button>
            <Button href="/#about" appearance="text">Обо мне</Button>
            <Button href="#contacts" appearance="text">Контакты</Button>
          </nav>
          <Divider appearance="vertically" className={styles.divider} />
          <Switch checked={theme === 'dark'} onChecked={handleChecked} />
        </div>
      </header>

      <div className={classnames(styles.content)}>
        {children}
      </div>

      <div className='scroll-to-element' id="contacts" />

      <footer className={classnames(styles.footer)}>
        <div className={classnames(styles['footer__inner'], "container")}>
          <ul className={classnames(styles['footer__list'])}>
            <li className={classnames(styles['footer__item'])}>
              <a href="https://t.me/natasha_vd" target="_blank">
                <TgIcon className={classnames(styles['footer__icon'])} />
              </a>
            </li>
            <li className={classnames(styles['footer__item'])}>
              <a href="https://github.com/natalya-vd" target="_blank">
                <GitHubIcon className={classnames(styles['footer__icon'], styles['footer__icon_github'])} />
              </a>
            </li>
            <li className={classnames(styles['footer__item'])}>
              <a href="mailto:natasha-vd@yandex.ru">natasha-vd@yandex.ru</a>
            </li>
          </ul>

          <div>&copy;{currentDate} Вдовыдченко Наталья</div>
        </div>
      </footer>

      <Cursor />
    </div>
  );
}
