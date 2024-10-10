"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { handleGithubSignIn } from "@/lib/authAction";

export default function GithubSignIn() {
  return (
    <form action={handleGithubSignIn}>
      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
      >
        <FontAwesomeIcon icon={faGithub} className="text-lg" />
        <span>Sign in with GitHub</span>
      </button>
    </form>
  );
}
