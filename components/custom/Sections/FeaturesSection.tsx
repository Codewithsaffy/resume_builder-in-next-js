"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPalette, faMobileAlt, faBrain } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faEdit,
    title: "Effortless Customization",
    description: "Easily personalize your resume with our intuitive editor, powered by AI.",
  },
  {
    icon: faPalette,
    title: "Diverse Themes",
    description: "Choose from a curated selection of modern, professional themes designed to impress.",
  },
  {
    icon: faMobileAlt,
    title: "Mobile Responsive",
    description: "Your resume will look stunning on any device, anytime, anywhere.",
  },
  {
    icon: faBrain,
    title: "AI-Powered Suggestions",
    description: "Receive AI-driven recommendations to improve your resume's content and layout.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        >
          Explore Key Features
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[hsl(var(--surface))] p-8 rounded-lg shadow-lg text-center border border-[hsl(var(--foreground))] hover:shadow-xl hover:scale-105 transition transform"
            >
              <div className="mb-6">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-[hsl(var(--primary))] text-5xl mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="mt-3 text-[hsl(var(--muted-foreground))]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
