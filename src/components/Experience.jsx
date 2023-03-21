import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExpirienceCard = ({
  title,
  company_name,
  icon,
  iconBg,
  date,
  stack,
  points,
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1D1836", color: "#FFF" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={icon}
            alt={company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
        <p
          className="text-gray-500 text-[16px] font-semibold mt-2"
          style={{ margin: 0 }}
        >
          <span className="font-bold">Stack: </span>
          {stack}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point) => (
          <li
            key={point}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work expirience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map(
            ({
              id,
              title,
              company_name,
              icon,
              iconBg,
              date,
              stack,
              points,
            }) => (
              <ExpirienceCard
                key={id}
                title={title}
                company_name={company_name}
                icon={icon}
                iconBg={iconBg}
                date={date}
                stack={stack}
                points={points}
              />
            )
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
