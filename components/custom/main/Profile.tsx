"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleSignOut } from "@/lib/authAction";
import { faAdd, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import React from "react";
import CreateProject from "../dashoard/CreateProject";
import Image from "next/image";

const Profile = ({ session }: { session: Session }) => {
  const router = useRouter();
  const handleSignOutMethod = async () => {
    try {
      await handleSignOut();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image
          width={40}
          height={40}
          src={session?.user?.image || ""} // Fallback image
          className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all"
          alt="Profile Picture"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-white shadow-lg rounded-lg border border-gray-200 py-2 w-48"
        align="end"
      >
        <DropdownMenuLabel className="text-gray-700 font-semibold text-sm px-3 py-2">
          My Account
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem asChild>
          <CreateProject userEmail={session?.user?.email || ""}>
            <div className="flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors rounded">
              <FontAwesomeIcon icon={faAdd} className="mr-3" />
              Create Resume
            </div>
          </CreateProject>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            onClick={() => {
              handleSignOutMethod();
            }}
            className="flex justify-between items-center w-full px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 transition-colors rounded"
          >
            <span>Logout</span>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="ml-3 text-red-600"
            />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
