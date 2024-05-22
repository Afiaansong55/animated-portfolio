import { useRef } from 'react'
import './portfolio.scss';
import { motion,useScroll,useSpring,useTransform } from 'framer-motion';


const items = [
    {
      id:1,
      title: 'Bank App',
      img:'https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: 'Its an app that allows you to have access to your account via a mobile device '
    },
    {
        id:2,
        title: 'Restaurant App',
        img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/12/83/51/kozo.jpg?w=600&h=400&s=1',
        desc: 'We offer multi-course gourmet meals,sophisticated service and wait staff, and an upscale dining atmosphere'
    },     
    {
    
        id:3,
        title: 'AI App',
        img:'https://img.freepik.com/free-psd/artificial-intelligence-banner-template_23-2148975645.jpg?size=626&ext=jpg&ga=GA1.1.889912323.1707148932&semt=ais_user',
        desc: 'Allows computers and machines to simulate human intelligence and problem solving capabilities '
    },
];

const Single = ({item}) =>{
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
   // offset: ['end end', 'start start'],
  });

  const y = useTransform(scrollYProgress,[0,1], [-300, 300]);


    return (
      <section >
        <div className='container'>
          <div className='wrapper'>
            <div className='imageContainer' ref={ref}>
              <img src={item.img} alt='' />
            </div>   

            <motion.div className='textContainer' style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>  
        </div>
      </section>
    );
};
const Portfolio = () => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX} } className='progressBar'></motion.div>
      </div>
      {items.map((item)=> (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
