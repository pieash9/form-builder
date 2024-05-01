import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex items-center justify-center size-full">
      <ImSpinner2 className="animate-spin size-12" />
    </div>
  );
};

export default Loading;
