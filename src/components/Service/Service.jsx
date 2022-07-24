import React from 'react'
import pikachu from '../media/pikachu.webp'
import hantaro from '../media/hamtaro.png'
import medabee from '../media/bee.png'
import './Service.css'
import { motion } from 'framer-motion'
import {useScroll} from '../useScroll'
import { ServiceAnimation } from '../animation'
import { ServiceCardAnimation } from '../animation'

const Service = () => {
  const[element, controls] = useScroll();

  return (
    <>
      <section id='Service' className='flex column'>

        <div className='service' ref={element}>

          <div className='bang'></div>
            <motion.h3 variants={ServiceAnimation} animate={controls} transition={{delay: 0.2, duration: 0.9, type: "tween"}}>- service / install</motion.h3>
          <div className='container_service flex'>

              <motion.div variants={ServiceCardAnimation} animate={controls} transition={{delay: 0.5, duration: 1.2, type: "tween"}} className='card_service around column'>
                <h1>Landing-Page</h1>
                <p>Usada para atrair a atenção dos visitantes ou para promover um pedaço específico do seu conteúdo e em seguida direcionar os visitantes diretamente para seu site</p>
                <img src={pikachu} alt='prop'/>
              </motion.div>

              <motion.div variants={ServiceCardAnimation} animate={controls} transition={{delay: 0.7, duration: 1.2, type: "tween"}} className='card_service around column'>
                <h1>Ecommerce</h1>
                <p> comércio eletrônico, é uma modalidade de negócio em que as transações comerciais são realizadas totalmente online.</p>
                <img src={hantaro} alt='prop'/>
              </motion.div>

              <motion.div variants={ServiceCardAnimation} animate={controls} transition={{delay: 0.9, duration: 1.2, type: "tween"}} className='card_service around column'>
                <h1>SEO</h1>
                <p>São técnicas, estratégias, formas de programar e diagramar seu conteúdo com o objetivo de melhorar seu posicionamento nos resultados orgânicos dos mecanismos de busca.</p>
                <img className='bee'  src={medabee} alt='prop'/>
              </motion.div>
              
            </div>
          </div>
      </section>
    </>
  )
}

export default Service