import { DetailedHTMLProps, HTMLAttributes } from "react";
import classnames from 'classnames'

import { Button } from "@components/button/Button";
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

      <footer className={classnames(styles.footer)}>Контакты</footer>
    </div>
  );
}
