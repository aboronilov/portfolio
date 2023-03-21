import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, Suspense } from "react";

import CanvasLoader from "./Loader";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ id, name, tags, image, link }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 1 }}
      animated={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{duration: 0.5}}
    >
      <a href={link} target="_blank" className="transition hover:scale-105">
        {/* <Suspense fallback={<CanvasLoader />}>
        <motion.div variants={fadeIn("up", "spring", id * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          > */}
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(({ name, color }) => (
              <p key={name} className={`text-[14px] ${color}`}>
                #{name}
              </p>
            ))}
          </div>
        </div>
        {/* </Tilt>
        </motion.div>
      </Suspense> */}
      </a>
    </motion.div>
  );
};

const Works = () => {
  const [cat, setCat] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handClick = (item) => {
    setCat(item);
  };

  useEffect(() => {
    if (cat === "All") {
      setFilteredProjects(projects);
      return;
    }
    const filtered = projects.filter((item) => item.category.includes(cat));
    setFilteredProjects(filtered);
  }, [cat]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work.</p>
        <h2 className={styles.sectionHeadText}>My projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project's technologies are
          briefly described with the link to a deployed web app. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex gap-6 mt-10">
        {["All", "Fullstack", "UI/UX"].map((item) => (
          <button
            key={item}
            className={`
            text-primary 
            min-w-[100px] 
            py-2 
            rounded-lg 
            transition 
            hover:opacity-80 
            hover:scale-105
            ${cat === item ? "bg-neutral-500" : "bg-neutral-300"}
          `}
            onClick={() => handClick(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        layout
      >
        <AnimatePresence>
          {filteredProjects.map(({ id, name, tags, image, link, category }) => (
            <ProjectCard
              key={id}
              id={id}
              name={name}
              tags={tags}
              image={image}
              link={link}
              category={category}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
