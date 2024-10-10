"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteResume } from "@/helper/axios";
import {
  faEllipsisVertical,
  faEye,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const ResumeAcion = ({
  userEmail,
  _id,
}: {
  userEmail?: string;
  _id?: string;
}) => {
  const handleDlete = async () => {
    try {
      const res = await deleteResume(_id!);
      console.log("delete", res);
    } catch (error) {
      console.log(error);
    } 
  };
  return (
    <div className="absolute bottom-1 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <FontAwesomeIcon className="outline-none" icon={faEllipsisVertical} />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-white shadow-lg rounded-lg border border-gray-200 outline-none"
          align="end"
        >
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              href={`/resume/edit-resume/${userEmail}/${_id}`}
              className="flex gap-3 items-center w-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <FontAwesomeIcon className="text-green-500" icon={faPen} />
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button
              onClick={() => handleDlete()}
              className="flex gap-3 items-center w-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <FontAwesomeIcon className="text-red-500" icon={faTrash} />
              Delete
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href={`/resume/share/${userEmail}/${_id}`}
              className="flex gap-3 items-center w-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              <FontAwesomeIcon className="text-blue-500" icon={faEye} />
              View
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ResumeAcion;
