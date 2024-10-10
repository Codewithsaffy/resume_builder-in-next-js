"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faTachometerAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Profile from "@/components/custom/main/Profile";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUser } from "@/lib/authAction";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import CreateProject from "../dashoard/CreateProject";

export default function PublicHeader() {
  const [session, setSession] = useState<Session | null>(null);

  async function getSession() {
    const session = await getUser();
    setSession(session);
  }

  useEffect(() => {
    getSession();
  }, []);

  const path = usePathname();

  return (
    <>
      {path === "/sign-in" ? null : (
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-lg h-16 px-4 sm:px-6 flex justify-between items-center bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg sticky top-0 z-50"
        >
          <div className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
            <FontAwesomeIcon icon={faHome} className="text-lg sm:text-xl" />
            <span>Resume Builder</span>
          </div>
          {session ? (
            <nav className="flex items-center space-x-4 sm:space-x-6 font-medium">
              <Link
                href={`/dashboard/${session?.user?.email}`}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-accent-foreground text-primary-foreground transition"
              >
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  className="text-base sm:text-lg"
                />
                <span className="hidden sm:block">Dashboard</span>
              </Link>
              {session?.user?.email ? (
                <CreateProject userEmail={session.user.email}>
                  <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-accent-foreground text-primary-foreground transition">
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="text-base sm:text-lg"
                    />
                    <span className="hidden sm:block">Create Resume</span>
                  </div>
                </CreateProject>
              ) : (
                <div>Please log in to create a resume.</div>
              )}

              <Profile session={session} />
            </nav>
          ) : (
            <Link
              href={"/sign-in"}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-foreground text-white transition"
            >
              <FontAwesomeIcon icon={faUser} className="text-base sm:text-lg" />
              <span className="hidden sm:block">Get Started</span>
            </Link>
          )}
        </motion.header>
      )}
    </>
  );
}
