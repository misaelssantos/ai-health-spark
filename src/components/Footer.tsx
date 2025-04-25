
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="font-semibold text-xl mb-4">AI Health Spark</h3>
            <p className="text-muted-foreground max-w-md">
              Revolucionando o setor de saúde com soluções inteligentes e tecnologia de ponta para um atendimento mais eficiente e humanizado.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@aihealthspark.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-3 text-muted-foreground">
              <div>Sobre Nós</div>
              <div>Serviços</div>
              <div>Blog</div>
              <div>Política de Privacidade</div>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AI Health Spark. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
