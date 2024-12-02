import { useEffect, useRef } from "react";
import classNames from "classnames";

import styles from './Cursor.module.css'

export const Cursor = (): JSX.Element => {
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef<HTMLDivElement | null>(null);
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const size = 30;

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY
    }

    moveCircle(mouse.current.x, mouse.current.y);
  }

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

  const animate = () => {
    const { x, y } = delayedMouse.current;
    const delay = 0.15

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, delay),
      y: lerp(y, mouse.current.y, delay)
    }

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  }

  const moveCircle = (x: number, y: number) => {
    if (circle.current) {
      circle.current.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    }
  }

  useEffect(() => {
    animate()
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      if (rafId.current) {
        window.cancelAnimationFrame(rafId.current)
      }
    }
  }, [])



  return (
    <div className={classNames(styles.wrapper)}>
      <div
        ref={circle}
        style={{
          width: size,
          height: size,
        }}
        className={classNames(styles.cursor)}
      />
    </div>
  )
}
