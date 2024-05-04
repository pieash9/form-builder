import { HiSaveAs } from "react-icons/hi";
import { Button } from "./ui/button";
import useDesigner from "./hooks/useDesigner";
import { UpdateFormContent } from "@/actions/form";
import { toast } from "./ui/use-toast";
import { useTransition } from "react";
import { FaSpinner } from "react-icons/fa";

const SaveFromBtn = ({ id }: { id: number }) => {
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElements = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElements);
      toast({ title: "Success", description: "Form content has been saved" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later",
        variant: "destructive",
      });
    }
  };
  return (
    <Button
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
      variant="outline"
      className="gap-2"
    >
      <HiSaveAs className="size-4" />
      Save
      {loading && <FaSpinner className="animate-spin size-4" />}
    </Button>
  );
};

export default SaveFromBtn;
