import { motion } from 'framer-motion';
import { styles } from '../styles';
import { me } from '../assets';

const Hero = () => {
  return (
    <>
      {/* <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div> */}
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`relative inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[50px] ${styles.paddingX}
          max-w-fit mx-auto flex flex-row items-center
          justify-between gap-10`}>

          <div className="relative">
            <img
                className='rounded-full border border-gray-100'
                src={me}
                alt="me"
            />
          </div>
          
          <div className=" w-[80vw] flex flex-col items-start top-0">
            <h1
              className={`text-eerieBlack font-poppins uppercase`}>
              {/* Hi, I'm{' '} */}
              <span
                className="sm:text-battleGray
                text-eerieBlack text-[40px] font-mova
                font-extrabold uppercase">
                Agung Jodi Pratama
              </span>
            </h1>
            <p className={`${styles.heroSubText} text-eerieBlack`}>
              Software Development Engineer (in Test)
            </p>
          </div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}

      </section>
    </>
  );
};

export default Hero;
