import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Header.css'
import { motion } from "framer-motion";
import { LogoAnimation } from '../animation';


const Header = () => {


  return (
    <>
      <header id='header' className=' around' >

        <div className='header around'>

          <motion.a variants={LogoAnimation} transition={{delay: 0.2, duration: 0.9, type: "tween"}} href='#Home' className='flex'>
            <div className='logo flex' >
              <div className='bg_logo' ></div>
              <h2 className='scan'  data-text="Caio...">Caio...</h2>
            </div>
          </motion.a>

          <Navbar />

          </div>

      </header>
    </>
  )
}

export default Header
