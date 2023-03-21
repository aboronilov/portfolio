import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.7)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <ul className="text-white font-bold text-[24px] mt-4 ">About me</ul>
          <li className=" text-secondary text-[14px]">8+ years in finance and investment analysis</li>
          <li className=" text-secondary text-[14px]">English - C1</li>
          <li className=" text-secondary text-[14px]">French - C1</li>
          <li className=" text-secondary text-[14px]">Professional jazz guitarist</li>
          <li className=" text-secondary text-[14px]">Laureate of international vocal contests</li>
        </div>

        <img
          src="/guitar.jpg"
          className="
            w-[200px] md:w-[300px] 
            h-[234px] md:h-[351px]
            mt-20 md:mt-0   
            rounded-xl
            transition
            hover:opacity-70       
          "
        />
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map(({ id, title, icon }) => (
          <ServiceCard key={id} title={title} icon={icon} index={id} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
