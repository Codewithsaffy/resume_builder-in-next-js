"use client";

import AllResume from "@/components/custom/dashoard/AllResume";
import CreateProject from "@/components/custom/dashoard/CreateProject";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Page = ({ params }: { params: { userEmail: string } }) => {
  return (
    <div className="min-h-screen py-12 px-6 bg-slate-100 dark:bg-background flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
          {<AllResume userEmail={params.userEmail} /> === undefined || null ? (
            <CreateProject userEmail={params.userEmail}>
              <div className="flex flex-col items-center bg-card dark:bg-secondary shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div className="bg-muted dark:bg-muted-dark rounded-full w-24 h-24 flex items-center justify-center transition-colors hover:bg-primary">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="w-10 h-10 text-card-foreground dark:text-primary-foreground"
                  />
                </div>
                <p className="mt-4 text-xl font-semibold text-card-foreground dark:text-primary-foreground">
                  Create New Project
                </p>
              </div>
            </CreateProject>
          ) : (
            <AllResume userEmail={params.userEmail} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
