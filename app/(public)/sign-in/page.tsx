"use client";

import React from "react";
import { motion } from "framer-motion";
import GithubSignIn from "@/components/custom/buttons/GithubSignInBtn";
import GoogleSignIn from "@/components/custom/buttons/GoogleSignInBn";

const SignInPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6 text-center"
      >
        Sign In
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm mb-4 text-center max-w-md"
      >
        Access your account to manage your resume and take the next step in your career.
      </motion.p>

      {/* Sign-in Buttons */}
      <div className="space-y-4 w-full max-w-sm px-4">
        {/* Google Sign-In Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GoogleSignIn />
        </motion.div>

        {/* GitHub Sign-In Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GithubSignIn />
        </motion.div>
      </div>
    </section>
  );
};

export default SignInPage;
