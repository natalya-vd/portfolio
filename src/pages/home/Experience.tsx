import { Title } from "@components/title/Title";
import { Company } from "@components/company/Company";

import { experience } from "./data/experience";

import styles from './Experience.module.css'

export const Experience = (): JSX.Element => {
  const getMediaAppearance = (idx: number) => {
    return idx % 2 === 0 ? 'right' : 'left'
  }

  return (
    <>
      <Title tag="h2">Опыт</Title>

      <div className={styles.wrapper}>
        {experience.map((item, idx) => (
          <Company company={item} key={idx} mediaAppearance={getMediaAppearance(idx)} />
        ))}
      </div>
    </>
  );
}
