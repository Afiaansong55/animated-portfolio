import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
          Branding in software development creates a unique identity and builds trust, enhancing user experience and differentiation in a crowded market. 
          Consistent branding fosters user loyalty and strengthens marketing efforts. 
          A strong and evolving brand attracts community support and keeps the product relevant and trusted.

          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Design</h2>
          <p>
          Design is the process of creating solutions that are both functional and aesthetically pleasing. 
          It involves understanding user needs, brainstorming ideas, 
          and crafting visual and interactive elements that enhance usability and experience. 
          Good design balances form and function to create products that are both effective and engaging.

          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Development</h2>
          <p>         
             It involves writing code, testing functionality, and ensuring the product meets user requirements and technical standards.
             Effective development combines technical skills and problem-solving to create reliable and efficient software.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Testing</h2>
          <p>
          Testing is the process of evaluating software to ensure it functions correctly and meets user requirements. It involves identifying and fixing bugs, verifying features, and assessing performance under various conditions. Effective testing ensures software reliability, security, and a smooth user experience
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;