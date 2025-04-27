
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl gradient-text">AI Health Spark</div>
      </div>
    </nav>
  );
}
