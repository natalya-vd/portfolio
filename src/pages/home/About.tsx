import classNames from "classnames";

import { MarqueeSkills } from "@components/marquee-skills/MarqueeSkills";

import { hardSkills, hardSkillsSlider } from "./data/hard-skills";
import styles from './About.module.css'

export const About = (): JSX.Element => {
  return (
    <>
      <h2 className={classNames(styles.title, 'typography-headline-large')}>Обо мне</h2>

      <div className="typography-body-large">
        <p className={classNames(styles.text)}>
          Привет! Меня зовут Наталья. Занимаюсь разработкой более 3-х лет. В настоящее время работаю frontend-разработчиком в компании Куб3, где занимаюсь разработкой CRM систем.
        </p>
        <p className={classNames(styles.text)}>
          За время работы я накопила значительный опыт в небольших командах, разрабатывая и улучшая приложения. Всегда стремлюсь к профессиональному росту и развитию, что позволяет мне повышать свою квалификацию и оставаться в курсе последних технологий. Активно занимаюсь самообразованием, проходя курсы по фронтенд разработке, алгоритмам и другим важным технологиям.
        </p>
        <p className={classNames(styles.text)}>
          В своей работе я всегда стремлюсь к высокому качеству кода. Моя цель - продолжать развиваться и повышать свои навыки, чтобы быть максимально полезной для команды и проектов. Кроме того, мне нравится изучать что-то новое, и это мотивирует меня постоянно совершенствовать свои знания и умения.
        </p>

        <div className={classNames(styles.content)}>
          <div>
            <p className="typography-title-large">Мои hard-skills:</p>

            <div className={classNames(styles.skills)}>
              <div>
                <h3 className={classNames(styles['skills__title'], 'typography-title-medium')}>Языки и технологии</h3>

                <ul>
                  {
                    hardSkills.languages.map((item, idx) => (
                      <li key={idx}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <h3 className={classNames(styles['skills__title'], 'typography-title-medium')}>Фреймворки и библиотеки</h3>

                <ul>
                  {
                    hardSkills.libraries.map((item, idx) => (
                      <li key={idx}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div>
                <h3 className={classNames(styles['skills__title'], 'typography-title-medium')}>Другое</h3>

                <ul>
                  {
                    hardSkills.miscellaneous.map((item, idx) => (
                      <li key={idx}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <MarqueeSkills skills={hardSkillsSlider} countString={4} />
        </div>
      </div>
    </>
  );
}
