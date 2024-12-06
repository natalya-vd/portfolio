import classNames from 'classnames';
import { useEffect, useState } from 'react';

import styles from './BracketAnimation.module.css'

export const BracketAnimation = (): JSX.Element => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <div>
      {count % 2 === 0 && <div className={classNames(styles['bracket-animation'])}>{"<>"}</div>}
      {count % 2 !== 0 && <div className={classNames(styles['bracket-animation'])}>{"</>"}</div>}
    </div>
  );
}
