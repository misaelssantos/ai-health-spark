
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl">AI Health Spark</div>
      </div>
    </nav>
  );
}
