/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={
      <div>
        <h3 className="text-dim text-[16px] font-bold font-beckman">
          {experience.date}
        </h3>
        <h3 className="text-dim font-bold">
          {experience.duration}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain rounded-full"
        />
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <h3
        className="text-taupe text-[24px] font-bold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.company_name}
      </h3>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>

            <div className='flex items-center gap-5'>
              <button
                className="live-demo flex justify-between 
                sm:text-[18px] text-[14px] text-timberWolf 
                font-bold font-beckman items-center py-5 pl-3 pr-3 
                whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
                w-[125px] h-[46px] rounded-[10px] bg-jetLight 
                hover:bg-battleGray 
                hover:text-eerieBlack transition duration-[0.2s] 
                ease-in-out"
                onClick={() =>
                  window.open(
                    import.meta.env.VITE_RESUME_DOWNLOAD_URL, 
                    '_blank'
                  )
                }
                onMouseOver={() => {
                  document
                    .querySelector('.download-btn')
                    .setAttribute('src', downloadHover);
                }}
                onMouseOut={() => {
                  document
                    .querySelector('.download-btn')
                    .setAttribute('src', download);
                }}>
                My Resume
                <img
                  src={download}
                  alt="download"
                  className="download-btn sm:w-[26px] sm:h-[26px] 
                  w-[23px] h-[23px] object-contain"
                />
              </button>

              <button
                className="live-demo flex justify-between 
                sm:text-[18px] text-[14px] text-timberWolf 
                font-bold font-beckman items-center py-5 pl-3 pr-3 
                whitespace-nowrap gap-1 sm:w-[148px] sm:h-[58px] 
                w-[125px] h-[46px] rounded-[10px] bg-jetLight 
                hover:bg-battleGray 
                hover:text-eerieBlack transition duration-[0.2s] 
                ease-in-out"
                onClick={() =>
                  window.open(
                    import.meta.env.VITE_PROFILE_DOWNLOAD_URL,
                    '_blank'
                  )
                }
                onMouseOver={() => {
                  document
                    .querySelector('.download-btn')
                    .setAttribute('src', downloadHover);
                }}
                onMouseOut={() => {
                  document
                    .querySelector('.download-btn')
                    .setAttribute('src', download);
                }}>
                My Profile
                <img
                  src={download}
                  alt="download"
                  className="download-btn sm:w-[26px] sm:h-[26px] 
                  w-[23px] h-[23px] object-contain"
                />
              </button>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

const ExperienceSectionWrapper = SectionWrapper(Experience, 'work');
export default ExperienceSectionWrapper;
