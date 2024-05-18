"use client"

import Contact from "@/components/Contact";
import DescriptionComponent from "@/components/Description";
import Landing from "@/components/Landing";
import Preloader from "@/components/Preloader";
import ProjectComponent from "@/components/Projects";
import SlidingImagesComponent from "@/components/SlidingImages";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./page.module.css"

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <DescriptionComponent />
      <ProjectComponent />
      <SlidingImagesComponent />
      <Contact />
    </main>
  );
}
