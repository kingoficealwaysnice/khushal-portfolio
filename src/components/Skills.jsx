import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ category, skills }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="w-full">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <h3 className="text-white text-[20px] font-bold text-center mb-4">
          {category}
        </h3>
        <div className="mt-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="text-secondary text-[14px] mb-2 flex items-center group cursor-pointer transition-all duration-300 hover:translate-x-2"
            >
              <span className="text-[#915EFF] mr-2 group-hover:scale-125 transition-transform duration-300">•</span>
              <span className="group-hover:text-white transition-colors duration-300">{skill}</span>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Skills = () => {
  const skillsData = {
    "Machine Learning": [
      "Deep Learning",
      "Neural Networks",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Transfer Learning",
      "Model Optimization",
      "Feature Engineering",
    ],
    "ML Frameworks": [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "Hugging Face",
      "OpenCV",
      "Pandas",
      "NumPy",
    ],
    "Blockchain": [
      "Smart Contracts",
      "Solidity",
      "Web3.js",
      "Ethereum",
      "DeFi Protocols",
      "Token Standards",
      "Consensus Mechanisms",
      "Cryptographic Security",
    ],
    "Development Tools": [
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "Google Cloud",
      "Jupyter Notebooks",
      "MLflow",
      "DVC",
    ],
  };

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>What I can do</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-7">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCard key={category} category={category} skills={skills} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills"); 