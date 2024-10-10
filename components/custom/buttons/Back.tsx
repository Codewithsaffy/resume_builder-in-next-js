import { Button } from "@/components/ui/button";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "lucide-react";
import React from "react";

const Back = ({ link }: { link: string }) => {
  return (
    <Link href={link}>
      <Button className="rounded-lg">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Button>
    </Link>
  );
};

export default Back;
