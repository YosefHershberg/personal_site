import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '@/styles'
import { services } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  return (
    <>
      <motion.div
        // variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          // variants={
          //   fadeIn('', '', 0.1, 1)
          // }
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a Full Stack web developer experienced with React, Node, Express, and MongoDB, with the ability to develop an AI-based recipe creation application that helps users discover personalized dishes based on dietary preferences, ingredient availability, and nutritional requirements.
          I am ready for my next challenge in a company looking for a quick learner to develop its core applications and solve complex problems.
          <br />
          <br />

          As a technically sophisticated software developer, I have progressive experience in creating, coding, and improving both client-side and server-side applications to ensure a seamless application process. I specialize in building web architectures that ensure code reusability and maintainability.
          <br />
          <br />

          As a creative problem solver, I can think 'outside the box' to resolve technical issues and enhance operational efficiency. I quickly understand and master new skills, techniques, and technologies, thriving in fast-paced environments. I excel at transforming product requirements into technical specifications while staying abreast of industry trends and best practices.
          <br />
          <br />

          My expertise and commitment set me apart in a competitive industry. I am always seeking new challenges, and my dedication to excellence ensures that your business goals will be met quickly and efficiently. If you have any questions or would like to connect, please reach out.
          <br />
          <br />

          Throughout my journey enhancing my full stack development skills, I have picked up many useful technologies across various domains, including front-end frameworks, back-end development, database management, API integration, state management tools, and unit testing. My curiosity and passion for full stack development continue to grow.
        </motion.p>
      </div>

      <div className='mt-28 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');