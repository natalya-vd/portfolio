import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { shuffle } from "@lib/shuffle";
import { Chip } from "@shared/chip/Chip";

import styles from './MarqueeSkills.module.css'

interface IMarqueeSkillsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  skills: string[]
  countString?: number
}

function MarqueeItem({ skills, direction, ...props }: { skills: string[]; direction: 'left' | 'right' }): JSX.Element {
  return (
    <ul
      className={classNames(styles.marquee, {
        [styles['marquee_right']]: direction === 'right'
      })}
      {...props}
    >
      {
        skills.map((item, idx) => (
          <li key={'item' + idx}>
            <Chip tag="span" appearance="outlined">{item}</Chip>
          </li>
        ))
      }
    </ul>
  )
}

function MarqueeLine({ skills, direction, ...props }: { skills: string[]; direction: 'left' | 'right' }): JSX.Element {
  return (
    <div className={classNames(styles['marquee-container'])} {...props}>
      <MarqueeItem skills={skills} direction={direction} />
      <MarqueeItem skills={skills} direction={direction} />
    </div>
  )
}

export const MarqueeSkills = ({ skills, countString = 1, className, ...props }: IMarqueeSkillsProps): JSX.Element => {
  const getDirection = (idx: number) => {
    return idx % 2 === 0 ? 'left' : 'right'
  }

  return (
    <div
      className={classNames(styles.wrapper, className)}
      {...props}
    >
      {
        Array.from({ length: countString }, (_, idx) => (
          <MarqueeLine
            key={'list' + idx}
            skills={shuffle(skills)}
            direction={getDirection(idx)}
          />
        ))
      }
    </div>
  );
}
