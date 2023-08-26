import { getCurrentUser } from "@/lib/session";
import { UserDropdown } from "./user-dropdown";
import { ModeToggle } from "./mode-toggle";

export const Header = async () => {
  const user = await getCurrentUser();
  return (
    <header className="sticky top-0 z-40 flex w-full dark:shadow-black shadow-slate-300 dark:bg-opacity-50 bg-background/10 backdrop-blur-md">
      <div className="flex items-center w-full px-4 space-x-4 lg:container h-14 sm:space-x-0">
        <div className="flex-1 h-full"></div>
        <nav className="items-center hidden h-full space-x-2 md:flex">
          <ModeToggle />
          <UserDropdown user={user} />
        </nav>
      </div>
    </header>
  );
};
