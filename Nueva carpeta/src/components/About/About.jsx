import React from 'react'
import styles from "../../assets/styles/components/About/About.module.css"

const About = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentImage}>
        <img src="" alt="" />
      </div>
      <div className={styles.contentText}>
          <h1 className={styles.title}>Quien soy?</h1>
          <p className={styles.parrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nam deserunt perspiciatis magnam dolorum distinctio, aperiam libero explicabo porro perferendis animi delectus iure aspernatur blanditiis quo provident rerum, architecto at!</p>
          <h2 className={styles.subTitle}>Contáctame</h2>
          <div className={styles.contentLogo}>
            <a href="#" className={styles.linkedin}><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" className={styles.gitHub}><i class="fa-brands fa-github"></i></a>
          </div>
      </div>
    </div>
  )
}

export default About;
