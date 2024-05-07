"use client";

import { HiCursorClick } from "react-icons/hi";
import { FormElementInstance, FormElements } from "./FormElements";
import { Button } from "./ui/button";

const FormSubmitComponent = ({
  formUrl,
  content,
}: {
  formUrl: string;
  content: FormElementInstance[];
}) => {
  const submitForm = async () => {};
  return (
    <div className="flex justify-center items-center size-full p-8">
      <div className="max-w-[620px] flex flex-col gap-4 flex-grow bg-background w-full p-8 overflow-y-auto border shadow-lg shadow-blue-700 rounded">
        {content.map((element) => {
          const FormElement = FormElements[element.type].formComponent;
          return <FormElement key={element.id} elementInstance={element} />;
        })}
        <Button className="mt-8" onClick={() => submitForm()}>
          <HiCursorClick className="mr-2" /> Submit
        </Button>
      </div>
    </div>
  );
};

export default FormSubmitComponent;
