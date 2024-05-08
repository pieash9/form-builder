import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex justify-between items-center border-b border-border h-[3.75rem] px-4 py-2">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </nav>
      <main className="size-full flex items-center justify-center flex-grow py-5">
        {children}
      </main>
    </div>
  );
};

export default Layout;
