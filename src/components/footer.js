import React, { useEffect, useState } from 'react';
import "../style/footer.css"
import anime from 'animejs/lib/anime.es.js';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {

  const [arrowVisible, setArrowVisible] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });

  const arrowVariants = {
    visible: {
      y: [null, -8, 0],
      pathLength: [0, 1, 0],
      opacity: [null, 1, 0],
      transition: { delay: 0.1, type: 'spring', duration: 2, bounce: 0.6}
    },
    hidden: {
      y: 0,
      pathLength: 0,
      transition: { duration: 0.1}
    }
  }

  useEffect(() => {
    if (inView) {
      setArrowVisible(true)
    } else {
      setArrowVisible(false)
    }
  }, [inView]);

  useEffect(() => {

    const morphing = anime({
      targets: ".morph",
      d: [
        { value: "M0 241L21.5 232.5C43 224 86 207 128.8 204.3C171.7 201.7 214.3 213.3 257.2 220.8C300 228.3 343 231.7 385.8 237.2C428.7 242.7 471.3 250.3 514.2 242.3C557 234.3 600 210.7 642.8 204.3C685.7 198 728.3 209 771.2 220.8C814 232.7 857 245.3 878.5 251.7L900 258L900 301L878.5 301C857 301 814 301 771.2 301C728.3 301 685.7 301 642.8 301C600 301 557 301 514.2 301C471.3 301 428.7 301 385.8 301C343 301 300 301 257.2 301C214.3 301 171.7 301 128.8 301C86 301 43 301 21.5 301L0 301Z" },
        { value: "M0 209L21.5 209C43 209 86 209 128.8 216.7C171.7 224.3 214.3 239.7 257.2 236.8C300 234 343 213 385.8 203.5C428.7 194 471.3 196 514.2 205.8C557 215.7 600 233.3 642.8 232.5C685.7 231.7 728.3 212.3 771.2 207.7C814 203 857 213 878.5 218L900 223L900 301L878.5 301C857 301 814 301 771.2 301C728.3 301 685.7 301 642.8 301C600 301 557 301 514.2 301C471.3 301 428.7 301 385.8 301C343 301 300 301 257.2 301C214.3 301 171.7 301 128.8 301C86 301 43 301 21.5 301L0 301Z" },
        { value: "M0 195L21.5 204.3C43 213.7 86 232.3 128.8 238.5C171.7 244.7 214.3 238.3 257.2 229.8C300 221.3 343 210.7 385.8 209.5C428.7 208.3 471.3 216.7 514.2 215.5C557 214.3 600 203.7 642.8 199.3C685.7 195 728.3 197 771.2 205.7C814 214.3 857 229.7 878.5 237.3L900 245L900 301L878.5 301C857 301 814 301 771.2 301C728.3 301 685.7 301 642.8 301C600 301 557 301 514.2 301C471.3 301 428.7 301 385.8 301C343 301 300 301 257.2 301C214.3 301 171.7 301 128.8 301C86 301 43 301 21.5 301L0 301Z" },
        { value: "M0 236L21.5 230.2C43 224.3 86 212.7 128.8 208.2C171.7 203.7 214.3 206.3 257.2 215.7C300 225 343 241 385.8 243C428.7 245 471.3 233 514.2 230.5C557 228 600 235 642.8 230.2C685.7 225.3 728.3 208.7 771.2 201.5C814 194.3 857 196.7 878.5 197.8L900 199L900 301L878.5 301C857 301 814 301 771.2 301C728.3 301 685.7 301 642.8 301C600 301 557 301 514.2 301C471.3 301 428.7 301 385.8 301C343 301 300 301 257.2 301C214.3 301 171.7 301 128.8 301C86 301 43 301 21.5 301L0 301Z" },
      ],
      easing: 'easeInOutSine',
      duration: 10000,
      loop: true,
    })

  }, []);

  return (
    <>
      <footer>
        <svg id="morph" viewBox="0 0 900 300" width="900" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect x="0" y="0" width="900" height="300" fill="#FFFFFF"></rect>
          <path class="morph"
            d="M0 236L21.5 230.2C43 224.3 86 212.7 128.8 208.2C171.7 203.7 214.3 206.3 257.2 215.7C300 225 343 241 385.8 243C428.7 245 471.3 233 514.2 230.5C557 228 600 235 642.8 230.2C685.7 225.3 728.3 208.7 771.2 201.5C814 194.3 857 196.7 878.5 197.8L900 199L900 301L878.5 301C857 301 814 301 771.2 301C728.3 301 685.7 301 642.8 301C600 301 557 301 514.2 301C471.3 301 428.7 301 385.8 301C343 301 300 301 257.2 301C214.3 301 171.7 301 128.8 301C86 301 43 301 21.5 301L0 301Z"
            fill="#000000" strokeLinecap="round" strokeLinejoin="miter"></path>
        </svg>
        <div className="footer-content">
          <h3>Feel Free To Message Me On LinkedIn</h3>
          <address>
            <a className="linkedin-link" href="https://www.linkedin.com/in/cseri-peti-9b0502234/">
              <motion.i
                whileHover={{
                  scale: 1.7,
                  transition: { duration: 0.2 },
                }}
                class="fa-brands fa-linkedin fa-2xl" />
            </a>
          </address>
          <div ref={ref} className="arrowUp">
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" >
              <motion.path d="m 50.5 71 l 0 -60 m -23 19.5 l 23 -19 m 23 19 l -23 -19" fill="transparent"
                  strokeWidth="7"
                  stroke="white"
                  strokeLinecap="round"
                  initial={{pathLength: 0, opacity: 0}}
                  animate={arrowVisible ? arrowVariants.visible : arrowVariants.notvisible}
                />
            </motion.svg>
            <motion.h2
              initial={{opacity: 0, y: 0}}
              transition={{delay: 0.3, type: 'spring', duration: 2, bounce: .7}}
              whileInView={{opacity: [null, 1, 0], times: [0, 0.1, 0.5]}}
            >
              Click
            </motion.h2>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer