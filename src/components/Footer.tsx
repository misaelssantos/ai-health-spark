
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/10 backdrop-blur-md py-12 px-4 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="font-semibold text-xl mb-4 gradient-text">AI Health Spark</h3>
            <p className="text-blue-100/70 max-w-md">
              Revolucionando o setor de saúde com soluções inteligentes e tecnologia de ponta para um atendimento mais eficiente e humanizado.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-100/70">
                <Mail className="w-4 h-4" />
                <span>misael@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100/70">
                <Phone className="w-4 h-4" />
                <span>(85) 98694-0800</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Links Rápidos</h4>
            <div className="space-y-3 text-blue-100/70">
              <div>Sobre Nós</div>
              <div>Serviços</div>
              <div>Blog</div>
              <div>Política de Privacidade</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-blue-100/60">
          <p>&copy; 2025 AI Health Spark. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
