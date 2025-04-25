
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl">AI Health Spark</div>
        <div className="space-x-4 hidden sm:block">
          <Button variant="ghost" className="text-sm">Como Funciona</Button>
          <Button variant="ghost" className="text-sm">Serviços</Button>
          <Button variant="ghost" className="text-sm">Contato</Button>
        </div>
        <Button>Começar Agora</Button>
      </div>
    </nav>
  );
}
