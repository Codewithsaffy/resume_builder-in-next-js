"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { handleGoogleSignIn } from "@/lib/authAction";

export default function GoogleSignIn() {
  return (
    <form action={handleGoogleSignIn}>
      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-md shadow-md transition-transform duration-300 hover:scale-105"
      >
        <FontAwesomeIcon icon={faGoogle} className="text-lg" />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}
