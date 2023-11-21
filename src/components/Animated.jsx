import { motion } from 'framer-motion'

const animations = {
  initial: {opacity: 0 },
  animate: {opacity: 1 },
  exit: {opacity: 0 },
}

const Animated = ({ children }) => {
  return (
    <motion.div variants={animations} initial='initial' animate='animate' exit='exit' transition={{ duration: 2 }}>
      {children}
    </motion.div>
  )
}

export default Animated