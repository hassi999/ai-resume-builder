
import { Sparkles } from "lucide-react";
import {
  Show,
  SignInButton,
  UserButton,
} from "@clerk/react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full border-b bg-white/80 shadow-sm backdrop-blur-md">
      <div className="flex w-full items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <span className="text-xl font-bold">
            Resume<span className="text-purple-600">AI</span>
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Logged Out */}
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button className="cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-6 text-white shadow-md transition hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </SignInButton>
          </Show>

          {/* Logged In */}
          <Show when="signed-in">
            <>
             <Button
  variant="outline"
  onClick={() => navigate("/dashboard")}
  className="cursor-pointer rounded-full bg-white px-6 py-5 shadow-sm hover:bg-gray-50"
>
  Dashboard
</Button>

              <UserButton />
            </>
          </Show>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
