import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn("github")}>
      <Github className="h-4 w-4 mr-2 items-center justify-center m-auto" />
      Login
    </Button>
  );
};
