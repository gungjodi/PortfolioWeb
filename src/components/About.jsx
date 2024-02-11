/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import {me} from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-24 h-24 object-contain bg-[hsl(0,0%,96%)] rounded-[10px]" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <div className='grid lg:grid-cols-3'>
        <div className='lg:col-span-2 lg:order-last'>
          <motion.p variants={textVariant()}>
            <h2 className='sm:text-battleGray
                text-eerieBlack text-[40px] font-mova
                font-bold uppercase'>Hi, I&lsquo;m Agung Jodi Pratama</h2>
          </motion.p>

          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify">
              A Senior Software Development Engineer in Test with a full-stack engineering background. 
              Specializing in Backend, API, Mobile, and Web automation testing.
          </motion.p>

          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify">
            My expertise extends to Java and JavaScript/TypeScript as primary programming languages, with additional proficiency in Go & Python.
            I adeptly utilize a comprehensive suite of automation tools, 
            encompassing JUnit, TestNG, RestAssured, Postman, Selenium, Appium, Cucumber, and Robot Framework.
            <br/>
          </motion.p>

          <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify">
            Working in a fast paced industry, I have developed a strong understanding of CI/CD tools such as Jenkins, 
            alongside adeptness with containerization and orchestration tools such as Docker and Kubernetes.
          </motion.p>

          <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify">
            Continuously embracing innovation, I perpetually explore and master emerging technologies to stay at the forefront of innovation.
          </motion.p>

          <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] text-justify">
            Beyond the realm of technology, I find joy in various hobbies such as 
            reading, singing, playing guitar, and playing video games during my leisure time.
          </motion.p>
        </div>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }} 
            className="lg:w-64 w-full mx-auto lg:mt-[5rem] mt-10 mb-10 bg-jetLight rounded-2xl px-8 py-6 shadow-card h-fit"
        >
          <div className="mt-3 w-fit mx-auto lg:w-full lg:mx-0">
              <img src={me} className="rounded-full w-36 shadow-card" alt="profile picture" srcSet=""/>
          </div>

          <div className="mt-5 w-fit mx-auto lg:w-full lg:mx-0">
              <h2 className="text-white font-bold text-2xl tracking-wide">Agung Jodi Pratama</h2>
          </div>
          <div className="mt-3 text-white text-sm w-fit mx-auto lg:w-full lg:mx-0">
              <span className="text-gray-400 font-semibold">Sr. Software Development Engineer in Test</span>
          </div>
        </motion.div>
        {/* <div className="relative flex justify-center items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}>
            <div className="relative flex lg:flex-row flex-col min-h-[50vh] gap-5">
            <motion.div
              variants={fadeIn('right', 'spring', 0 * 0.5, 0.75)}
              className={`relative flex items-center justify-center min-w-[20rem] 
              h-[26rem] cursor-pointer card-shadow`}>
                <div className="absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]"></div>

                <img
                  src={me}
                  alt="me"
                  className="absolute w-full h-full top-0 object-cover rounded-[24px]"
                />

                <div
                  className="absolute bottom-0 p-3 justify-start w-full 
                  flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
                  <h2
                    className="font-bold sm:text-[16px] text-[16px] 
                    text-silver uppercase font-beckman">
                    {'Agung Jodi Pratama'}
                  </h2>
                  <p
                    className="text-silver sm:text-[12px] text-[12px] 
                    sm:leading-[24px] leading-[18px]
                    font-poppins tracking-[1px]">
                    {'Sr. Software Development Engineer in Test'}
                  </p>
                  <p
                    className="text-silver sm:text-[12px] text-[12px] 
                    sm:leading-[24px] leading-[18px]
                    font-poppins tracking-[1px]">
                    {'Bali, Indonesia'}
                  </p>
                </div>
            </motion.div>
            </div>
          </motion.div>       
        </div> */}
      </div>
      <div className="lg:mt-10 flex flex-wrap gap-5 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

const AboutSectionWrapper = SectionWrapper(About, 'about') 
export default AboutSectionWrapper;