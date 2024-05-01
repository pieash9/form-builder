"use client";

import { cn } from "@/lib/utils";
import DesignerSidebar from "./DesignerSidebar";
import { useDroppable } from "@dnd-kit/core";

const Designer = () => {
  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });
  return (
    <div className="flex size-full">
      <div className="w-full p-4">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background max-w-[920px] h-full mx-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {droppable.isOver ? (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded-md bg-primary/20"></div>
            </div>
          ) : (
            <p className="text-3xl text-muted-foreground flew flex-grow items-center font-bold">
              Drop here
            </p>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;
