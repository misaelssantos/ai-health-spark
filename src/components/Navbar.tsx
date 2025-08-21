
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/10 backdrop-blur-md z-50 border-b border-white/5">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/d1cde6c2-40e9-483a-b3a5-fa2d5ab9902b.png" 
            alt="SemiDoc IA Logo" 
            className="h-10 w-10"
          />
          <div className="font-semibold text-xl gradient-text">SemiDoc IA</div>
        </div>
      </div>
    </nav>
  );
}
