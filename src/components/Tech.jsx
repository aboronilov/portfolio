import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"
import { styles } from "../style";
import Skill from "./Skill"
// import { motion } from "framer-motion";
// import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <section className="h-screen">
      <div className="">
        <p className={styles.sectionSubText}>My favorite technologies</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </div>
      {/* <div className='flex flex-row flex-wrap justify-center gap-10'> */}
        {/* {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))} */}
      {/* </div> */}
      <div className="
        flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 
        min-h-screen justify-center xl:space-y-0 mx-auto items-center
      ">
        <div className="grid grid-cols-4 gap-5">
          {technologies.map((item) => (
            <Skill key={item.name} image={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");