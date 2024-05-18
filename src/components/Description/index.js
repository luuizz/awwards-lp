import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { slideUp, opacity } from './anim'
import styles from "./style.module.scss"
import Rounded from '@/commom/RoundedButton';

export default function DescriptionComponent() {

    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

    const description = useRef(null);

    const isInView = useInView(description)

  return (
    <div ref={description} className={styles.description}>
        <div className={styles.body}> 
            <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
            </p>
            <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
            <div data-scroll data-scroll-speed={0.1}>
                <Rounded className={styles.button}>
                    <p>About me</p>
                </Rounded>
            </div>
        </div>
    </div>
  )
}
