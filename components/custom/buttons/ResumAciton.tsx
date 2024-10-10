import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faShareAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

type ResumeActionsProps = {
  theme: string;
  setTheme: (theme: string) => void;
  handlePrint: () => void;
};

const themes = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900",
    text: "text-blue-900 dark:text-blue-100",
    accent: "bg-blue-500",
  },
  red: {
    bg: "bg-red-100 dark:bg-red-900",
    text: "text-red-900 dark:text-red-100",
    accent: "bg-red-500",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900",
    text: "text-green-900 dark:text-green-100",
    accent: "bg-green-500",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900",
    text: "text-purple-900 dark:text-purple-100",
    accent: "bg-purple-500",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900",
    text: "text-orange-900 dark:text-orange-100",
    accent: "bg-orange-500",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-900",
    text: "text-pink-900 dark:text-pink-100",
    accent: "bg-pink-500",
  },
};

const ResumeActions = ({
  theme,
  setTheme,
  handlePrint,
}: ResumeActionsProps) => {
  return (
    <div className="flex justify-end items-center space-x-4 p-4 bg-transparent mb-6 print:hidden">
      {/* Theme Selector */}
      {Object.keys(themes).map((themeName) => (
        <button
          key={themeName}
          onClick={() => setTheme(themeName)}
          className={`w-8 h-8 rounded-full ${
            themes[themeName as keyof typeof themes].accent
          } hover:opacity-80 transition duration-300`}
          aria-label={`Switch to ${themeName} theme`}
        >
          {theme === themeName && (
            <FontAwesomeIcon icon={faCheck} className="text-white w-4 h-4" />
          )}
        </button>
      ))}

      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition flex items-center space-x-2"
      >
        <FontAwesomeIcon icon={faPrint} />
        <span>Print</span>
      </button>

      {/* Share Button */}
      <button
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }}
        className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition flex items-center space-x-2"
      >
        <FontAwesomeIcon icon={faShareAlt} />
        <span>Share</span>
      </button>
    </div>
  );
};

export default ResumeActions;
