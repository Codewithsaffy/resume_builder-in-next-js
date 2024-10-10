"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faRobot, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] px-6 py-16 md:py-32">
      {/* Decorative Blurred Circle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[550px] h-[400px] md:h-[550px] bg-[hsl(var(--primary))] rounded-full opacity-20"
          style={{ filter: "blur(120px)" }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-8 text-center"
      >
        <div className="flex justify-center space-x-4">
          <FontAwesomeIcon icon={faRobot} className="text-[hsl(var(--primary))] text-4xl" />
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Unleash Your Potential with AI-Powered Resumes
          </h1>
          <FontAwesomeIcon icon={faLightbulb} className="text-[hsl(var(--primary))] text-4xl" />
        </div>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-[hsl(var(--muted-foreground))]">
          Our platform uses cutting-edge AI to help you build visually stunning, tailored resumes
          that stand out from the crowd. Empower your career growth with smart, professional designs.
        </p>
        {/* Call to Action Button */}
        <div className="flex justify-center">
          <Button className="bg-[hsl(var(--primary))] hover:bg-opacity-80 text-[hsl(var(--primary-foreground))] text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center space-x-2 transition transform hover:scale-105 shadow-lg">
            Get Started with AI
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </motion.div>

      {/* Additional Decorative Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-12 right-12 text-[hsl(var(--primary))] text-6xl opacity-50"
      >
        <FontAwesomeIcon icon={faRobot} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-12 left-12 text-[hsl(var(--primary))] text-6xl opacity-50"
      >
        <FontAwesomeIcon icon={faLightbulb} />
      </motion.div>
    </section>
  );
}
