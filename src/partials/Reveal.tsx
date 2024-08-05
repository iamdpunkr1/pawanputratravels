import {ReactNode,useEffect, useRef} from 'react'
import  {motion, useInView, useAnimation} from 'framer-motion'

const Reveal = ({children}:{children: ReactNode}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    useEffect(() => {
        if(isInView){
            mainControls.start('visible');
            slideControls.start('visible');
        }
    }, [isInView]);

  return (
    <div ref={ref} className='relative overflow-hidden text-center'>
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay:0.25}}
            >
            {children}
            </motion.div>

            <motion.div
                variants={{
                    hidden: {left: "0%"},
                    visible: {left: "100%"}
                }}
                initial="hidden"
                animate={slideControls}
                transition={{duration: 0.5, ease:"easeIn"}}
                style={{
                    position:"absolute",
                    bottom:4,
                    top:4,
                    left:0,
                    right:0,
                    // height:"2px",
                    // width:"0%",
                    background:"black",
                    // zIndex:20
                }}
                />

    </div>
  )
}

export default Reveal