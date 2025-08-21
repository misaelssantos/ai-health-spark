
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-md z-50 border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl gradient-text">SemiDoc IA</div>
      </div>
    </nav>
  );
}
