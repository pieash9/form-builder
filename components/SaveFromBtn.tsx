import { HiSaveAs } from "react-icons/hi";
import { Button } from "./ui/button";

const SaveFromBtn = () => {
  return (
    <Button variant="outline" className="gap-2">
      <HiSaveAs className="size-4" />
      Save
    </Button>
  );
};

export default SaveFromBtn;
