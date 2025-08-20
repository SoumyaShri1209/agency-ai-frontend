import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from 'motion/react'
const TrustedBy = () => {
  return (
    <motion.div
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    >
        <motion.h3
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.5}}
        viewport={{once:true}}
         className=' text-gray-800 text-xl  font-bold text-center dark:text-white'>Trusted by Leading Companies</motion.h3>
        <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren: 0.1}}
        viewport={{once:true}}
         className='flex items-center gap-10 justify-center flex-wrap m-10'>
            {company_logos.map((logo,index)=>(
              <motion.img 
              varient={{
                hidden:{opacity:0 , y:10},
                visible:{opacity:1 , y:0}
              }}
              transition={{duration:0.4}}
              key={index} src={logo} alt="" className='max-h-5 sm:max-h-6 dark:drop-shadow-xl' />
            )
           ) }
        </motion.div>
    </motion.div>
 )
}

export default TrustedBy