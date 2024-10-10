"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-12 overflow-hidden">
      {/* Decorative Blurred Circle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[hsl(var(--primary))] rounded-full opacity-20"
          style={{ filter: "blur(120px)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Left Section */}
          <div className="text-center md:text-left space-y-4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-[hsl(var(--primary))]">AI Resume Builder</h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[hsl(var(--muted-foreground))]">
              Empowering your career with AI-powered resume tools.
            </p>
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex space-x-6 justify-center md:justify-start">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-[hsl(var(--primary))] hover:text-opacity-80 transition"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-[hsl(var(--primary))] hover:text-opacity-80 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-[hsl(var(--primary))] hover:text-opacity-80 transition"
            >
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-[hsl(var(--primary))] hover:text-opacity-80 transition"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
            </motion.a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[hsl(var(--foreground))] opacity-20 my-6"></div>

        {/* Footer Bottom: Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-[hsl(var(--muted-foreground))]"
        >
          <p className="mb-4 md:mb-0">&copy; 2024 AI Resume Builder. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[hsl(var(--primary))] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[hsl(var(--primary))] transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[hsl(var(--primary))] transition">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Additional Decorative Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-12 right-12 text-[hsl(var(--primary))] text-6xl opacity-50"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </motion.div>`
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-12 left-12 text-[hsl(var(--primary))] text-6xl opacity-50"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </motion.div>
    </footer>
  );
}
