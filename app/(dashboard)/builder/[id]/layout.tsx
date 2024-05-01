import { ReactNode } from "react";

const BuilderLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full flex flex-grow mx-auto">{children}</div>;
};

export default BuilderLayout;
